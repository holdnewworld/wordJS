import { Property } from '../property/property';
import { AbstractStyle } from './style';
import * as _helper from '../helpers';

/**
 * Border style
 */
export class BorderStyle extends AbstractStyle{
    /**
     * Border Top Size
     *
     * @var int|float
     */
    borderTopSize:Property;

    /**
     * Border Top Color
     *
     * @var string
     */
    borderTopColor:Property;

    /**
     * Border Left Size
     *
     * @var int|float
     */
    borderLeftSize:Property;

    /**
     * Border Left Color
     *
     * @var string
     */
    borderLeftColor:Property;

    /**
     * Border Right Size
     *
     * @var int|float
     */
    borderRightSize:Property;

    /**
     * Border Right Color
     *
     * @var string
     */
    borderRightColor:Property;

    /**
     * Border Bottom Size
     *
     * @var int|float
     */
    borderBottomSize:Property;

    /**
     * Border Bottom Color
     *
     * @var string
     */
    borderBottomColor:Property;

    constructor(){
        super();

        this.borderTopSize      = new Property('borderTopSize',0);
        this.borderRightSize    = new Property('borderRightSize',0);
        this.borderBottomSize   = new Property('borderBottomSize',0);
        this.borderLeftSize     = new Property('borderLeftSize',0);

        this.borderTopColor     = new Property('borderTopColor');
        this.borderRightColor   = new Property('borderRightColor');
        this.borderBottomColor  = new Property('borderBottomColor');
        this.borderLeftColor    = new Property('borderLeftColor');

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
    public  setPropertyValue(propertyName:string, value:any):Border{

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
     * Get border size
     *
     * @return integer[]
     */
    public getBorderSize():Array<number>{

        let top:number      = this['borderTopSize'].getValue();
        let right:number    = this['borderRightSize'].getValue();
        let bottom:number   = this['borderBottomSize'].getValue();
        let left:number     = this['borderLeftSize'].getValue();

        return [ top, right, bottom, left ];
    }

    /**
     * Set border size
     *
     * @param int|float value
     * @return self
     */
    public setBorderSize(value:number=0):Border{
        
        this.setPropertyValue('borderTopSize',      value);
        this.setPropertyValue('borderRightSize',    value);
        this.setPropertyValue('borderBottomSize',   value);
        this.setPropertyValue('borderLeftSize',     value);

        return this;
    }

    /**
     * Get border color
     *
     * @return string[]
     */
    public  getBorderColor():Array<string>{

        let top:string      = this.getProperty('borderTopColor').getValue();
        let right:string    = this.getProperty('borderRightColor').getValue();
        let bottom:string   = this.getProperty('borderBottomColor').getValue();
        let left:string     = this.getProperty('borderLeftColor').getValue();
        
        return [ top, right, bottom, left ];
    }

    /**
     * Set border color
     *
     * @param string value
     * @return self
     */
    public  setBorderColor(value:string = '#000'):Border  {
        
        this.setPropertyValue('borderTopColor',      value);
        this.setPropertyValue('borderRightColor',    value);
        this.setPropertyValue('borderBottomColor',   value);
        this.setPropertyValue('borderLeftColor',     value);

        return this;
    }

    /**
     * Check if any of the border is 0
     *
     * @return bool
     */
    public  hasBorder():boolean {
        let borders:Array<number> = this.getBorderSize();

        return !_helper.in_array(borders, 0);

    }
}
