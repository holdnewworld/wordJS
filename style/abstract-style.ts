import { Property } from '../property/property';


export abstract class AbstractStyle{
    
    styleName:string;
    index:number;
    auto:boolean = false;

    public abstract getPropertyValue(propertyName:string):any;
    public abstract setPropertyValue(propertyName:string, value:any):AbstractStyle;


    public getStyleName():string{
        return this.styleName;
    }

    public setStyleName(value:string){
        this.styleName = value;
    }

    public getIndex():number{
        return this.index;
    }

    public setIndex(value:number):AbstractStyle{
        this.index = value;
        return this;
    }

    public isAuto():boolean{
        return this.auto;
    }

    public setAuto(value = true):AbstractStyle{
        this.auto = value;
        return this;
    }


    /**
     * Set style value template method
     *
     * @param string $key
     * @param string $value
     * @return self
     */
    public  setStyleValue(propertyName:string, value):AbstractStyle{

        this.setPropertyValue(propertyName, value);

        return this;
    }

    /**
     * Set style by using associative array
     *
     * @param array $values
     * @return self
     */
    protected setStyleByArray(values:Array<Property>=[]):AbstractStyle{
        for (let value of values) {
            this.setStyleValue(value.getName(), value.getValue());
        }

        return this;
    }

    setNonEmptyVal(value, def){
        if(value =='' || 'undefined'===typeof(value)){
            value = def;
        }
    }

    /**
     * Set bool value
     *
     * @param bool $value
     * @param bool $default
     * @return bool
     */
    setBoolVal(value, defaultValue):boolean{
        if (typeof(value) !== 'boolean') {
            value = defaultValue;
        }

        return value;
    }

    /**
     * Set numeric value
     *
     * @param mixed $value
     * @param int|float|null $default
     * @return int|float|null
     */
    setNumericVal(value, defaultValue = 1):number{
        if (typeof(value) !== 'number') {
            value = defaultValue;
        }

        return value;
    }

    /**
     * Set style using associative array
     *
     * @param array $style
     * @return self
     * @deprecated 0.11.0
     * @codeCoverageIgnore
     */
    public setArrayStyle(styles:Array<Property> = []){
        return this.setStyleByArray(styles);
    }

}
