import { Property } from './property';

export class Tab extends Property{

    value:Object;

    /**
     * Tab stop types
     *
     * @readonly string
     */
    readonly TAB_STOP_CLEAR   = 'clear';
    readonly TAB_STOP_LEFT    = 'left';
    readonly TAB_STOP_CENTER  = 'center';
    readonly TAB_STOP_RIGHT   = 'right';
    readonly TAB_STOP_DECIMAL = 'decimal';
    readonly TAB_STOP_BAR     = 'bar';
    readonly TAB_STOP_NUM     = 'num';

    /**
     * Tab leader types
     *
     * @readonly string
     */
    readonly TAB_LEADER_NONE       = 'none';
    readonly TAB_LEADER_DOT        = 'dot';
    readonly TAB_LEADER_HYPHEN     = 'hyphen';
    readonly TAB_LEADER_UNDERSCORE = 'underscore';
    readonly TAB_LEADER_HEAVY      = 'heavy';
    readonly TAB_LEADER_MIDDLEDOT  = 'middleDot';


    stopTypes:Array<string>;

    leaderTypes:Array<string>;

    constructor(){
        super('tab');

        this.value = {

            type    : this.TAB_STOP_CLEAR,
            leader  : this.TAB_LEADER_NONE,
            position: 0

        }

        this.leaderTypes = [
            this.TAB_LEADER_NONE,
            this.TAB_LEADER_DOT,
            this.TAB_LEADER_HYPHEN,
            this.TAB_LEADER_UNDERSCORE,
            this.TAB_LEADER_HEAVY,
            this.TAB_LEADER_MIDDLEDOT 
        ];

        this.stopTypes = [
            this.TAB_STOP_CLEAR,
            this.TAB_STOP_LEFT,
            this.TAB_STOP_CENTER,
            this.TAB_STOP_RIGHT,
            this.TAB_STOP_DECIMAL,
            this.TAB_STOP_BAR,
            this.TAB_STOP_NUM    
        ];

    }



    /**
     * Get stop type
     *
     * @return string
     */
    public  getType():string
    {
        return this.value['type'];
    }

    /**
     * Set stop type
     *
     * @param string value
     * @return self
     */
    public  setType(value:string):Tab
    {
        
        this.value['type'] = this.setEnumValue(value, this.stopTypes, this.TAB_STOP_CLEAR);

        return this;
    }

    /**
     * Get leader
     *
     * @return string
     */
    public  getLeader():string
    {
        return this.value['leader'];
    }

    /**
     * Set leader
     *
     * @param string value
     * @return self
     */
    public  setLeader(value:string):Tab
    {
       
        this.value['leader'] = this.setEnumValue(value, this.leaderTypes, this.TAB_LEADER_NONE);

        return this;
    }

    /**
     * Get position
     *
     * @return int|float
     */
    public  getPosition():number
    {
        return this.value['position'];
    }

    /**
     * Set position
     *
     * @param int|float value
     * @return self
     */
    public  setPosition(value:number):Tab
    {
        this.value['position'] = value;

        return this;
    }

}