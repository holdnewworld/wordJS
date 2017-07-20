import { Property } from './property';

export class Spacing extends Property{

    /**
     * Value Object
     */
    value:Object;


    /**
     * Create a new instance
     *
     * @param array style
     */
    constructor(){
        super('spacing');

        this.value = {
            before      : null,
            after       : null,
            line        : null,
            rule        : 'auto'
        };
    }

    /**
     * Get before
     *
     * @return int|float
     */
    public  getBefore():number {
        return this.value['before'];
    }

    /**
     * Set before
     *
     * @param int|float value
     * @return self
     */
    public  setBefore(value:number = null):Spacing  {
        this.value['before'] = value;

        return this;
    }

    /**
     * Get after
     *
     * @return int|float
     */
    public  getAfter():number {
        return this.value['after'];
    }

    /**
     * Set after
     *
     * @param int|float value
     * @return self
     */
    public  setAfter(value = null):Spacing    {
        this.value['after'] = value;

        return this;
    }

    /**
     * Get line
     *
     * @return int|float
     */
    public  getLine():number
    {
        return this.value['line'];
    }

    /**
     * Set distance
     *
     * @param int|float value
     * @return self
     */
    public  setLine(value:number = null):Spacing
    {
        this.value['line'] = value;

        return this;
    }

    /**
     * Get line rule
     *
     * @return string
     */
    public  getRule():string
    {
        return this.value['rule'];
    }

    /**
     * Set line rule
     *
     * @param string value
     * @return self
     */
    public  setRule(value:string = null):Spacing
    {
        this.value['rule'] = value;

        return this;
    }

}