import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
/**
 * Finds unique color for an string id.
 * By setting pallete you may limit number of possible colors
 *
 * @example "with pallete"
 * const pallate = ["#D0F0C0","#F88379","#F4C2C2"]
 * const id = 'unique-id-1'
 * const colors = new IdToColor.setPallate(pallete).get(id)
 *
 * @example "without pallete"
 * const id = 'unique-id-1'
 * const colors = new IdToColor.get(id)
 */
export class IdToColor {
    constructor() {
        this.maxP = 65536;
    }
    palleteColor(id) {
        const idH = bytesToHex(sha256(id));
        const idP = parseInt(idH.slice(0, 4), 16);
        const p = (idP / this.maxP) * this.palleteSize;
        const index = Math.round(p);
        return this.pallete[index];
    }
    noPalleteColor(id) {
        const idH = bytesToHex(sha256(id));
        return `#${idH.slice(0, 6)}`;
    }
    /**
     * Pallete is a array of colors encoded in hex.
     *
     * @example
     * const pallate = ["#D0F0C0","#F88379","#F4C2C2"]
     * @param pallete
     */
    setPallete(pallete) {
        this.pallete = pallete;
        this.palleteSize = pallete.length - 1;
        return this;
    }
    /**
     * Gets unique color for an id.
     * @param id
     * @returns
     */
    get(id) {
        if (this.palleteSize) {
            return this.palleteColor(id);
        }
        return this.noPalleteColor(id);
    }
}
