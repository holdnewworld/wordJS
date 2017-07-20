export class AbstractCollection{

        constructor(name:string){
                this.name = name;
        }
        /**
         * Items
         *
         * @var array
         */
        private items:Array<any> = [];

        /**
         * Name of Collection
         * @var name
         */
        private name:string = '';

        /**
         * Get Name
         * 
         * @return string
         */
        public getName():string{
                return this.name;
        }

        /**
         * Set Name
         * 
         * @param string name
         * @return void
         */
        public setName(name:string):void{
                this.name = name;
        }

        /**
         * Get items
         *
         * @return array
         */
        public getItems():Array<any>{
                return this.items;
        }

        /**
         * Get item by index
         *
         * @param int $index
         * @return mixed
         */
        public getItem(index:number):any{
                if(index >-1 && index < this.items.length){
                        return this.items[index];
                }else{
                        return null;
                }
        }

        /**
         * Set item.
         *
         * @param int $index
         * @param mixed $item
         * @return void
         */
        public setItem(index:number, item:any):void{
                if(index >-1 && index < this.items.length){
                        this.items[index] = item;
                }
        }

        /**
         * Add new item
         *
         * @param mixed $item
         * @return int
         */
        public addItem(item:any):number{
                let index = this.countItems() + 1;
                this.items[index] = item;

                return index;
        }

        /**
         * Get item count
         *
         * @return number
         */
        public countItems():number{
                return this.items.length;
        }
}