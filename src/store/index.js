import debounce from 'lodash.debounce';
import mapValues from 'lodash.mapvalues';

const state = {
    device: {},
    favoriteColors: [],
    menuSidebarIsOpen: false,
    colorSidebarIsOpen: false,
    colorSidebarContent: 'favorites',
    isSeparatedMode: false,
    colorBlindnessType: 'normal',
    colorAdjustment: {
        hue: 0,
        sat: 0,
        lum: 0,
    },
    isShadesVisible: false,
};

const mutations = {
    setDevice (state, device) {
        state.device = device;
    },
    setFavoriteColors (state, colors) {
        state.favoriteColors = [...new Set(colors)];
    },
    setColorSidebar(state, isOpen) {
        state.colorSidebarIsOpen = isOpen;
    },
    setMenuSidebar(state, isOpen) {
        state.menuSidebarIsOpen = isOpen;
    },
    setColorSidebarContent(state, content) {
        state.colorSidebarContent = content;
    },
    setSeparatedMode(state, isSeparated) {
        state.isSeparatedMode = isSeparated;
    },
    setColorBlindnessType(state, type) {
        state.colorBlindnessType = type;
    },
    setColorAdjustment(state, value) {
        state.colorAdjustment = value;
    },
    setShadesVisibility(state, value) {
        state.isShadesVisible = value;
    },
};

const actions = {
    checkDevice({ commit }) {
        if (window) {
            const device = {};
            const deviceWidths = {
                isSmallMobile: [0, 575],
                isMobile: [0, 767],
                isTablet: [768, 991],
                isDesktop: [992, Infinity],
                isLargeDesktop: [1200, Infinity],
            };
            const checkDevice = debounce(() => {
                const windowWidth = window.innerWidth;
                Object.assign(device, mapValues(deviceWidths, (value, key) => {
                    return windowWidth >= value[0] && windowWidth <= value[1];
                }));
                commit('setDevice', device);
            }, 300);
            window.addEventListener('resize', checkDevice);
            checkDevice();
        }
    },
    removeFavoriteColor({ state, commit }, value) {
        commit('setFavoriteColors', state.favoriteColors.filter(color => color !== value));
    },
    addFavoriteColor({ state, commit, dispatch }, value) {
        commit('setFavoriteColors', [
            ...state.favoriteColors,
            value,
        ]);
        dispatch('openColorSidebar');
    },
    toggleFavoriteColor({ state, dispatch }, value) {
        if (state.favoriteColors.indexOf(value) === -1) {
            dispatch('addFavoriteColor', value);
        } else {
            dispatch('removeFavoriteColor', value);
        }
    },
    toggleColorSidebar({ state, dispatch }, colorSidebarContent = 'favorites') {
        if (state.colorSidebarIsOpen && state.colorSidebarContent === colorSidebarContent) {
            dispatch('closeColorSidebar', colorSidebarContent);
        } else {
            dispatch('openColorSidebar', colorSidebarContent);
        }
    },
    openColorSidebar({ state, commit, dispatch }, colorSidebarContent = 'favorites') {
        if (state.isShadesVisible) {
            commit('setShadesVisibility', colorSidebarContent === 'favorites');
        }
        commit('setColorSidebar', true);
        commit('setColorSidebarContent', colorSidebarContent);
        dispatch('closeMenuSidebar');
    },
    closeColorSidebar({ commit }) {
        commit('setColorSidebar', false);
    },
    toggleMenuSidebar({ state, dispatch }) {
        if (state.menuSidebarIsOpen) {
            dispatch('closeMenuSidebar');
        } else {
            dispatch('openMenuSidebar');
        }
    },
    openMenuSidebar({ commit, dispatch }) {
        commit('setMenuSidebar', true);
        dispatch('closeColorSidebar');
    },
    closeMenuSidebar({ commit }) {
        commit('setMenuSidebar', false);
    },
    toggleSeparatedMode({ state, commit }) {
        commit('setSeparatedMode', !state.isSeparatedMode);
    },
    toggleShades({ state, commit, dispatch }) {
        commit('setShadesVisibility', !state.isShadesVisible);
        if (state.isShadesVisible && state.colorSidebarContent !== 'favorites') {
            dispatch('closeColorSidebar');
        }
    },
};

export default {
    state,
    mutations,
    actions,
};
