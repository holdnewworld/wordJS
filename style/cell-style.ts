
import { Border } from './style';
import { Property, Shading } from '../property/property';

/**
 * Table cell style
 */
export class Cell extends Border{
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
    public  setPropertyValue(propertyName, value):Cell{

            if (propertyName == 'vAlign') {

                this[propertyName].setEnumValue(value, this.vAlignOptions, this.VALIGN_CENTER);

            } else if (propertyName == 'textDirection') {
                    this[propertyName].setEnumValue(value, this.textDirectionOptions, this.TEXT_DIR_BTLR);
            }else if(propertyName == '')


            if(this.hasOwnProperty(propertyName)){
                    this[propertyName].setValue(value);
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
    public  setBgColor(value = null)
    {
        return this.setShading(array('fill' => value));
    }

    /**
     * Get grid span (colspan).
     *
     * @return integer
     */
    public  getGridSpan()
    {
        return this.gridSpan;
    }

    /**
     * Set grid span (colspan)
     *
     * @param int value
     * @return self
     */
    public  setGridSpan(value = null)
    {
        this.gridSpan = this.setIntVal(value, this.gridSpan);

        return this;
    }

    /**
     * Get vertical merge (rowspan).
     *
     * @return string
     */
    public  getVMerge()
    {
        return this.vMerge;
    }

    /**
     * Set vertical merge (rowspan)
     *
     * @param string value
     * @return self
     */
    public  setVMerge(value = null)
    {
        enum = array(self::VMERGE_RESTART, self::VMERGE_CONTINUE);
        this.vMerge = this.setEnumVal(value, enum, this.vMerge);

        return this;
    }

    /**
     * Get shading
     *
     * @return \PhpOffice\PhpWord\Style\Shading
     */
    public  getShading()
    {
        return this.shading;
    }

    /**
     * Set shading
     *
     * @param mixed value
     * @return self
     */
    public  setShading(value = null)
    {
        this.setObjectVal(value, 'Shading', this.shading);

        return this;
    }

    /**
     * Get default border color
     *
     * @deprecated 0.10.0
     * @codeCoverageIgnore
     */
    public  getDefaultBorderColor()
    {
        return self::DEFAULT_BORDER_COLOR;
    }
}
