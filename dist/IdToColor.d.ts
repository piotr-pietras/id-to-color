export declare class IdToColor {
    private maxP;
    private palette?;
    private manipulation;
    private paletteColor;
    private noPaletteColor;
    private manipulate;
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
     */
    get(id: string): string;
    /**
     * Lighten all colors
     * @param value
     */
    lighten(v: number): this;
    /**
     * Darken all colors
     * @param value
     */
    darken(v: number): this;
    /**
     * Add lightness to all colors
     * @param value
     */
    lightness(v: number): this;
    /**
     * Saturate all colors
     * @param value
     */
    saturate(v: number): this;
    /**
     * Desaturate all colors
     * @param value
     */
    desaturate(v: number): this;
    /**
     * Whiten all colors
     * @param value
     */
    whiten(v: number): this;
    /**
     * Blacken all colors
     * @param value
     */
    blacken(v: number): this;
}
