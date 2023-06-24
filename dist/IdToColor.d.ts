/**
 * Finds unique color for an string id.
 * By setting pallete you may limit number of possible colors
 *
 * @example "with pallete"
 * const pallate = ["#D0F0C0","#F88379","#F4C2C2"]
 * const id = 'unique-id-1'
 * const color = new IdToColor.setPallate(pallete).get(id)
 *
 * @example "without pallete"
 * const id = 'unique-id-1'
 * const color = new IdToColor.get(id)
 */
export default class IdToColor {
    private maxP;
    private pallete?;
    private palleteSize?;
    private palleteColor;
    private noPalleteColor;
    /**
     * Pallete is a array of colors encoded in hex.
     *
     * @example
     * const pallate = ["#D0F0C0","#F88379","#F4C2C2"]
     * @param pallete
     */
    setPallete(pallete: string[]): this;
    get(id: string): string;
}
