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
    constructor(value={}){
        super('spacing');

        this.value = {
            before      : null,
            after       : null,
            line        : null,
            rule        : 'auto'
        }
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
    public  setAfter(value = null)
    {
        this->after = this->setNumericVal(value, this->after);

        return this;
    }

    /**
     * Get line
     *
     * @return int|float
     */
    public  getLine()
    {
        return this->line;
    }

    /**
     * Set distance
     *
     * @param int|float value
     * @return self
     */
    public  setLine(value = null)
    {
        this->line = this->setNumericVal(value, this->line);

        return this;
    }

    /**
     * Get line rule
     *
     * @return string
     */
    public  getRule()
    {
        return this->rule;
    }

    /**
     * Set line rule
     *
     * @param string value
     * @return self
     */
    public  setRule(value = null)
    {
        this->rule = value;

        return this;
    }

}