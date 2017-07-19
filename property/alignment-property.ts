import { Property } from './property';

export class Alignment extends Property{

    readonly ALIGN_LEFT = 'left'; // Align left
    readonly ALIGN_RIGHT = 'right'; // Align right
    readonly ALIGN_CENTER = 'center'; // Align center
    readonly ALIGN_BOTH = 'both'; // Align both
    readonly ALIGN_JUSTIFY = 'justify'; // Alias for align both

    options:Array<string> = [   this.ALIGN_LEFT,
                                this.ALIGN_RIGHT,
                                this.ALIGN_CENTER,
                                this.ALIGN_BOTH,
                                this.ALIGN_JUSTIFY
                            ]

    /**
     * Create a new instance
     *
     * @param array $style
     */
    constructor(value = 'left'){
        super('alignment');

        this.setValue(value);
    }


    /**
     * Set alignment value
     *
     * @param string $value
     * @return self
     */
    public setValue(value:string = null):Property{

        if (value.toLowerCase() == this.ALIGN_JUSTIFY) {
            value = this.ALIGN_BOTH;
        }

        
        this.value = this.setEnumValue(value, this.options , this.getValue());

        return this;
    }
        
}