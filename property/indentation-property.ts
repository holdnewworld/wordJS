import { Property } from './property';

export class Indentation extends Property{
        
        
    value:Object;
    /**
     * Left indentation (twip)
     *
     * @var Object | 
     */
    private left:number = 0;

    /**
     * Right indentation (twip)
     *
     * @var int|float
     */
    private right:number = 0;

    /**
     * Additional first line indentation (twip)
     *
     * @var int|float
     */
    private firstLine:number;

    /**
     * Indentation removed from first line (twip)
     *
     * @var int|float
     */
    private hanging:number;

     constructor(value = {}){
         super('indentation');

         this.value = {
             left       : 0,
             right      : 0,
             firstLine  : null,
             hanging    : null
         }

     }
        
    /**
     * Get hanging
     *
     * @return int|float
     */
    public  getHanging():number{
        return this.value['hanging'];
    }

    /**
     * Set hanging
     *
     * @param int|float value
     * @return self
     */
    public setHanging(hangingValue:number = null):Indentation{
        if(typeof(hangingValue) !== 'number'){
            this.value['hanging'] = null;
        }else{
            this.value['hanging'] = hangingValue;
        }

        return this;
    }                            

    /**
     * Get left
     *
     * @return int|float
     */
    public getLeft():number{
        return this.value['left'];
    }

    /**
     * Set left
     *
     * @param int|float value
     * @return self
     */
    public  setLeft(leftValue:number = null):Indentation{
        this.value['left'] = leftValue;

        return this;
    }

    /**
     * Get right
     *
     * @return int|float
     */
    public  getRight():number {
        return this.value['right'];
    }

    /**
     * Set right
     *
     * @param int|float value
     * @return self
     */
    public  setRight(rightValue:number = null):Indentation    {
        this.value['right'] = rightValue;

        return this;
    }

    /**
     * Get first line
     *
     * @return int|float
     */
    public  getFirstLine():number    {
        return this.value['firstLine'];
    }

    /**
     * Set first line
     *
     * @param int|float value
     * @return self
     */
    public  setFirstLine(value = null):Indentation {
        this.value['firstLine'] = value;

        return this;
    }

}