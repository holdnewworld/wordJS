import { Property } from '../shared/shared';
import { AbstractStyle } from './style';
import * as _helper from '../helpers';

/**
 * Border style
 */
export class Border extends AbstractStyle{
    /**
     * Border Top Size
     *
     * @var int|float
     */
    borderTopSize:number;

    /**
     * Border Top Color
     *
     * @var string
     */
    borderTopColor:string;

    /**
     * Border Left Size
     *
     * @var int|float
     */
    borderLeftSize:number;

    /**
     * Border Left Color
     *
     * @var string
     */
    borderLeftColor:string;

    /**
     * Border Right Size
     *
     * @var int|float
     */
    borderRightSize:number;

    /**
     * Border Right Color
     *
     * @var string
     */
    borderRightColor:string;

    /**
     * Border Bottom Size
     *
     * @var int|float
     */
    borderBottomSize:number;

    /**
     * Border Bottom Color
     *
     * @var string
     */
    borderBottomColor:string;

    constructor(){
        super();

        this.borderTopSize = 0;
        this.borderRightSize = 0;
        this.borderBottomSize = 0;
        this.borderLeftSize = 0;
    }

    /**
     * Get border size
     *
     * @return integer[]
     */
    public getBorderSize():Array<number>{
        return [
            this.getBorderTopSize(),
            this.getBorderLeftSize(),
            this.getBorderRightSize(),
            this.getBorderBottomSize(),
        ];
    }

    /**
     * Set border size
     *
     * @param int|float value
     * @return self
     */
    public setBorderSize(value:number=0):Border{
        this.setBorderTopSize(value);
        this.setBorderLeftSize(value);
        this.setBorderRightSize(value);
        this.setBorderBottomSize(value);

        return this;
    }

    /**
     * Get border color
     *
     * @return string[]
     */
    public  getBorderColor():Array<string>{
        return [
            this.getBorderTopColor(),
            this.getBorderLeftColor(),
            this.getBorderRightColor(),
            this.getBorderBottomColor(),
        ];
    }

    /**
     * Set border color
     *
     * @param string value
     * @return self
     */
    public  setBorderColor(value:string = '#000'):Border  {
        this.setBorderTopColor(value);
        this.setBorderLeftColor(value);
        this.setBorderRightColor(value);
        this.setBorderBottomColor(value);

        return this;
    }

    /**
     * Get border top size
     *
     * @return int|float
     */
    public  getBorderTopSize():number{
        return this.borderTopSize;
    }

    /**
     * Set border top size
     *
     * @param int|float value
     * @return self
     */
    public  setBorderTopSize(value:number = 1):Border {
        this.borderTopSize = this.setNumericVal(value, this.borderTopSize);

        return this;
    }

    /**
     * Get border top color
     *
     * @return string
     */
    public  getBorderTopColor():string {
        return this.borderTopColor;
    }

    /**
     * Set border top color
     *
     * @param string value
     * @return self
     */
    public  setBorderTopColor(value = null):Border{
        this.borderTopColor = value;

        return this;
    }

    /**
     * Get border left size
     *
     * @return int|float
     */
    public  getBorderLeftSize():number{
        return this.borderLeftSize;
    }

    /**
     * Set border left size
     *
     * @param int|float value
     * @return self
     */
    public  setBorderLeftSize(value:number = 1):Border{
        this.borderLeftSize = this.setNumericVal(value, this.borderLeftSize);

        return this;
    }

    /**
     * Get border left color
     *
     * @return string
     */
    public  getBorderLeftColor():string {
        return this.borderLeftColor;
    }

    /**
     * Set border left color
     *
     * @param string value
     * @return self
     */
    public  setBorderLeftColor(value = null):Border{
        this.borderLeftColor = value;

        return this;
    }

    /**
     * Get border right size
     *
     * @return int|float
     */
    public  getBorderRightSize():number{
        return this.borderRightSize;
    }

    /**
     * Set border right size
     *
     * @param int|float value
     * @return self
     */
    public  setBorderRightSize(value = null):Border{
        this.borderRightSize = this.setNumericVal(value, this.borderRightSize);

        return this;
    }

    /**
     * Get border right color
     *
     * @return string
     */
    public  getBorderRightColor():string{
        return this.borderRightColor;
    }

    /**
     * Set border right color
     *
     * @param string value
     * @return self
     */
    public  setBorderRightColor(value = null):Border{
        this.borderRightColor = value;

        return this;
    }

    /**
     * Get border bottom size
     *
     * @return int|float
     */
    public  getBorderBottomSize():number {
        return this.borderBottomSize;
    }

    /**
     * Set border bottom size
     *
     * @param int|float value
     * @return self
     */
    public  setBorderBottomSize(value = null):Border{
        this.borderBottomSize = this.setNumericVal(value, this.borderBottomSize);

        return this;
    }

    /**
     * Get border bottom color
     *
     * @return string
     */
    public  getBorderBottomColor():string{
        return this.borderBottomColor;
    }

    /**
     * Set border bottom color
     *
     * @param string value
     * @return self
     */
    public  setBorderBottomColor(value = null):Border {
        this.borderBottomColor = value;

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
