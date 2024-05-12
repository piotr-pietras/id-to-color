import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
import Color from "color";
export class IdToColor {
    constructor() {
        this.maxP = 65536;
        this.manipulation = [];
    }
    paletteColor(id) {
        const idH = bytesToHex(sha256(id));
        const idP = parseInt(idH.slice(0, 4), 16);
        const p = (idP / this.maxP) * (this.palette?.length - 0.000001);
        const index = parseInt(p.toString());
        return this.palette[index];
    }
    noPaletteColor(id) {
        const idH = bytesToHex(sha256(id));
        const hex = `#${idH.slice(0, 6)}`;
        const color = Color(hex);
        const colorM = this.manipulate(color);
        return colorM.hex();
    }
    manipulate(color) {
        let colorM = color;
        if (this.manipulation.length) {
            this.manipulation.forEach(({ key, v }) => {
                colorM = colorM[key](v);
            });
        }
        return colorM;
    }
    /**
     * Palette is a array of colors encoded in hex.
     *
     * @example
     * const palatte = ["#D0F0C0","#F88379","#F4C2C2"]
     * @param palette
     */
    setPalette(palette) {
        this.palette = palette;
        return this;
    }
    /**
     * Gets unique color for an id.
     * @param id
     */
    get(id) {
        if (this.palette?.length) {
            return this.paletteColor(id);
        }
        return this.noPaletteColor(id);
    }
    /**
     * Lighten all colors
     * @param value
     */
    lighten(v) {
        this.manipulation.push({ key: "lighten", v });
        return this;
    }
    /**
     * Darken all colors
     * @param value
     */
    darken(v) {
        this.manipulation.push({ key: "darken", v });
        return this;
    }
    /**
     * Add lightness to all colors
     * @param value
     */
    lightness(v) {
        this.manipulation.push({ key: "lightness", v });
        return this;
    }
    /**
     * Saturate all colors
     * @param value
     */
    saturate(v) {
        this.manipulation.push({ key: "saturate", v });
        return this;
    }
    /**
     * Desaturate all colors
     * @param value
     */
    desaturate(v) {
        this.manipulation.push({ key: "desaturate", v });
        return this;
    }
    /**
     * Whiten all colors
     * @param value
     */
    whiten(v) {
        this.manipulation.push({ key: "whiten", v });
        return this;
    }
    /**
     * Blacken all colors
     * @param value
     */
    blacken(v) {
        this.manipulation.push({ key: "blacken", v });
        return this;
    }
}
