import { Property, Shading } from '../property/property';
import { AbstractStyle, ParagraphStyle } from './style';

/**
 * Font style
 */
class FontStyle extends AbstractStyle{
    
        /**
         * Underline types
         *
         * @readonly string
         */

        readonly UNDERLINE_NONE             = 'none';
        readonly UNDERLINE_DASH             = 'dash';
        readonly UNDERLINE_DASHHEAVY        = 'dashHeavy';
        readonly UNDERLINE_DASHLONG         = 'dashLong';
        readonly UNDERLINE_DASHLONGHEAVY    = 'dashLongHeavy';
        readonly UNDERLINE_DOUBLE           = 'dbl';
        readonly UNDERLINE_DOTHASH          = 'dotDash';
        readonly UNDERLINE_DOTHASHHEAVY     = 'dotDashHeavy';
        readonly UNDERLINE_DOTDOTDASH       = 'dotDotDash';
        readonly UNDERLINE_DOTDOTDASHHEAVY  = 'dotDotDashHeavy';
        readonly UNDERLINE_DOTTED           =  'dotted';
        readonly UNDERLINE_DOTTEDHEAVY      = 'dottedHeavy';
        readonly UNDERLINE_HEAVY            = 'heavy';
        readonly UNDERLINE_SINGLE           = 'single';
        readonly UNDERLINE_WAVY             = 'wavy';
        readonly UNDERLINE_WAVYDOUBLE       = 'wavyDbl';
        readonly UNDERLINE_WAVYHEAVY        = 'wavyHeavy';
        readonly UNDERLINE_WORDS            = 'words';

        private underlineOptions:Array<string> = [
                this.UNDERLINE_NONE           ,
                this.UNDERLINE_DASH           ,
                this.UNDERLINE_DASHHEAVY      ,
                this.UNDERLINE_DASHLONG       ,
                this.UNDERLINE_DASHLONGHEAVY  ,
                this.UNDERLINE_DOUBLE         ,
                this.UNDERLINE_DOTHASH        ,
                this.UNDERLINE_DOTHASHHEAVY   ,
                this.UNDERLINE_DOTDOTDASH     ,
                this.UNDERLINE_DOTDOTDASHHEAVY,
                this.UNDERLINE_DOTTED         ,
                this.UNDERLINE_DOTTEDHEAVY    ,
                this.UNDERLINE_HEAVY          ,
                this.UNDERLINE_SINGLE         ,
                this.UNDERLINE_WAVY           ,
                this.UNDERLINE_WAVYDOUBLE     ,
                this.UNDERLINE_WAVYHEAVY      ,
                this.UNDERLINE_WORDS          
        ];

        /**
         * Foreground colors
         *
         * @readonly string
         */
        readonly FGCOLOR_YELLOW             = 'yellow';
        readonly FGCOLOR_LIGHTGREEN         = 'green';
        readonly FGCOLOR_CYAN               = 'cyan';
        readonly FGCOLOR_MAGENTA            = 'magenta';
        readonly FGCOLOR_BLUE               = 'blue';
        readonly FGCOLOR_RED                = 'red';
        readonly FGCOLOR_DARKBLUE           = 'darkBlue';
        readonly FGCOLOR_DARKCYAN           = 'darkCyan';
        readonly FGCOLOR_DARKGREEN          = 'darkGreen';
        readonly FGCOLOR_DARKMAGENTA        = 'darkMagenta';
        readonly FGCOLOR_DARKRED            = 'darkRed';
        readonly FGCOLOR_DARKYELLOW         = 'darkYellow';
        readonly FGCOLOR_DARKGRAY           = 'darkGray';
        readonly FGCOLOR_LIGHTGRAY          = 'lightGray';
        readonly FGCOLOR_BLACK              = 'black';



        /**
         * Font style type
         *
         * @var string
         */
        private type:Property;

        /**
         * Font name
         *
         * @var string
         */
        private name:Property;

        /**
         * Font Content Type
         *
         * @var string
         */
        private hint:Property;

        /**
         * Font size
         *
         * @var int|float
         */
        private size:Property;

        /**
         * Font color
         *
         * @var string
         */
        private color:Property;

        /**
         * Bold
         *
         * @var bool
         */
        private bold:Property = new Property('bold', false);

        /**
         * Italic
         *
         * @var bool
         */
        private italic:Property = new Property('italic', false);

        /**
         * Undeline
         *
         * @var string
         */
        private underline:Property = new Property('underline', this.UNDERLINE_NONE);

