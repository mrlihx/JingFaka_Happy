<?php

class ZbarDecoderTest extends PHPUnit_Framework_TestCase {

    protected $ZbarDecoder;
    protected $processBuilder;

    public function setUp()
    {
        $this->processBuilder = Mockery::mock('\Symfony\Component\Process\ProcessBuilder');
        $this->ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([], $this->processBuilder);
    }

    public function tearDown()
    {
        $this->ZbarDecoder = null;
    }

    public function testSetPathWorks()
    {
        $this->ZbarDecoder->setPath('/usr/local/bin/');
        $this->assertEquals('/usr/local/bin', $this->ZbarDecoder->getPath());
    }

    /**
     * Expect exception because file doesnt exist
     * @expectedException Exception
     */
    public function testSetFilePathWorksOnInvalidFileGiven()
    {
        $this->ZbarDecoder->setFilePath('a/path/image.jpg');
    }

    public function testSetFilePathWorks()
    {
        $this->ZbarDecoder->setFilePath(__DIR__.'/stubs/tc.jpg');
        $this->assertEquals(__DIR__.'/stubs/tc.jpg', $this->ZbarDecoder->getFilePath());
    }

    public function testConfigWorksIfPassedAsArrayInConstructor()
    {
        $ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder(['path'=>'/new/bin/']);
        $this->assertEquals('/new/bin', $ZbarDecoder->getPath());
    }

    public function testDefaultPathWorks()
    {
        $ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([]);
        $this->assertEquals('/usr/bin', $ZbarDecoder->getPath());
    }

    public function testMakeWorks()
    {
        $processBuilder = $this->getMockBuilder('\Symfony\Component\Process\ProcessBuilder')->disableOriginalConstructor()->getMock();
        $process = $this->getMockBuilder('\Symfony\Component\Process\Process')->disableOriginalConstructor()->getMock();

        $process->expects($this->any())
            ->method('mustRun')
            ->will($this->returnValue(true));

        $processBuilder->expects($this->any())
            ->method('setPrefix')
            ->will($this->returnValue(true));
        $processBuilder->expects($this->any())
            ->method('setArguments')
            ->will($this->returnSelf());
        $processBuilder->expects($this->any())
            ->method('enableOutput')
            ->will($this->returnValue(true));
        $processBuilder->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $this->ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([], $processBuilder);
        $this->ZbarDecoder->make(__DIR__.'/stubs/tc.jpg');
        $this->assertEquals(__DIR__.'/stubs/tc.jpg', $this->ZbarDecoder->getFilePath());
    }

    /**
     * @expectedException Exception
     * @expectedExceptionMessage An error occurred while processing the image. It could be bad arguments, I/O errors and image handling errors from ImageMagick
     */
    public function testRunProcessThrowsErrorBadArgs()
    {
        $processBuilder = $this->getMockBuilder('\Symfony\Component\Process\ProcessBuilder')->disableOriginalConstructor()->getMock();
        $process = $this->getMockBuilder('\Symfony\Component\Process\Process')->disableOriginalConstructor()->getMock();
        $exception = $this->getMockBuilder('\Symfony\Component\Process\Exception\ProcessFailedException')->disableOriginalConstructor()->getMock();

        $processBuilder->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $exception->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $process->expects($this->any())
            ->method('mustRun')
            ->will($this->throwException($exception));

        $process->expects($this->any())
            ->method('getExitCode')
            ->will($this->returnValue(1));
        $processBuilder->expects($this->any())
            ->method('setPrefix')
            ->will($this->returnValue(true));
        $processBuilder->expects($this->any())
            ->method('setArguments')
            ->will($this->returnSelf());
        $processBuilder->expects($this->any())
            ->method('enableOutput')
            ->will($this->returnValue(true));

        $this->ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([], $processBuilder);
        $this->ZbarDecoder->make(__DIR__.'/stubs/tc.jpg');
        $this->assertEquals(__DIR__.'/stubs/tc.jpg', $this->ZbarDecoder->getFilePath());
    }

