import { Property } from '../property/property';
import { FrameStyle } from './style';

export class ImageStyle extends FrameStyle{
    /**
     * Backward compatibility readonlyants
     *
     * @readonly string
     */
    readonly WRAPPING_STYLE_INLINE              = this.WRAP_INLINE;
    readonly WRAPPING_STYLE_SQUARE              = this.WRAP_SQUARE;
    readonly WRAPPING_STYLE_TIGHT               = this.WRAP_TIGHT;
    readonly WRAPPING_STYLE_BEHIND              = this.WRAP_BEHIND;
    readonly WRAPPING_STYLE_INFRONT             = this.WRAP_INFRONT;
    readonly POSITION_HORIZONTAL_LEFT           = this.POS_LEFT;
    readonly POSITION_HORIZONTAL_CENTER         = this.POS_CENTER;
    readonly POSITION_HORIZONTAL_RIGHT          = this.POS_RIGHT;
    readonly POSITION_VERTICAL_TOP              = this.POS_TOP;
    readonly POSITION_VERTICAL_CENTER           = this.POS_CENTER;
    readonly POSITION_VERTICAL_BOTTOM           = this.POS_BOTTOM;
    readonly POSITION_VERTICAL_INSIDE           = this.POS_INSIDE;
    readonly POSITION_VERTICAL_OUTSIDE          = this.POS_OUTSIDE;
    readonly POSITION_RELATIVE_TO_MARGIN        = this.POS_RELTO_MARGIN;
    readonly POSITION_RELATIVE_TO_PAGE          = this.POS_RELTO_PAGE;
    readonly POSITION_RELATIVE_TO_COLUMN        = this.POS_RELTO_COLUMN;
    readonly POSITION_RELATIVE_TO_CHAR          = this.POS_RELTO_CHAR;
    readonly POSITION_RELATIVE_TO_TEXT          = this.POS_RELTO_TEXT;
    readonly POSITION_RELATIVE_TO_LINE          = this.POS_RELTO_LINE;
    readonly POSITION_RELATIVE_TO_LMARGIN       = this.POS_RELTO_LMARGIN;
    readonly POSITION_RELATIVE_TO_RMARGIN       = this.POS_RELTO_RMARGIN;
    readonly POSITION_RELATIVE_TO_TMARGIN       = this.POS_RELTO_TMARGIN;
    readonly POSITION_RELATIVE_TO_BMARGIN       = this.POS_RELTO_BMARGIN;
    readonly POSITION_RELATIVE_TO_IMARGIN       = this.POS_RELTO_IMARGIN;
    readonly POSITION_RELATIVE_TO_OMARGIN       = this.POS_RELTO_OMARGIN;
    readonly POSITION_ABSOLUTE                  = this.POS_ABSOLUTE;
    readonly POSITION_RELATIVE                  = this.POS_RELATIVE;


    constructor(){
            super();

            this.setPropertyValue('unit', 'px');
            this.setPropertyValue('wrap', this.WRAP_INLINE);
            this.setPropertyValue('hPos', this.POS_LEFT);
            this.setPropertyValue('vPos', this.POS_TOP);
            this.setPropertyValue('hPosRelTo', this.POS_RELTO_CHAR);
            this.setPropertyValue('vPosRelTo', this.POS_RELTO_LINE);
    }


    /**
     * Get margin top
     *
     * @return int|float
     */
    public  getMarginTop():number{
        return this.getPropertyValue('top');
    }

    /**
     * Set margin top
     *
     * @ignoreScrutinizerPatch
     * @param int|float value
     * @return self
     */
    public  setMarginTop(value:number = 0):ImageStyle{

        this.setPropertyValue('top', value);

        return this;
    }

    /**
     * Get margin left
     *
     * @return int|float
     */
    public  getMarginLeft():number{
        return this.getPropertyValue('left');
    }

    /**
     * Set margin left
     *
     * @ignoreScrutinizerPatch
     * @param int|float value
     * @return self
     */
    public  setMarginLeft(value:number = 0):ImageStyle{
        this.setPropertyValue('left', value);

        return this;
    }

    /**
     * Get wrapping style
     *
     * @return string
     */
    public  getWrappingStyle():string{
        return this.getPropertyValue('wrap');
    }

    /**
     * Set wrapping style
     *
     * @param string wrappingStyle
     * @throws \InvalidArgumentException
     * @return self
     */
    public  setWrappingStyle(wrappingStyle:string):ImageStyle {
        this.setPropertyValue('wrap', wrappingStyle);

        return this;
    }

    /**
     * Get positioning type
     *
     * @return string
     */
    public  getPositioning():string{
        return this.getPropertyValue('pos');
    }

    /**
     * Set positioning type
     *
     * @param string positioning
     * @throws \InvalidArgumentException
     * @return self
     */
    public  setPositioning(positioning:string):ImageStyle
    {
        this.setPropertyValue('pos', positioning);

        return this;
    }

    /**
     * Get horizontal alignment
     *
     * @return string
     */
    public  getPosHorizontal()
    {
        return this.getPropertyValue('hPos');
    }

    /**
     * Set horizontal alignment
     *
     * @param string alignment
     * @throws \InvalidArgumentException
     * @return self
     */
    public  setPosHorizontal(alignment:string):ImageStyle
    {
        this.setPropertyValue('hPos', alignment);

        return this;
    }

    /**
     * Get vertical alignment
     *
     * @return string
     */
    public  getPosVertical():string
    {
        return this.getPropertyValue('vPos');
    }

    /**
     * Set vertical alignment
     *
     * @param string alignment
     * @throws \InvalidArgumentException
     * @return self
     */
    public  setPosVertical(alignment):ImageStyle
    {
         this.setPropertyValue('vPos', alignment);

        return this;
    }

    /**
     * Get horizontal relation
     *
     * @return string
     */
    public  getPosHorizontalRel():string
    {
        return this.getPropertyValue('hPosRelTo');
    }

    /**
     * Set horizontal relation
     *
     * @param string relto
     * @throws \InvalidArgumentException
     * @return self
     */
    public  setPosHorizontalRel(relto):ImageStyle
    {
         this.setPropertyValue('hPosRelTo', relto);

        return this;
    }

    /**
     * Get vertical relation
     *
     * @return string
     */
    public  getPosVerticalRel():string
    {
        return this.getPropertyValue('vPosRelTo');
    }

    /**
     * Set vertical relation
     *
     * @param string relto
     * @throws \InvalidArgumentException
     * @return self
     */
    public  setPosVerticalRel(relto):ImageStyle
    {
         this.setPropertyValue('vPosRelTo', relto);

        return this;
    }
}
