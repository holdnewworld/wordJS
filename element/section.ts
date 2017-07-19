import { WordJS } from '../wordJS';

export class Section{

        /** Section Id 
         * 
        */
        private sectionId:number = 0;

        /**
         * @var string Container type
         */
        private container = 'Section';

        /**
         * Section style
         *
         */
        private style:string;

        /**
         * Section headers, indexed from 1, not zero
         */
        private headers = [];

        /**
         * Section footers, indexed from 1, not zero
         *
         * @var Footer[]
         */

        private footers = [];
        /**
         * Create new instance
         *
         * @param int $sectionCount
         * @param array $style
         */
        constructor(sectionCount, style = null){
                this.sectionId = sectionCount;
                this.setDocPart(this.container, this.sectionId);
                //this.style = new SectionStyle();
                this.setStyle(style);
        }

        setDocPart(container, sectionId){

        }

        setStyle(style:string){

        }

        public setWordJS(param:WordJS){

        }
}