<?php

namespace RobbieP\ZbarQrdecoder\Result\Parser;

class ParserXML implements ParserInterface {

	/**
	 * @param $resultString
	 * @return array
	 */
	public function parse($resultString)
	{
		$parsed = [];
		$xml = simplexml_load_string($resultString, null, LIBXML_NOCDATA);
		$parsed['text'] = (string) $xml->source->index->symbol[0]->data;
		$parsed['format'] = (string) $xml->source->index->symbol[0]['type'];
		return $parsed;
	}

}