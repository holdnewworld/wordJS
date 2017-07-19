
import { ParagraphStyle } from './style/style';
/**
 * Style class
 */
export class Style{
    /**
     * Style register
     *
     * @var array
     */
    private static styles = [];

    /**
     * Add paragraph style
     *
     * @param string $styleName
     * @param array $styles
     * @return \PhpOffice\PhpWord\Style\Paragraph
     */
    public static addParagraphStyle(styleName, styles){
        return this.setStyleValues(styleName, new ParagraphStyle(), styles);
    }

    /**
     * Add font style
     *
     * @param string $styleName
     * @param array $fontStyle
     * @param array $paragraphStyle
     * @return \PhpOffice\PhpWord\Style\Font
     */
    public static addFontStyle(styleName, fontStyle, paragraphStyle = null)
    {
        return this.setStyleValues(styleName, new FontStyle('text', paragraphStyle), fontStyle);
    }

    /**
     * Add link style
     *
     * @param string $styleName
     * @param array $styles
     * @return \PhpOffice\PhpWord\Style\Font
     */
    public static addLinkStyle(styleName, styles){
        return this.setStyleValues(styleName, new Font('link'), styles);
    }

    /**
     * Add numbering style
     *
     * @param string $styleName
     * @param array $styleValues
     * @return \PhpOffice\PhpWord\Style\Numbering
     * @since 0.10.0
     */
    public static addNumberingStyle(styleName, styleValues){
        return this.setStyleValues(styleName, new Numbering(), styleValues);
    }

    /**
     * Add title style
     *
     * @param int $depth
     * @param array $fontStyle
     * @param array $paragraphStyle
     * @return \PhpOffice\PhpWord\Style\Font
     */
    public static addTitleStyle(depth, fontStyle, paragraphStyle = null){
        return this.setStyleValues("Heading_"+depth, new FontStyle('title', paragraphStyle), fontStyle);
    }

    /**
     * Add table style
     *
     * @param string $styleName
     * @param array $styleTable
     * @param array|null $styleFirstRow
     * @return \PhpOffice\PhpWord\Style\Table
     */
    public static addTableStyle(styleName, styleTable, styleFirstRow = null)
    {
        return this.setStyleValues(styleName, new Table(styleTable, styleFirstRow), null);
    }

    /**
     * Count styles
     *
     * @return int
     * @since 0.10.0
     */
    public static countStyles(){
        return this.styles.length;
    }

    /**
     * Reset styles.
     *
     * @since 0.10.0
     *
     * @return void
     */
    public static resetStyles(){
        this.styles = [];
    }

    /**
     * Set default paragraph style
     *
     * @param array $styles Paragraph style definition
     * @return \PhpOffice\PhpWord\Style\Paragraph
     */
    public static setDefaultParagraphStyle(styles){
        return this.addParagraphStyle('Normal', styles);
    }

    /**
     * Get all styles
     *
     * @return \PhpOffice\PhpWord\Style\AbstractStyle[]
     */
    public static  getStyles(){
        return this.styles;
    }

    /**
     * Get style by name
     *
     * @param string $styleName
     * @return \PhpOffice\PhpWord\Style\AbstractStyle Paragraph|Font|Table|Numbering
     */
    public static getStyle(styleName){

        if('undefined' !== typeof(this.styles[styleName])){
            return this.styles[styleName];
        }else{
            return null;
        }

    }

    /**
     * Set style values and put it to static style collection
     *
     * The $styleValues could be an array or object
     *
     * @param string name
     * @param \PhpOffice\PhpWord\Style\AbstractStyle $style
     * @param array|\PhpOffice\PhpWord\Style\AbstractStyle $value
     * @return \PhpOffice\PhpWord\Style\AbstractStyle
     */
    private static function setStyleValues(name, style, value = null){
        if (!isset(self::$styles[$name])) {
            if ($value !== null) {
                if (is_array($value)) {
                    $style->setStyleByArray($value);
                } elseif ($value instanceof AbstractStyle) {
                    if (get_class($style) == get_class($value)) {
                        $style = $value;
                    }
                }
            }
            $style->setStyleName($name);
            $style->setIndex(self::countStyles() + 1); // One based index
            self::$styles[$name] = $style;
        }

        return self::getStyle($name);
    }
}