    /**
     * @expectedException Exception
     * @expectedExceptionMessage ImageMagick fatal error
     */
    public function testRunProcessThrowsErrorImageMagick()
    {
        $processBuilder = $this->getMockBuilder('\Symfony\Component\Process\ProcessBuilder')->disableOriginalConstructor()->getMock();
        $process = $this->getMockBuilder('\Symfony\Component\Process\Process')->disableOriginalConstructor()->getMock();
        $exception = $this->getMockBuilder('\Symfony\Component\Process\Exception\ProcessFailedException')->disableOriginalConstructor()->getMock();

        $processBuilder->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $exception->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $process->expects($this->any())
            ->method('mustRun')
            ->will($this->throwException($exception));

        $process->expects($this->any())
            ->method('getExitCode')
            ->will($this->returnValue(2));
        $processBuilder->expects($this->any())
            ->method('setPrefix')
            ->will($this->returnValue(true));
        $processBuilder->expects($this->any())
            ->method('setArguments')
            ->will($this->returnSelf());
        $processBuilder->expects($this->any())
            ->method('enableOutput')
            ->will($this->returnValue(true));

        $this->ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([], $processBuilder);
        $this->ZbarDecoder->make(__DIR__.'/stubs/tc.jpg');
        $this->assertEquals(__DIR__.'/stubs/tc.jpg', $this->ZbarDecoder->getFilePath());
    }

    /**
     * @expectedException Exception
     * @expectedExceptionMessage Problem with decode - check you have zbar-tools installed
     */
    public function testRunProcessThrowsErrorProblemWithCode()
    {
        $processBuilder = $this->getMockBuilder('\Symfony\Component\Process\ProcessBuilder')->disableOriginalConstructor()->getMock();
        $process = $this->getMockBuilder('\Symfony\Component\Process\Process')->disableOriginalConstructor()->getMock();
        $exception = $this->getMockBuilder('\Symfony\Component\Process\Exception\ProcessFailedException')->disableOriginalConstructor()->getMock();

        $processBuilder->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $exception->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $process->expects($this->any())
            ->method('mustRun')
            ->will($this->throwException($exception));

        $process->expects($this->any())
            ->method('getExitCode')
            ->will($this->returnValue(3));
        $processBuilder->expects($this->any())
            ->method('setPrefix')
            ->will($this->returnValue(true));
        $processBuilder->expects($this->any())
            ->method('setArguments')
            ->will($this->returnSelf());
        $processBuilder->expects($this->any())
            ->method('enableOutput')
            ->will($this->returnValue(true));

        $this->ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([], $processBuilder);
        $this->ZbarDecoder->make(__DIR__.'/stubs/tc.jpg');
        $this->assertEquals(__DIR__.'/stubs/tc.jpg', $this->ZbarDecoder->getFilePath());
    }

    public function testRunProcessThrowsErrorResultWhenNoCodeDetected()
    {
        $processBuilder = $this->getMockBuilder('\Symfony\Component\Process\ProcessBuilder')->disableOriginalConstructor()->getMock();
        $process = $this->getMockBuilder('\Symfony\Component\Process\Process')->disableOriginalConstructor()->getMock();
        $exception = $this->getMockBuilder('\Symfony\Component\Process\Exception\ProcessFailedException')->disableOriginalConstructor()->getMock();

        $processBuilder->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $exception->expects($this->any())
            ->method('getProcess')
            ->will($this->returnValue($process));

        $process->expects($this->any())
            ->method('mustRun')
            ->will($this->throwException($exception));

        $process->expects($this->any())
            ->method('getExitCode')
            ->will($this->returnValue(4));
        $processBuilder->expects($this->any())
            ->method('setPrefix')
            ->will($this->returnValue(true));
        $processBuilder->expects($this->any())
            ->method('setArguments')
            ->will($this->returnSelf());
        $processBuilder->expects($this->any())
            ->method('enableOutput')
            ->will($this->returnValue(true));

        $this->ZbarDecoder = new \RobbieP\ZbarQrdecoder\ZbarDecoder([], $processBuilder);
        $result = $this->ZbarDecoder->make(__DIR__.'/stubs/tc.jpg');
        $this->assertEquals(__DIR__.'/stubs/tc.jpg', $this->ZbarDecoder->getFilePath());
        $this->assertInstanceOf('RobbieP\ZbarQrdecoder\Result\ErrorResult', $result);
        $this->assertEquals(400, $result->code);
        $this->assertEquals('NOT_FOUND', $result->format);
        $this->assertEquals('No barcode detected', $result->text);
    }
    
}
 