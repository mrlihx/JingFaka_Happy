<?php

class ErrorResultTest extends PHPUnit_Framework_TestCase {

    private $result;

    public function tearDown()
    {
        $this->result = null;
    }

    public function testErrorResult()
    {
        $this->result = new  \RobbieP\ZbarQrdecoder\Result\ErrorResult("No barcode was found");
        $this->assertEquals(\RobbieP\ZbarQrdecoder\Result\ErrorResult::NOT_FOUND, $this->result->format);
        $this->assertEquals(400, $this->result->code);
        $this->assertEquals("No barcode was found", $this->result->text);
    }

}
 