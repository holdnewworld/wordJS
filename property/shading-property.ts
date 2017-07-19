import { Property } from './property';

export class Shading extends Property{

    /**
     * Spacing above paragraph (twip)
     *
     * @var int|float
     */
    private $before;

    /**
     * Spacing below paragraph (twip)
     *
     * @var int|float
     */
    private $after;

    /**
     * Spacing between lines in paragraph (twip)
     *
     * @var int|float
     */
    private $line;

    /**
     * Type of spacing between lines
     *
     * @var string
     */
    private $rule = 'auto';

    /**
     * Create a new instance
     *
     * @param array $style
     */
    public function __construct($style = array())
    {
        $this->setStyleByArray($style);
    }

    /**
     * Get before
     *
     * @return int|float
     */
    public function getBefore()
    {
        return $this->before;
    }

    /**
     * Set before
     *
     * @param int|float $value
     * @return self
     */
    public function setBefore($value = null)
    {
        $this->before = $this->setNumericVal($value, $this->before);

        return $this;
    }

    /**
     * Get after
     *
     * @return int|float
     */
    public function getAfter()
    {
        return $this->after;
    }

    /**
     * Set after
     *
     * @param int|float $value
     * @return self
     */
    public function setAfter($value = null)
    {
        $this->after = $this->setNumericVal($value, $this->after);

        return $this;
    }

    /**
     * Get line
     *
     * @return int|float
     */
    public function getLine()
    {
        return $this->line;
    }

    /**
     * Set distance
     *
     * @param int|float $value
     * @return self
     */
    public function setLine($value = null)
    {
        $this->line = $this->setNumericVal($value, $this->line);

        return $this;
    }

    /**
     * Get line rule
     *
     * @return string
     */
    public function getRule()
    {
        return $this->rule;
    }

    /**
     * Set line rule
     *
     * @param string $value
     * @return self
     */
    public function setRule($value = null)
    {
        $this->rule = $value;

        return $this;
    }

}