<?php
/**
 * Created by PhpStorm.
 * User: robbie
 * Date: 01/12/14
 * Time: 01:29
 */

namespace RobbieP\ZbarQrdecoder\Result;


class ErrorResult implements ResultInterface {

    const NOT_FOUND = 'NOT_FOUND';

    public  $code;
    public  $text;
    public  $format;

    /**
     * @param $error
     */
    function __construct($error)
    {
        $this->text($error);
        $this->format(self::NOT_FOUND);
        $this->code = 400;
    }

    /**
     * @param $text
     */
    public function text($text)
    {
        $this->text = $text;
    }

    /**
     * @param $format
     */
    public function format($format)
    {
        $this->format = $format;
    }
}