import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
/**
 * Finds unique color for an string id.
 * By setting palette you may limit number of possible colors
 *
 * @example "with palette"
 * const palatte = ["#D0F0C0","#F88379","#F4C2C2"]
 * const id = 'unique-id-1'
 * const colors = new IdToColor.setPalatte(palette).get(id)
 *
 * @example "without palette"
 * const id = 'unique-id-1'
 * const colors = new IdToColor.get(id)
 */
export class IdToColor {
    constructor() {
        this.maxP = 65536;
    }
    paletteColor(id) {
        const idH = bytesToHex(sha256(id));
        const idP = parseInt(idH.slice(0, 4), 16);
        const p = (idP / this.maxP) * this.paletteSize;
        const index = Math.round(p);
        return this.palette[index];
    }
    noPaletteColor(id) {
        const idH = bytesToHex(sha256(id));
        return `#${idH.slice(0, 6)}`;
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
        this.paletteSize = palette.length - 1;
        return this;
    }
    /**
     * Gets unique color for an id.
     * @param id
     * @returns
     */
    get(id) {
        if (this.paletteSize) {
            return this.paletteColor(id);
        }
        return this.noPaletteColor(id);
    }
}
