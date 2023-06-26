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
export declare class IdToColor {
    private maxP;
    private palette?;
    private paletteSize?;
    private paletteColor;
    private noPaletteColor;
    /**
     * Palette is a array of colors encoded in hex.
     *
     * @example
     * const palatte = ["#D0F0C0","#F88379","#F4C2C2"]
     * @param palette
     */
    setPalette(palette: string[]): this;
    /**
     * Gets unique color for an id.
     * @param id
     * @returns
     */
    get(id: string): string;
}
