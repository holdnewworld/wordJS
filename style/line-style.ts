import { Property } from '../property/property';
import { ImageStyle } from './style';

export class LineStyle extends ImageStyle
{
        /**
         * Connector types
         *
         * @readonly string
         */
        readonly CONNECTOR_TYPE_STRAIGHT = 'straight';
        private connectorTypeOptions:Array<string> = [this.CONNECTOR_TYPE_STRAIGHT];

        /**
         * Arrow styles
         *
         * @readonly string
         */
        readonly ARROW_STYLE_BLOCK          = 'block';
        readonly ARROW_STYLE_OPEN           = 'open';
        readonly ARROW_STYLE_CLASSIC        = 'classic';
        readonly ARROW_STYLE_DIAMOND        = 'diamond';
        readonly ARROW_STYLE_OVAL           = 'oval';
        private arrowStyleOptions:Array<string> = [
                this.ARROW_STYLE_BLOCK  ,
                this.ARROW_STYLE_OPEN   ,
                this.ARROW_STYLE_CLASSIC,
                this.ARROW_STYLE_DIAMOND,
                this.ARROW_STYLE_OVAL   
        ];

        /**
         * Dash styles
         *
         * @readonly string
         */
        readonly DASH_STYLE_DASH = 'dash';
        readonly DASH_STYLE_ROUND_DOT = 'rounddot';
        readonly DASH_STYLE_SQUARE_DOT = 'squaredot';
        readonly DASH_STYLE_DASH_DOT = 'dashdot';
        readonly DASH_STYLE_LONG_DASH = 'longdash';
        readonly DASH_STYLE_LONG_DASH_DOT = 'longdashdot';
        readonly DASH_STYLE_LONG_DASH_DOT_DOT = 'longdashdotdot';

        private dashOptions:Array<string> = [
                this.DASH_STYLE_DASH, this.DASH_STYLE_DASH_DOT, this.DASH_STYLE_LONG_DASH,
                this.DASH_STYLE_LONG_DASH_DOT, this.DASH_STYLE_LONG_DASH_DOT_DOT, this.DASH_STYLE_ROUND_DOT,
                this.DASH_STYLE_SQUARE_DOT
        ];

        /**
         * flip Line
         *
         * @var boolean
         */
        private flip:Property = new Property('flip', false);

        /**
         * connectorType
         *
         * @var string
         */
        private connectorType:Property = new Property('connectorType', this.CONNECTOR_TYPE_STRAIGHT);

        /**
         * Line Weight
         *
         * @var int
         */
        private weight:Property;

        /**
         * Line color
         *
         * @var string
         */
        private color:Property;

        /**
         * Dash style
         *
         * @var string
         */
        private dash:Property;

        /**
         * Begin arrow
         *
         * @var string
         */
        private beginArrow:Property;

        /**
         * End arrow
         *
         * @var string
         */
        private endArrow:Property;



        setPropertyValue(propertyName, value):LineStyle{
                
                switch(propertyName){
                        case 'connectorType':
                                this.getProperty(propertyName).setEnumValue(value, this.connectorTypeOptions, this.getPropertyValue(propertyName));
                                break;
                        case 'beginArrow':
                        case 'endArrow':
                                this.getProperty(propertyName).setEnumValue(value, this.arrowStyleOptions, this.getPropertyValue(propertyName));
                                break
                        case 'dash':
                                this.getProperty(propertyName).setEnumValue(value, this.dashOptions, this.getPropertyValue(propertyName));
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
         * Get flip
         *
         * @return boolean
         */
        public  isFlip(){
                return this.getPropertyValue('flip');
        }

}
