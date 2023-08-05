


# ZBar QR code decoder for PHP
[![Build Status](https://travis-ci.org/robbiepaul/zbar-qrdecoder.svg?branch=master)](https://travis-ci.org/robbiepaul/zbar-qrdecoder) [![Latest Stable Version](https://poser.pugx.org/robbiep/zbar-qrdecoder/v/stable)](https://packagist.org/packages/robbiep/zbar-qrdecoder) [![Total Downloads](https://poser.pugx.org/robbiep/zbar-qrdecoder/downloads)](https://packagist.org/packages/robbiep/zbar-qrdecoder) [![Latest Unstable Version](https://poser.pugx.org/robbiep/zbar-qrdecoder/v/unstable)](https://packagist.org/packages/robbiep/zbar-qrdecoder) [![License](https://poser.pugx.org/robbiep/zbar-qrdecoder/license)](https://packagist.org/packages/robbiep/zbar-qrdecoder)

This is a PHP wrapper for `zbar-tools` - (only `zbarimg` at the moment). See [http://zbar.sourceforge.net/](http://zbar.sourceforge.net/).



## Requirements 
* __zbar-tools__ - To install on Ubuntu it's as easy as `sudo apt-get install zbar-tools`. See their [project page](http://zbar.sourceforge.net/) for more platforms.
* __ImageMagick__ - It's required by Zbar, I'm not sure if they bundle it or not so make sure you have it

 
## Installation
 
Install this package through [Composer](https://getcomposer.org/). 

Add this to your `composer.json` dependencies:

```js
"require": {
   "robbiep/zbar-qrdecoder": "^2.0"
}
```

Run `composer install` to download the required files.

## Usage 

```php
require_once('vendor/autoload.php');

$ZbarDecoder = new RobbieP\ZbarQrdecoder\ZbarDecoder();

# Optionally change the path of the zbarimg executable if you need to (default: /usr/bin)
$ZbarDecoder->setPath('/usr/local/bin');

# Decode the image
$result = $ZbarDecoder->make('/a/path/to/image_with_barcode.jpg');

echo $result; // Outputs the decoded text
echo $result->format; // Outputs the barcode's format
echo $result->code; // 200 if it decoded a barcode OR 400 if it couldn't find a barcode.
```

## If you're using it in Laravel...
I've included a ServiceProvider class and a config if you need to change any options. Yyou need to add the ServiceProvider to `config/app.php`

```php
'providers' => array(
    ...
    'RobbieP\ZbarQrdecoder\ZbarQrdecoderServiceProvider'
)
```

You may need to publish the config `php artisan vendor:publish`

Now you can use Zbar QR Decoder in your Laravel application!

### Usage (in Laravel)

```php
# Decode the image
$result = ZbarDecoder::make('/a/path/to/image_with_barcode.png');

echo $result; // Outputs the decoded text
echo $result->format; // Outputs the barcode's format
```

## Other barcodes supported
* EAN_13 / ISBN
* CODE_39
* CODE_128

## Contributing
 
1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 
  
  
