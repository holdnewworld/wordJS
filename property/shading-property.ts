import { Property } from './property';

export class Shading extends Property{

    value:Object;

    /**
     * Pattern readonlyants (partly)
     *
     * @readonly string
     * @link http://www.schemacentral.com/sc/ooxml/t-w_ST_Shd.html
     */
    readonly PATTERN_CLEAR = 'clear'; // No pattern
    readonly PATTERN_SOLID = 'solid'; // 100% fill pattern
    readonly PATTERN_HSTRIPE = 'horzStripe'; // Horizontal stripe pattern
    readonly PATTERN_VSTRIPE = 'vertStripe'; // Vertical stripe pattern
    readonly PATTERN_DSTRIPE = 'diagStripe'; // Diagonal stripe pattern
    readonly PATTERN_HCROSS = 'horzCross'; // Horizontal cross pattern
    readonly PATTERN_DCROSS = 'diagCross'; // Diagonal cross pattern

    private patternOptions:Array<string> = [
        this.PATTERN_CLEAR,
        this.PATTERN_SOLID,
        this.PATTERN_HSTRIPE,
        this.PATTERN_VSTRIPE,
        this.PATTERN_DSTRIPE,
        this.PATTERN_HCROSS,
        this.PATTERN_DCROSS
    ];

    constructor(){

        super('shading');

        this.value = {
            pattern         : this.PATTERN_CLEAR,
            color           : '',
            fill            : '',

        };
    }


    /**
     * Get pattern
     *
     * @return string
     */
    public  getPattern():string
    {
        return this.value['pattern'];
    }

    /**
     * Set pattern
     *
     * @param string value
     * @return self
     */
    public  setPattern(value:string = ''):Shading
    {
        
        this.value['pattern'] = this.setEnumValue(value, this.patternOptions, this.PATTERN_CLEAR);

        return this;
    }

    /**
     * Get color
     *
     * @return string
     */
    public  getColor():string
    {
        return this.value['color'];
    }

    /**
     * Set pattern
     *
     * @param string value
     * @return self
     */
    public  setColor(value:string = ''):Shading
    {
        this.value['color'] = value;

        return this;
    }

    /**
     * Get fill
     *
     * @return string
     */
    public  getFill():string
    {
        return this.value['fill'];
    }

    /**
     * Set fill
     *
     * @param string value
     * @return self
     */
    public  setFill(value:string = ''):Shading
    {
        this.value['fill'] = value;

        return this;
    }

}