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
  private maxP = 65536;
  private palette?: string[];
  private paletteSize?: number;

  private paletteColor(id: string) {
    const idH = bytesToHex(sha256(id));
    const idP = parseInt(idH.slice(0, 4), 16);
    const p = (idP / this.maxP) * this.paletteSize!;
    const index = Math.round(p);
    return this.palette![index];
  }

  private noPaletteColor(id: string) {
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
  public setPalette(palette: string[]) {
    this.palette = palette;
    this.paletteSize = palette.length - 1;
    return this;
  }

  /**
   * Gets unique color for an id.
   * @param id
   * @returns
   */
  public get(id: string) {
    if (this.paletteSize) {
      return this.paletteColor(id);
    }
    return this.noPaletteColor(id);
  }
}
