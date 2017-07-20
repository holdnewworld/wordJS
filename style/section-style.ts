import { Property } from '../property/property';
import { BorderStyle, PaperStyle } from './style';


/**
 * Section settings
 */
export class SectionStyle extends BorderStyle{
    /**
     * Page orientation
     *
     * @readonly string
     */
    readonly ORIENTATION_PORTRAIT = 'portrait';
    readonly ORIENTATION_LANDSCAPE = 'landscape';
    private orientationOptions:Array<string> = [ this.ORIENTATION_LANDSCAPE, this.ORIENTATION_PORTRAIT ];

    /**
     * Page default readonlyants
     *
     * @readonly int|float
     */
    readonly DEFAULT_WIDTH = 11870; // In twip
    readonly DEFAULT_HEIGHT = 16787; // In twip
    readonly DEFAULT_MARGIN = 1440; // In twip
    readonly DEFAULT_GUTTER = 0; // In twip
    readonly DEFAULT_HEADER_HEIGHT = 720; // In twip
    readonly DEFAULT_FOOTER_HEIGHT = 720; // In twip
    readonly DEFAULT_COLUMN_COUNT = 1;
    readonly DEFAULT_COLUMN_SPACING = 720; // In twip

    /**
     * Page Orientation
     *
     * @var string
     * @link http://www.schemacentral.com/sc/ooxml/a-w_orient-1.html
     */
    private orientation:Property = new Property('orientation', this.ORIENTATION_PORTRAIT);

    /**
     * Paper size
     *
     * @var \PhpOffice\PhpWord\Style\Paper
     */
    private paper:PaperStyle;

    /**
     * Page Size Width
     *
     * @var int|float
     */
    private pageSizeW = this.DEFAULT_WIDTH;

    /**
     * Page Size Height
     *
     * @var int|float
     */
    private pageSizeH = this.DEFAULT_HEIGHT;

    /**
     * Top margin spacing
     *
     * @var int|float
     */
    private marginTop = this.DEFAULT_MARGIN;

    /**
     * Left margin spacing
     *
     * @var int|float
     */
    private marginLeft = this.DEFAULT_MARGIN;

    /**
     * Right margin spacing
     *
     * @var int|float
     */
    private marginRight = this.DEFAULT_MARGIN;

    /**
     * Bottom margin spacing
     *
     * @var int|float
     */
    private marginBottom = this.DEFAULT_MARGIN;

    /**
     * Page gutter spacing
     *
     * @var int|float
     * @link http://www.schemacentral.com/sc/ooxml/e-w_pgMar-1.html
     */
    private gutter = this.DEFAULT_GUTTER;

    /**
     * Header height
     *
     * @var int|float
     */
    private headerHeight = this.DEFAULT_HEADER_HEIGHT;

    /**
     * Footer height
     *
     * @var int|float
     */
    private footerHeight = this.DEFAULT_FOOTER_HEIGHT;

    /**
     * Page Numbering Start
     *
     * @var int
     */
    private pageNumberingStart;

    /**
     * Section columns count
     *
     * @var int
     */
    private colsNum = this.DEFAULT_COLUMN_COUNT;

    /**
     * Section spacing between columns
     *
     * @var int|float
     */
    private colsSpace = this.DEFAULT_COLUMN_SPACING;

    /**
     * Section break type
     *
     * Options:
     * - nextPage: Next page section break
     * - nextColumn: Column section break
     * - continuous: Continuous section break
     * - evenPage: Even page section break
     * - oddPage: Odd page section break
     *
     * @var string
     */
    private breakType;

    /**
     * Line numbering
     *
     * @var \PhpOffice\PhpWord\Style\LineNumbering
     * @link http://www.schemacentral.com/sc/ooxml/e-w_lnNumType-1.html
     */
    private lineNumbering;

    /**
     * Create new instance
     */
    public  __readonlyruct()
    {
        this.setPaperSize();
    }

