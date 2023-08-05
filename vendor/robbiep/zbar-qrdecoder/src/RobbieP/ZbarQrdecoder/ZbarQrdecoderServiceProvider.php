<?php namespace RobbieP\ZbarQrdecoder;

use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class ZbarQrdecoderServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Actual provider
	 *
	 * @var \Illuminate\Support\ServiceProvider
	 */
	protected $provider;        

	/**
	 * Create a new service provider instance.
	 *
	 * @param  \Illuminate\Contracts\Foundation\Application  $app
	 * @return void
	 */
	public function __construct($app)
	{
		parent::__construct($app);

		$this->provider = $this->getProvider();
	}

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
	public function boot()
	{
                $this->provider->boot();
	}

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
                $this->provider->register();
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array('zbardecoder');
	}

	/**
	 * Return ServiceProvider according to Laravel version
	 *
	 * @return \Illuminate\Support\ServiceProvider
	 */
	private function getProvider()
	{
		$provider = '\RobbieP\ZbarQrdecoder\ZbarQrdecoderServiceProviderLaravel5';

		if (version_compare(Application::VERSION, '5.0', '<')) {
		    $provider = '\RobbieP\ZbarQrdecoder\ZbarQrdecoderServiceProviderLaravel4';
		}

		return new $provider($this->app);
	}

}
