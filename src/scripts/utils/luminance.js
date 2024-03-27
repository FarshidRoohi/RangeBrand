import { sRGBtoLin, HEXtoRGB, RGBtosRGB } from '~/scripts/utils/converter';
import { validateHex } from '~/scripts/utils/validator';

// https://stackoverflow.com/a/56678483
const getPerceivedLightness = (luminance) => {
    if (luminance <= (216 / 24389)) { // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
        return luminance * (24389 / 27); // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
    } else {
        return Math.pow(luminance, (1 / 3)) * 116 - 16;
    }
};

export const getLuminance = (color) => {
    if (validateHex(color)) {
        const [vR, vG, vB] = RGBtosRGB(HEXtoRGB(color));
        return (sRGBtoLin(vR) * 0.2126) +
                (sRGBtoLin(vG) * 0.7152) +
                (sRGBtoLin(vB) * 0.0722);
    }
    return 0;
};

const isLightMem = {};
export const isLight = (color) => {
    if (validateHex(color)) {
        if (!isLightMem[color]) {
            const luminance = getLuminance(color);
            isLightMem[color] = getPerceivedLightness(luminance) > 60;
        }
        return isLightMem[color];
    }
    return true;
};
