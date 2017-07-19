export * from './alignment-property';
export * from './indentation-property';
export * from './spacing-property';
export * from './tab-property';
export * from './shading-property';

export class Property{

        private name:string;
        protected value:any;
        private type:string;

        constructor(name, value:any=''){
                this.name = name;
                this.value = value;
                this.type = typeof(value);
        }


        public getName():string{
                return this.name;
        }

        public setName(name:string):void{
                this.name = name;
        }

        public getValue():any{
                return this.value;
        }

        public setValue(value:any):void{
                if(typeof(value) !== 'undefined'){
                        this.value = value;
                        this.type = typeof(value);
                }else{
                        this.value = null;
                        this.type = 'undefined';
                }
                
        }

        public setEnumValue(value, options:Array<any>, defaultValue:any):any{
                if(value && options.indexOf(value)>0 && value !=='' && value !== null){
                        value = defaultValue;
                }else{
                        return value;
                }
        }
}