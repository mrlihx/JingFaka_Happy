<?php

namespace RobbieP\ZbarQrdecoder\Result\Parser;

interface ParserInterface {

	public function parse($resultString);

}