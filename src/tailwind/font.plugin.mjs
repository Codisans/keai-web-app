const plugin = require("tailwindcss/plugin");

/**
 * Creates a Tailwind root font configuration array.
 * @param {{width: number, height?: number, min?: number, max?: number}} options - `width` of the design in `px`, optional `height` if vertical scrolling is necessary. Optional `min` and `max` viewport width in `px` used for scaling.
 * @returns {Array} Font size array
 */

function rootScale(options) {
    const { width, height, min, max } = options || {};
    const minSize = min ? roundNumber((min / width) * 16) : null;
    const maxSize = max ? roundNumber((max / width) * 16) : null;
    const vwSize = roundNumber(100 / (width / 16));

    let sizes = `${vwSize}vw`;

    if (height) {
        const vhSize = roundNumber((width / height) * vwSize);
        sizes = `min(${vwSize}vw, ${vhSize}vh)`;
    }

    if (minSize && maxSize) {
        sizes = `clamp(${minSize}px, ${sizes}, ${maxSize}px)`;
    } else if (minSize) {
        sizes = `max(${minSize}px, ${sizes})`;
    } else if (maxSize) {
        sizes = `min(${sizes}, ${maxSize}px)`;
    }

    return [sizes, {}];
}

/**
 * Creates a Tailwind font configuration array.
 * @param {number} size - Font size in `px`.
 * @param {{ fontFamily: string, fontWeight: string | number, lineHeight: number, letterSpacing: number, textTransform: string, min: number, max: number }} options - Line height, letter spacing, min and max values in `px`.
 * @returns {Array}
 */

function font(size, options) {
    const {
        fontFamily,
        fontWeight,
        lineHeight,
        letterSpacing,
        textTransform,
        min,
        max,
    } = options || {};
    let scaledSize = rem(size);

    if (min && max) {
        scaledSize = `clamp(${min}px, ${scaledSize}, ${max}px)`;
    } else if (min) {
        scaledSize = `max(${min}px, ${scaledSize})`;
    } else if (max) {
        scaledSize = `min(${scaledSize}, ${max}px)`;
    }

    return [
        scaledSize,
        {
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            lineHeight: lineHeight ? lineHeight / size : undefined,
            letterSpacing:
                letterSpacing !== undefined
                    ? letterSpacingVal(letterSpacing, size)
                    : undefined,
            textTransform: textTransform,
        },
    ];
}

/**
 * Converts a `px` dimension to a `rem` value.
 * @param {number} px
 * @returns {string}
 */
function rem(px) {
    return `${px / 16}rem`;
}

/**
 * Creates an em letter spacing value based on the base rem value.
 * @param {*} $px
 * @param {number} [$context=16]
 * @returns
 */
function letterSpacingVal($px, $context = 16) {
    return `${roundNumber((1 / $context) * $px)}em`;
}

/**
 * Rounds a float to the nearest 12 dp, dropping any uneeded 0's.
 * @param {number} number - Number to be rounded.
 * @param {number} [decimals = 12] - Number of characters to round to.
 * @returns {number}
 */
function roundNumber(number, decimals = 12) {
    var newnumber = new Number(number + "").toFixed(parseInt(decimals));
    return parseFloat(newnumber);
}

function buildFontProfile({ settings, screens = {}, fontFamily = {} }) {
    const utility = {};

    Object.keys(settings).forEach((key) => {
        switch (key) {
            case "base":
                const base = settings[key];
                const size = base[0];
                const properties = base[1];

                utility["fontSize"] = size;
                utility["fontFamily"] = properties["fontFamily"]
                    ? fontFamily[properties["fontFamily"]]?.join()
                    : properties["fontFamily"];
                utility["fontWeight"] = properties["fontWeight"];
                utility["letterSpacing"] = properties["letterSpacing"];
                utility["lineHeight"] = properties["lineHeight"];
                utility["textTransform"] = properties["textTransform"];

                break;
            case "screens":
                Object.keys(settings["screens"]).forEach((screenKey) => {
                    const screenSize = screens[screenKey];

                    if (screenSize) {
                        let screenUtilityKey;

                        if (
                            typeof screenSize === "object" &&
                            screenSize !== null
                        ) {
                            console.warn(
                                "Object media queries are not currently supported."
                            );
                        } else {
                            screenUtilityKey = `@media (min-width: ${screenSize})`;
                        }

                        const font = settings["screens"][screenKey];
                        const size = font[0];
                        const properties = font[1];

                        utility[screenUtilityKey] = {
                            fontSize: size,
                            fontFamily: properties["fontFamily"]
                                ? fontFamily[properties["fontFamily"]]?.join()
                                : undefined,
                            fontWeight: properties["fontWeight"],
                            letterSpacing: properties["letterSpacing"],
                            lineHeight: properties["lineHeight"],
                            textTransform: properties["textTransform"],
                        };
                    }
                });

                break;
            default:
                console.error(`Unknown property: ${key}`);
                break;
        }
    });

    return utility;
}

const FontSizes = plugin(function ({ addUtilities, theme }) {
    const fontConfig = theme("fontSize", {});
    const fontFamily = theme("fontFamily", {});
    const screens = theme("screens", {});
    const newUtilities = {};

    Object.keys(fontConfig).forEach((key) => {
        newUtilities[`.text-${key}`] = buildFontProfile({
            settings: fontConfig[key],
            screens: screens,
            fontFamily: fontFamily,
        });
    });

    addUtilities(newUtilities);
});

module.exports = { FontSizes, font, rootScale, rem };
