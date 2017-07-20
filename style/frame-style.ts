import { Property, Alignment } from '../property/property';
import { AbstractStyle } from './style';

export class FrameStyle extends AbstractStyle{

        /**
         * Length unit
         *
         * @readonly string
         */
        readonly UNIT_PT = 'pt'; // Mostly for shapes
        readonly UNIT_PX = 'px'; // Mostly for images
        private unitOptions:Array<string> = [this.UNIT_PT, this.UNIT_PX];

        /**
         * General positioning options.
         *
         * @readonly string
         */
        readonly POS_ABSOLUTE = 'absolute';
        readonly POS_RELATIVE = 'relative';
        private positioningOptions:Array<string> = [this.POS_ABSOLUTE, this.POS_RELATIVE];

        /**
         * Horizontal/vertical value
         *
         * @readonly string
         */
        readonly POS_CENTER = 'center';
        readonly POS_LEFT = 'left';
        readonly POS_RIGHT = 'right';
        readonly POS_TOP = 'top';
        readonly POS_BOTTOM = 'bottom';
        readonly POS_INSIDE = 'inside';
        readonly POS_OUTSIDE = 'outside';
        
        private vPosOptions:Array<string> = [
                this.POS_ABSOLUTE,   this.POS_TOP,   this.POS_CENTER,
                this.POS_BOTTOM,     this.POS_INSIDE,    this.POS_OUTSIDE
        ];

        private hPosOptions:Array<string> = [
                this.POS_ABSOLUTE,   this.POS_LEFT,   this.POS_CENTER,
                this.POS_RIGHT,      this.POS_INSIDE,     this.POS_OUTSIDE
        ];

        /**
         * Position relative to
         *
         * @readonly string
         */
        readonly POS_RELTO_MARGIN = 'margin';
        readonly POS_RELTO_PAGE = 'page';
        readonly POS_RELTO_COLUMN = 'column'; // horizontal only
        readonly POS_RELTO_CHAR = 'char'; // horizontal only
        readonly POS_RELTO_TEXT = 'text'; // vertical only
        readonly POS_RELTO_LINE = 'line'; // vertical only
        readonly POS_RELTO_LMARGIN = 'left-margin-area'; // horizontal only
        readonly POS_RELTO_RMARGIN = 'right-margin-area'; // horizontal only
        readonly POS_RELTO_TMARGIN = 'top-margin-area'; // vertical only
        readonly POS_RELTO_BMARGIN = 'bottom-margin-area'; // vertical only
        readonly POS_RELTO_IMARGIN = 'inner-margin-area';
        readonly POS_RELTO_OMARGIN = 'outer-margin-area';
        
        private hPosRelToOptions:Array<string> = [
                this.POS_RELTO_MARGIN,
                this.POS_RELTO_PAGE,
                this.POS_RELTO_COLUMN,
                this.POS_RELTO_CHAR,
                this.POS_RELTO_LMARGIN,
                this.POS_RELTO_RMARGIN,
                this.POS_RELTO_IMARGIN,
                this.POS_RELTO_OMARGIN
        ];

        private vPosRelToOptions:Array<string> = [
                this.POS_RELTO_MARGIN,
                this.POS_RELTO_PAGE,
                this.POS_RELTO_TEXT,
                this.POS_RELTO_LINE,
                this.POS_RELTO_TMARGIN,
                this.POS_RELTO_BMARGIN,
                this.POS_RELTO_IMARGIN,
                this.POS_RELTO_OMARGIN
        ];

        /**
         * Wrap type
         *
         * @readonly string
         */
        readonly WRAP_INLINE = 'inline';
        readonly WRAP_SQUARE = 'square';
        readonly WRAP_TIGHT = 'tight';
        readonly WRAP_THROUGH = 'through';
        readonly WRAP_TOPBOTTOM = 'topAndBottom';
        readonly WRAP_BEHIND = 'behind';
        readonly WRAP_INFRONT = 'infront';
        private wrapOptions:Array<string> = [
                this.WRAP_INLINE, this.WRAP_SQUARE, this.WRAP_TIGHT,
                this.WRAP_THROUGH, this.WRAP_TOPBOTTOM, this.WRAP_BEHIND,
                this.WRAP_INFRONT
        ];

        /**
         * Alignment Property
         *
         * @var Alignment Property
         */
        private alignment:Alignment;

        /**
         * Unit
         *
         * @var string
         */
        private unit:Property = new Property('unit', 'pt');

        /**
         * Width
         *
         * @var int|float
         */
        private width:Property;

        /**
         * Height
         *
         * @var int|float
         */
        private height:Property;

        /**
         * Leftmost (horizontal) position
         *
         * @var int|float
         */
        private left:Property = new Property('left', 0);

        /**
         * Topmost (vertical) position
         *
         * @var int|float
         */
        private top:Property = new Property('top', 0);

        /**
         * Position type: absolute|relative
         *
         * @var string
         */
        private pos:Property;

        /**
         * Horizontal position
         *
         * @var string
         */
        private hPos:Property;

        /**
         * Horizontal position relative to
         *
         * @var string
         */
        private hPosRelTo:Property;

        /**
         * Vertical position
         *
         * @var string
         */
        private vPos:Property;

        /**
         * Vertical position relative to
         *
         * @var string
         */
        private vPosRelTo:Property;

        /**
         * Wrap type
         *
         * @var string
         */
        private wrap:Property;


        constructor(){
                super();
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
        public  setPropertyValue(propertyName, value):FrameStyle{

                switch(propertyName){
                        case 'pos':
                                this.getProperty(propertyName).setEnumValue(value, this.positioningOptions, this.getPropertyValue(propertyName));
                                break;
                        case 'vPos':
                                this.getProperty(propertyName).setEnumValue(value, this.vPosOptions, this.getPropertyValue(propertyName));
                                break;
                        case 'hPosRelTo':
                                this.getProperty(propertyName).setEnumValue(value, this.hPosRelToOptions, this.getPropertyValue(propertyName));
                                break;
                        case 'vPosRelTo':
                                this.getProperty(propertyName).setEnumValue(value, this.vPosRelToOptions, this.getPropertyValue(propertyName));
                                break;
                        case 'wrap':
                                this.getProperty(propertyName).setEnumValue(value, this.wrapOptions, this.getPropertyValue(propertyName));
                                break;
                        default:
                                if(this.hasOwnProperty(propertyName)){
                                        this.getProperty(propertyName).setValue(value);
                                }
                                break;
                       
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
                        return this.getProperty(propertyName).getValue();
                }else{
                        return null;
                }
        }

}
