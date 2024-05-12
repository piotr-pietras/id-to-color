import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
import Color from "color";

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

type ColorMethods =
  | "lighten"
  | "darken"
  | "lightness"
  | "saturate"
  | "desaturate"
  | "whiten"
  | "blacken";

export class IdToColor {
  private maxP = 65536;
  private palette?: string[];
  private manipulation: { key: ColorMethods; v: number }[] = [];

  private paletteColor(id: string) {
    const idH = bytesToHex(sha256(id));
    const idP = parseInt(idH.slice(0, 4), 16);
    const p = (idP / this.maxP) * (this.palette?.length! - 0.000001);
    const index = parseInt(p.toString());
    return this.palette![index];
  }

  private noPaletteColor(id: string) {
    const idH = bytesToHex(sha256(id));
    const hex = `#${idH.slice(0, 6)}`;
    const color = Color(hex);
    const colorM = this.manipulate(color);
    return colorM.hex();
  }

  private manipulate(color: Color<string>) {
    let colorM = color;
    if (this.manipulation.length) {
      this.manipulation.forEach(({ key, v }) => {
        colorM = colorM[key](v) as Color<string>;
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
  public setPalette(palette: string[]) {
    this.palette = palette;
    return this;
  }

  /**
   * Gets unique color for an id.
   * @param id
   */
  public get(id: string) {
    if (this.palette?.length) {
      return this.paletteColor(id);
    }
    return this.noPaletteColor(id);
  }

  /**
   * Lighten all colors
   * @param value
   */
  public lighten(v: number) {
    this.manipulation.push({ key: "lighten", v });
    return this;
  }

  /**
   * Darken all colors
   * @param value
   */
  public darken(v: number) {
    this.manipulation.push({ key: "darken", v });
    return this;
  }

  /**
   * Add lightness to all colors
   * @param value
   */
  public lightness(v: number) {
    this.manipulation.push({ key: "lightness", v });
    return this;
  }

  /**
   * Saturate all colors
   * @param value
   */
  public saturate(v: number) {
    this.manipulation.push({ key: "saturate", v });
    return this;
  }

  /**
   * Desaturate all colors
   * @param value
   */
  public desaturate(v: number) {
    this.manipulation.push({ key: "desaturate", v });
    return this;
  }

  /**
   * Whiten all colors
   * @param value
   */
  public whiten(v: number) {
    this.manipulation.push({ key: "whiten", v });
    return this;
  }

  /**
   * Blacken all colors
   * @param value
   */
  public blacken(v: number) {
    this.manipulation.push({ key: "blacken", v });
    return this;
  }
}
