/**
 * Set the opacity of a hex color
 * @param hexColor - the hex color code with the # sign.
 * @param opacity - The opacity of the color.
 * @returns The hex color with the opacity applied.
 */
export function setOpacity(hexColor, opacity) {
    return hexColor + (Math.ceil(opacity * 255).toString(16));
}

/**
 * Converts a color string to an rgba string
 * @param colorString - The color string to convert to an RGBA string.
 * @returns a string that represents the color in the format of rgb(r, g, b, a).
 */
export function fromColorStringToRGBA(colorString) {
    const hexColor = colorString.replace('#', '');
    if (hexColor.length === 3) {
        const r = parseInt(hexColor[0] + hexColor[0], 16);
        const g = parseInt(hexColor[1] + hexColor[1], 16);
        const b = parseInt(hexColor[2] + hexColor[2], 16);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    } else {
        if (hexColor.length === 6) {
            const r = parseInt(hexColor[0] + hexColor[1], 16);
            const g = parseInt(hexColor[2] + hexColor[3], 16);
            const b = parseInt(hexColor[4] + hexColor[5], 16);
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        } else {
            if (hexColor.length === 8) {
                const r = parseInt(hexColor[0] + hexColor[1], 16);
                const g = parseInt(hexColor[2] + hexColor[3], 16);
                const b = parseInt(hexColor[4] + hexColor[5], 16);
                const alpha = parseInt(hexColor[6] + hexColor[7], 16) / 255;
                const roundedAlpha = Math.round((alpha + Number.EPSILON) * 1000) / 1000
                return 'rgb(' + r + ', ' + g + ', ' + b + ', ' + roundedAlpha + ')';
                
            }
        }
    }
}

/**
 * Given a hex color, return the color that would be visible against the background
 * @param hexColor - The hex color code to convert.
 * @returns a hex color code that is either black or white.
 */
export function getContrastingColor(hexColor) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}