<?php

class ResultTest extends PHPUnit_Framework_TestCase {

    private $result;


    public function tearDown()
    {
        $this->result = null;
    }

    public function testQRbarcodeResult()
    {
        $this->result = new \RobbieP\ZbarQrdecoder\Result\Result("<barcodes xmlns='http://zbar.sourceforge.net/2008/barcode'>
<source href='/home/vagrant/code/laravel/public/newdoc.png'>
<index num='0'>
<symbol type='QR-Code' quality='1'><data><![CDATA[http://robbiepaul.co]]></data></symbol>
</index>
</source>
</barcodes>");
        $this->assertEquals(\RobbieP\ZbarQrdecoder\Result\Result::FORMAT_QR_CODE, $this->result->format);
        $this->assertEquals(200, $this->result->code);
        $this->assertEquals("http://robbiepaul.co", $this->result->text);
        $this->assertEquals("http://robbiepaul.co", $this->result);
    }

    public function testQRbarcodeNoResult()
    {
        $this->result = new \RobbieP\ZbarQrdecoder\Result\Result("");
        $this->assertEquals("No result", $this->result);
    }

    public function testEANbarcodeResult()
    {
        $this->result = new \RobbieP\ZbarQrdecoder\Result\Result("<barcodes xmlns='http://zbar.sourceforge.net/2008/barcode'>
<source href='/home/vagrant/code/laravel/public/newdoc.png'>
<index num='0'>
<symbol type='EAN-13' quality='1'><data><![CDATA[1234567890123]]></data></symbol>
</index>
</source>
</barcodes>");
        $this->assertEquals(\RobbieP\ZbarQrdecoder\Result\Result::FORMAT_EAN_13, $this->result->format);
        $this->assertEquals(200, $this->result->code);
        $this->assertEquals("1234567890123", $this->result->text);
    }

    public function testCODE39barcodeResult()
    {
        $this->result = new \RobbieP\ZbarQrdecoder\Result\Result("<barcodes xmlns='http://zbar.sourceforge.net/2008/barcode'>
<source href='/home/vagrant/code/laravel/public/newdoc.png'>
<index num='0'>
<symbol type='CODE-39' quality='1'><data><![CDATA[1234567890123]]></data></symbol>
</index>
</source>
</barcodes>");
        $this->assertEquals(\RobbieP\ZbarQrdecoder\Result\Result::FORMAT_CODE_39, $this->result->format);
        $this->assertEquals(200, $this->result->code);
        $this->assertEquals("1234567890123", $this->result->text);
    }

}
 