        /**
         * Superscript
         *
         * @var bool
         */
        private superScript:Property = new Property('superScript', false);

        /**
         * Subscript
         *
         * @var bool
         */
        private subScript:Property = new Property('subScript', false);

        /**
         * Strikethrough
         *
         * @var bool
         */
        private strikethrough:Property = new Property('strikethrough', false);

        /**
         * Double strikethrough
         *
         * @var bool
         */
        private doubleStrikethrough:Property = new Property('doubleStrikethrough', false);

        /**
         * Small caps
         *
         * @var bool
         * @link http://www.schemacentral.com/sc/ooxml/e-w_smallCaps-1.html
         */
        private smallCaps:Property = new Property('smallCaps', false);

        /**
         * All caps
         *
         * @var bool
         * @link http://www.schemacentral.com/sc/ooxml/e-w_caps-1.html
         */
        private allCaps:Property = new Property('allCaps', false);

        /**
         * Foreground/highlight
         *
         * @var string
         */
        private fgColor:Property;

        /**
         * Expanded/compressed text: 0-600 (percent)
         *
         * @var int
         * @since 0.12.0
         * @link http://www.schemacentral.com/sc/ooxml/e-w_w-1.html
         */
        private scale:Property;

        /**
         * Character spacing adjustment: twip
         *
         * @var int|float
         * @since 0.12.0
         * @link http://www.schemacentral.com/sc/ooxml/e-w_spacing-2.html
         */
        private spacing:Property;

        /**
         * Font kerning: halfpoint
         *
         * @var int|float
         * @since 0.12.0
         * @link http://www.schemacentral.com/sc/ooxml/e-w_kern-1.html
         */
        private kerning:Property;

        /**
         * Paragraph style
         *
         */
        private paragraphStyle:ParagraphStyle;

        /**
         * Shading
         *
         */
        private shading:Shading;

        /**
         * Right to left languages 
         * @var boolean
         */
        private rtl:Property = new Property('rtl', false);

        constructor(type:string='text', paragraphStyle:ParagraphStyle = null){
                super();

                this.type = new Property('type', type);
                this.paragraphStyle = paragraphStyle;
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
        public  setPropertyValue(propertyName, value):FontStyle{

                if(this.hasOwnProperty(propertyName)){
                        this[propertyName].setValue(value);
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
                        return this[propertyName].getValue();
                }else{
                        return null;
                }
        }

        /**
         * Get style values
         *
         * @return array
         * @since 0.12.0
         */
        public  getStyleValues():Object {
                let styles = {
                'name'          : this.getStyleName(),
                'basic'         : {
                                                'name'      : this.getPropertyValue('name'),
                                                'size'      : this.getPropertyValue('size'),
                                                'color'     : this.getPropertyValue('color'),
                                                'hint'      : this.getPropertyValue('hint'),
                                        },
                'style'         : {
                                                'bold'      : this.getPropertyValue('bold'),
                                                'italic'    : this.getPropertyValue('italic'),
                                                'underline' : this.getPropertyValue('underline'),
                                                'strike'    : this.getPropertyValue('strikethrough'),
                                                'dStrike'   : this.getPropertyValue('doubleStrikethrough'),
                                                'super'     : this.getPropertyValue('superScript'),
                                                'sub'       : this.getPropertyValue('subScript'),
                                                'smallCaps' : this.getPropertyValue('smallCaps'),
                                                'allCaps'   : this.getPropertyValue('allCaps'),
                                                'fgColor'   : this.getPropertyValue('fgColor'),
                                        },
                'spacing'       : {
                                                'scale'     : this.getPropertyValue('scale'),
                                                'spacing'   : this.getPropertyValue('spacing'),
                                                'kerning'   : this.getPropertyValue('kerning'),
                                        },
                'paragraph'     : this.getParagraphStyle(),
                'rtl'           : this.getPropertyValue('rtl'),
                'shading'       : this.getPropertyValue('shading'),
                };

                return styles;
        }


        /**
         * Get paragraph style
         *
         * @return \PhpOffice\PhpWord\Style\Paragraph
         */
        public  getParagraphStyle():ParagraphStyle {
                return this.paragraphStyle;
        }


        /**
         * Set Paragrah Style
         *
         * @param mixed value
         * @return self
         */
        public  setParagraphStyle(value:ParagraphStyle = null):FontStyle        {
               this.paragraphStyle = value;

                return this;
        }

       
}
