<?php

namespace RobbieP\ZbarQrdecoder\Facades;

use Illuminate\Support\Facades\Facade;

class ZbarDecoder extends Facade  {

	/**
	 * Get the registered name of the component.
	 *
	 * @return string
	 */
	protected static function getFacadeAccessor() { return 'zbardecoder'; }

}