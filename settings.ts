import * as _helper from './helpers';

export class Settings{

        /**
         * Measurement units multiplication factor
         *
         * Applied to:
         * - Section: margins, header/footer height, gutter, column spacing
         * - Tab: position
         * - Indentation: left, right, firstLine, hanging
         * - Spacing: before, after
         *
         * @const string
         */
        static readonly UNIT_TWIP  = 'twip'; // = 1/20 point
        static readonly UNIT_CM    = 'cm';
        static readonly UNIT_MM    = 'mm';
        static readonly UNIT_INCH  = 'inch';
        static readonly UNIT_POINT = 'point'; // = 1/72 inch
        static readonly UNIT_PICA  = 'pica'; // = 1/6 inch = 12 points

        /**
         * Default font settings
         *
         * OOXML defined font size values in halfpoints, i.e. twice of what PhpWord
         * use, and the conversion will be conducted during XML writing.
         */
        static  DEFAULT_FONT_NAME = 'Arial';
        static  DEFAULT_FONT_SIZE = 10;
        static  DEFAULT_FONT_COLOR = '000000';
        static  DEFAULT_FONT_CONTENT_TYPE = 'default'; // default|eastAsia|cs

        /**
         * Measurement unit
         *
         * @var string 
         */
        private measurementUnit:string = Settings.UNIT_TWIP;

        /**
         * Default font name
         *
         * @var string
         */
        private defaultFontName = Settings.DEFAULT_FONT_NAME;

        /**
         * Default font size
         * 
         * @var int
         */
        private defaultFontSize = Settings.DEFAULT_FONT_SIZE;

        /**
         * Get measurement unit
         *
         * @return string
         */
        public getMeasurementUnit():string{
                return this.measurementUnit;
        }

        /**
         * Set measurement unit
         *
         * @param string $value
         * @return bool
         */
        public setMeasurementUnit(value):boolean{

                let units = [Settings.UNIT_TWIP, Settings.UNIT_CM, Settings.UNIT_MM, Settings.UNIT_INCH, Settings.UNIT_POINT, Settings.UNIT_PICA];
                if (!_helper.in_array(units, value)) {
                        return false;
                }
                this.measurementUnit = value;

                return true;
        }

        /**
         * Get default font name
         *
         * @return string
         */
        public static  getDefaultFontName():string{
                return Settings.DEFAULT_FONT_NAME;
        }

        /**
         * Set default font name
         *
         * @param string value
         * @return bool
         */
        public static  setDefaultFontName(value):boolean{
                if(typeof(value)==='string' && value.trim() !==''){
                        this.DEFAULT_FONT_NAME = value;
                        return true;
                }else{
                        return false;
                }
        }

        /**
         * Get default font size
         *
         * @return integer
         */
        public static getDefaultFontSize():number{
                return Settings.DEFAULT_FONT_SIZE;
        }

        /**
         * Set default font size
         *
         * @param int value
         * @return bool
         */
        public static setDefaultFontSize(value:number):boolean{
                if(typeof(value)==='number' && value>0){
                        this.DEFAULT_FONT_SIZE = value;
                        return true;
                }else{
                        return false;
                }
        }

}