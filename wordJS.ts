import { Settings } from './settings';
import { Style } from './style';

import { AbstractCollection, Bookmarks, Footnotes, Endnotes, Titles, Charts } from './collection/collection';
import { DocInfo, Protection, Compatibility } from './metadata/metadata';
import { Section } from './element/element';

export class WordJS{
        

        /**
         * Default font settings
         */

        static readonly DEFAULT_FONT_NAME               = Settings.DEFAULT_FONT_NAME;
        static readonly DEFAULT_FONT_SIZE               = Settings.DEFAULT_FONT_SIZE;
        static readonly DEFAULT_FONT_COLOR              = Settings.DEFAULT_FONT_COLOR;
        static readonly DEFAULT_FONT_CONTENT_TYPE       = Settings.DEFAULT_FONT_CONTENT_TYPE;

        /**
         * Collection of sections
         */
        private sections  = [];

        /**
         * Collections
         */
        private collections:Array<AbstractCollection>  = [];

        /**
         * Metadata
         */
        private metadata:Array<Object> = [];

        constructor(){

                // Collection
                this.collections = [new Bookmarks(), new Titles(), new Footnotes(), new Endnotes(), new Charts()];

                // Metadata
                this.metadata = [new DocInfo(), new Protection(), new Compatibility()];

        }


         /**
         * Get document properties object
         *
         * @return DocInfo
         */
        public getDocInfo():DocInfo{
                return this.metadata[0];
        }

        /**
         * Get protection
         *
         * @return \PhpOffice\PhpWord\Metadata\Protection
         * 
         */
        public getProtection(){
                return this.metadata[1];
        }

        /**
         * Get compatibility
         *
         * @return \PhpOffice\PhpWord\Metadata\Compatibility
         * 
         */
        public getCompatibility(){
                return this.metadata[2];
        }

        /**
         * Get all sections
         *
         * @return \PhpOffice\PhpWord\Element\Section[]
         */
        public getSections()
        {
                return this.sections;
        }

        /** 
         * Returns the last section in a PhpWord object or null if there are no sections
         *
         * @method getLastSection
         * @return null|Section
         */
        public getLastSection(){
                if(this.sections.length > 0 )
                        return this.sections[this.sections.length-1];
                else
                        return null;
        }

        /**
         * Create new section
         *
         * @param array $style
         * @return Section
         */
        public addSection(style:string = ''):Section{
                let section = new Section(this.sections.length + 1, style);
                section.setWordJS(this);
                
                this.sections.push(section);

                return section;
        }

        /**
         * Insert an already created section
         *
         * @param Section $section
         * @return void
         */
        public  insertSection(section){
                section.setElementIndex(this.sections.length+1);
                section.setPhpWord(this);
                this.sections.push(section);
        }

        /**
         * Get default font name
         *
         * @return string
         */
        public getDefaultFontName():string{
                return Settings.getDefaultFontName();
        }

        /**
         * Set default font name.
         *
         * @param string fontName
         * @return void
         */
        public setDefaultFontName(fontName:string):void{
                Settings.setDefaultFontName(fontName);
        }

        /**
         * Get default font size
         *
         * @return integer
         */
        public getDefaultFontSize():number{
                return Settings.getDefaultFontSize();
        }

        /**
         * Set default font size.
         *
         * @param int fontSize
         * @return void
         */
        public setDefaultFontSize(fontSize:number):void{
                Settings.setDefaultFontSize(fontSize);
        }

        /**
         * Set default paragraph style definition to styles.xml
         *
         * @param array styles Paragraph style definition
         * @return ParagraphStyle Object
         */
        public  setDefaultParagraphStyle(styles:Array<any>){
                return Style.setDefaultParagraphStyle(styles);
        }

        /**
         * Create new section
         *
         * @param array $settings
         * @return Section
         * @deprecated 0.10.0
         * @codeCoverageIgnore
         */
        public createSection(style:string = ''):Section{
                return this.addSection(style);
        }

        /**
         * Get document properties object
         *
         * @return DocInfo
         * @deprecated 0.12.0
         * @codeCoverageIgnore
         */
        public getDocumentProperties():DocInfo{
                return this.getDocInfo();
        }

        /**
         * Set document properties object
         *
         * @param \PhpOffice\PhpWord\Metadata\DocInfo $documentProperties
         * @return self
         * @deprecated 0.12.0
         * @codeCoverageIgnore
         */
        public setDocumentProperties(documentProperties:DocInfo):WordJS{
                this.metadata[0] = documentProperties;

                return this;
        }

        public _call(func:string, args:any):any{

                // Run Get and Add Collection Methods
                for(let collection of this.collections){
                        if(func == 'get'+collection.getName()+'s'){
                                if(collection.getItems().length>0){
                                        return collection.getItems();
                                }
                        }else if(func == 'add'+collection.getName()){
                                if('undefined' !== typeof(args)){
                                        return collection.addItem(args);
                                }
                        }
                }
        }

}