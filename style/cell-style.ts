
import { BorderStyle } from './style';
import { Property, Shading } from '../property/property';

/**
 * Table cell style
 */
export class CellStyle extends BorderStyle{
    /**
     * Vertical alignment readonlyants
     *
     * @readonly string
     */
    readonly VALIGN_TOP = 'top';
    readonly VALIGN_CENTER = 'center';
    readonly VALIGN_BOTTOM = 'bottom';
    readonly VALIGN_BOTH = 'both';
    vAlignOptions:Array<string> = [
        this.VALIGN_TOP,
        this.VALIGN_CENTER,
        this.VALIGN_BOTTOM,
        this.VALIGN_BOTH,
    ];

    /**
     * Text direction readonlyants
     *
     * @readonly string
     */
    readonly TEXT_DIR_BTLR = 'btLr';
    readonly TEXT_DIR_TBRL = 'tbRl';
    textDirectionOptions:Array<string> = [ this.TEXT_DIR_BTLR, this.TEXT_DIR_TBRL ];

    /**
     * Vertical merge (rowspan) readonlyants
     *
     * @readonly string
     */
    readonly VMERGE_RESTART = 'restart';
    readonly VMERGE_CONTINUE = 'continue';
    vMergeOptions:Array<string> = [ this.VMERGE_CONTINUE, this.VMERGE_RESTART];

    /**
     * Default border color
     *
     * @readonly string
     */
    readonly DEFAULT_BORDER_COLOR = '000000';

    /**
     * Vertical align (top, center, both, bottom)
     *
     * @var string
     */
    private vAlign:Property;

    /**
     * Text Direction
     *
     * @var string
     */
    private textDirection:Property;

    /**
     * colspan
     *
     * @var integer
     */
    private gridSpan:Property;

    /**
     * rowspan (restart, continue)
     *
     * - restart: Start/restart merged region
     * - continue: Continue merged region
     *
     * @var string
     */
    private vMerge:Property;

    /**
     * Shading
     *
     * @var \PhpOffice\PhpWord\Style\Shading
     */
    private shading:Shading;

    constructor(){
        super();

        this.vAlign        = new Property('vAlign');
        this.textDirection = new Property('textDirection');
        this.gridSpan      = new Property('gridSpan');
        this.vMerge        = new Property('vMerge');
        this.shading       = new Shading();

    }


    public setProperty(property:Property){
            if(this.hasOwnProperty(property.getName())){
                    this[property.getName()] = property;
            }
    }

    public getProperty(propertyName:string):Property{
            if(this.hasOwnProperty(propertyName)){
                    return this[propertyName];
            }else{
                    return null;
            }
    }

    /**
     * Set Property value
     *
     * @param string key
     * @param mixed value
     * @return self
     */
    public  setPropertyValue(propertyName, value):CellStyle{

            if (propertyName == 'vAlign') {

                this[propertyName].setEnumValue(value, this.vAlignOptions, this.VALIGN_CENTER);

            } else if (propertyName == 'textDirection') {
                    this[propertyName].setEnumValue(value, this.textDirectionOptions, this.TEXT_DIR_BTLR);
            }else if(propertyName == 'vMerge'){
                this[propertyName].setEnumValue(value, this.vMergeOptions, this.VMERGE_CONTINUE);
            }else{
                if(this.hasOwnProperty(propertyName)){
                    this[propertyName].setValue(value);
                }
            }

            return this;
    }

    /**
     * Get Property Value
     * 
     * @param string propertyName 
     */
    public getPropertyValue(propertyName:string):any{
            if(this.hasOwnProperty(propertyName)){
                    return this[propertyName].getValue();
            }else{
                    return null;
            }
    }


    /**
     * Get background
     *
     * @return string
     */
    public  getBgColor()
    {
        if (this.shading !== null) {
            return this.shading.getFill();
        } else {
            return null;
        }
    }

    /**
     * Set background
     *
     * @param string value
     * @return self
     */
    public  setBgColor(value:string = null):Shading{
        return this.shading.setFill(value);
    }

    /**
     * Get default border color
     */
    public  getDefaultBorderColor() {
        return this.DEFAULT_BORDER_COLOR;
    }
}