    /**
     * Get paper size
     *
     * @return string
     */
    public  getPaperSize()
    {
        return this.paper.getSize();
    }

    /**
     * Set paper size
     *
     * @param string value
     * @return self
     */
    public  setPaperSize(value = 'A4')
    {
        if (this.paper === null) {
            this.paper = new Paper();
        }
        this.paper.setSize(value);
        this.pageSizeW = this.paper.getWidth();
        this.pageSizeH = this.paper.getHeight();

        return this;
    }

    /**
     * Set Setting Value
     *
     * @param string key
     * @param string value
     * @return self
     */
    public  setSettingValue(key, value)
    {
        return this.setStyleValue(key, value);
    }

    /**
     * Set orientation
     *
     * @param string value
     * @return self
     */
    public  setOrientation(value = null)
    {
        enum = array(this.ORIENTATION_PORTRAIT, this.ORIENTATION_LANDSCAPE);
        this.orientation = this.setEnumVal(value, enum, this.orientation);

        /** @var int|float longSide Type hint */
        longSide = this.pageSizeW >= this.pageSizeH ? this.pageSizeW : this.pageSizeH;

        /** @var int|float shortSide Type hint */
        shortSide = this.pageSizeW < this.pageSizeH ? this.pageSizeW : this.pageSizeH;

        if (this.orientation == this.ORIENTATION_PORTRAIT) {
            this.pageSizeW = shortSide;
            this.pageSizeH = longSide;
        } else {
            this.pageSizeW = longSide;
            this.pageSizeH = shortSide;
        }

        return this;
    }

    /**
     * Get Page Orientation
     *
     * @return string
     */
    public  getOrientation()
    {
        return this.orientation;
    }

    /**
     * Set Portrait Orientation
     *
     * @return self
     */
    public  setPortrait()
    {
        return this.setOrientation(this.ORIENTATION_PORTRAIT);
    }

    /**
     * Set Landscape Orientation
     *
     * @return self
     */
    public  setLandscape()
    {
        return this.setOrientation(this.ORIENTATION_LANDSCAPE);
    }

    /**
     * Get Page Size Width
     *
     * @return int|float|null
     *
     * @since 0.12.0
     */
    public  getPageSizeW()
    {
        return this.pageSizeW;
    }

    /**
     * @param int|float|null value
     *
     * @return \PhpOffice\PhpWord\Style\Section
     *
     * @since 0.12.0
     */
    public  setPageSizeW(value = null)
    {
        this.pageSizeW = this.setNumericVal(value, this.DEFAULT_WIDTH);

        return this;
    }

    /**
     * Get Page Size Height
     *
     * @return int|float|null
     *
     * @since 0.12.0
     */
    public  getPageSizeH()
    {
        return this.pageSizeH;
    }

    /**
     * @param int|float|null value
     *
     * @return \PhpOffice\PhpWord\Style\Section
     *
     * @since 0.12.0
     */
    public  setPageSizeH(value = null)
    {
        this.pageSizeH = this.setNumericVal(value, this.DEFAULT_HEIGHT);

        return this;
    }

    /**
     * Get Margin Top
     *
     * @return int|float
     */
    public  getMarginTop()
    {
        return this.marginTop;
    }

    /**
     * Set Margin Top
     *
     * @param int|float value
     * @return self
     */
    public  setMarginTop(value = null)
    {
        this.marginTop = this.setNumericVal(value, this.DEFAULT_MARGIN);

        return this;
    }

    /**
     * Get Margin Left
     *
     * @return int|float
     */
    public  getMarginLeft()
    {
        return this.marginLeft;
    }

    /**
     * Set Margin Left
     *
     * @param int|float value
     * @return self
     */
    public  setMarginLeft(value = null)
    {
        this.marginLeft = this.setNumericVal(value, this.DEFAULT_MARGIN);

        return this;
    }

