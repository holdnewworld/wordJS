import { Property,  Alignment, Indentation, Spacing, Tab, Shading } from '../property/property';

import { BorderStyle } from './style';


export class ParagraphStyle extends BorderStyle{
        
        /**
         * @const int One line height equals 240 twip
         */
        readonly LINE_HEIGHT = 240;

        /**
         * Parent style
         *
         * @var string
         */
        private basedOn:Property;

        /**
         * Style for next paragraph
         *
         * @var string
         */
        private next:Property;

        /**
         * Alignment
         *
         * @var Alignment
         */
        private alignment:Alignment;

        /**
         * Indentation
         *
         * @var Indentation
         */
        private indentation:Property;

        /**
         * Spacing
         *
         * @var Spacing
         */
        private spacing:Spacing;

        /**
         * Text line height
         *
         * @var int
         */
        private lineHeight:Property;

        /**
         * Allow first/last line to display on a separate page
         *
         * @var boolean
         */
        private widowControl:Property;

        /**
         * Keep paragraph with next paragraph
         *
         * @var boolean
         */
        private keepNext:Property;

        /**
         * Keep all lines on one page
         *
         * @var boolean
         */
        private keepLines:Property;

        /**
         * Start paragraph on next page
         *
         * @var boolean
         */
        private pageBreakBefore:Property;

        /**
         * Numbering style name
         *
         * @var string
         */
        private numStyle:Property;

        /**
         * Numbering level
         *
         * @var int
         */
        private numLevel:Property;

        /**
         * Set of Custom Tab Stops
         *
         * @var Tab[]
         */
        private tabs:Array<Tab>;

        /**
         * Shading
         *
         * @var Shading
         */
        private shading:Shading;

        /**
         * Create new instance
         */
        constructor(){
                super();

                this.alignment          = new Alignment();
                this.basedOn            = new Property('basedOn', 'Normal');
                this.next               = new Property('next');
                this.lineHeight         = new Property('lineHeight');
                this.widowControl       = new Property('windowControl', true);
                this.keepNext           = new Property('keepNext', false);
                this.keepLines          = new Property('keepLines', false);
                this.pageBreakBefore    = new Property('pageBreakBefore', false);
                this.numStyle           = new Property('numStyle');
                this.numLevel           = new Property('numLevel', 0);
                this.tabs               = [new Tab()];
                this.shading            = new Shading();
                this.indentation        = new Indentation();
                this.spacing            = new Spacing();
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
        public  setPropertyValue(propertyName, value):ParagraphStyle{

                if (propertyName == 'indent' || propertyName == 'hanging') {
                        value = value * 720;
                } else if (propertyName == 'spacing') {
                        value += 240; // because line height of 1 matches 240 twips
                }


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
         * An experiment to retrieve all style values in one . This will
         * reduce  call and increase cohesion between s. Should be
         * implemented in all styles.
         *
         * @ignoreScrutinizerPatch
         * @return array
         */
        public  getStyleValues():Object{

                let styles = {
                'name'              : this.getPropertyValue('name'),
                'basedOn'           : this.getPropertyValue('basedOn'),
                'next'              : this.getPropertyValue('next'),
                'alignment'         : this.getPropertyValue('alignment'),
                'indentation'       : this.getPropertyValue('indentation'),
                'spacing'           : this.getPropertyValue('spacing'),
                'pagination'        : {
                        'widowControl'          : this.getPropertyValue('widowControl'),
                        'keepNext'              : this.getPropertyValue('keepNext'),
                        'keepLines'             : this.getPropertyValue('keepLines'),
                        'pageBreakBefore'       : this.getPropertyValue('pageBreakBefore'),
                },
                'numbering'         : {
                        'numStyle'         : this.getPropertyValue('numStyle'),
                        'numLevel'         : this.getPropertyValue('numLevel'),
                },
                'tabs'              : this.getPropertyValue('tabs'),
                'shading'           : this.getPropertyValue('shading'),
                };

                return styles;
        }

}