    /**
     * Get Margin Right
     *
     * @return int|float
     */
    public  getMarginRight()
    {
        return this.marginRight;
    }

    /**
     * Set Margin Right
     *
     * @param int|float value
     * @return self
     */
    public  setMarginRight(value = null)
    {
        this.marginRight = this.setNumericVal(value, this.DEFAULT_MARGIN);

        return this;
    }

    /**
     * Get Margin Bottom
     *
     * @return int|float
     */
    public  getMarginBottom()
    {
        return this.marginBottom;
    }

    /**
     * Set Margin Bottom
     *
     * @param int|float value
     * @return self
     */
    public  setMarginBottom(value = null)
    {
        this.marginBottom = this.setNumericVal(value, this.DEFAULT_MARGIN);

        return this;
    }

    /**
     * Get gutter
     *
     * @return int|float
     */
    public  getGutter()
    {
        return this.gutter;
    }

    /**
     * Set gutter
     *
     * @param int|float value
     * @return self
     */
    public  setGutter(value = null)
    {
        this.gutter = this.setNumericVal(value, this.DEFAULT_GUTTER);

        return this;
    }

    /**
     * Get Header Height
     *
     * @return int|float
     */
    public  getHeaderHeight()
    {
        return this.headerHeight;
    }

    /**
     * Set Header Height
     *
     * @param int|float value
     * @return self
     */
    public  setHeaderHeight(value = null)
    {
        this.headerHeight = this.setNumericVal(value, this.DEFAULT_HEADER_HEIGHT);

        return this;
    }

    /**
     * Get Footer Height
     *
     * @return int|float
     */
    public  getFooterHeight()
    {
        return this.footerHeight;
    }

    /**
     * Set Footer Height
     *
     * @param int|float value
     * @return self
     */
    public  setFooterHeight(value = null)
    {
        this.footerHeight = this.setNumericVal(value, this.DEFAULT_FOOTER_HEIGHT);

        return this;
    }

    /**
     * Get page numbering start
     *
     * @return null|int
     */
    public  getPageNumberingStart()
    {
        return this.pageNumberingStart;
    }

    /**
     * Set page numbering start
     *
     * @param null|int pageNumberingStart
     * @return self
     */
    public  setPageNumberingStart(pageNumberingStart = null)
    {
        this.pageNumberingStart = pageNumberingStart;
        return this;
    }

    /**
     * Get Section Columns Count
     *
     * @return int
     */
    public  getColsNum()
    {
        return this.colsNum;
    }

    /**
     * Set Section Columns Count
     *
     * @param int value
     * @return self
     */
    public  setColsNum(value = null)
    {
        this.colsNum = this.setIntVal(value, this.DEFAULT_COLUMN_COUNT);

        return this;
    }

    /**
     * Get Section Space Between Columns
     *
     * @return int|float
     */
    public  getColsSpace()
    {
        return this.colsSpace;
    }

    /**
     * Set Section Space Between Columns
     *
     * @param int|float value
     * @return self
     */
    public  setColsSpace(value = null)
    {
        this.colsSpace = this.setNumericVal(value, this.DEFAULT_COLUMN_SPACING);

        return this;
    }

    /**
     * Get Break Type
     *
     * @return string
     */
    public  getBreakType()
    {
        return this.breakType;
    }

    /**
     * Set Break Type
     *
     * @param string value
     * @return self
     */
    public  setBreakType(value = null)
    {
        this.breakType = value;
        return this;
    }

    /**
     * Get line numbering
     *
     * @return \PhpOffice\PhpWord\Style\LineNumbering
     */
    public  getLineNumbering()
    {
        return this.lineNumbering;
    }

    /**
     * Set line numbering
     *
     * @param mixed value
     * @return self
     */
    public  setLineNumbering(value = null)
    {
        this.setObjectVal(value, 'LineNumbering', this.lineNumbering);

        return this;
    }
}
