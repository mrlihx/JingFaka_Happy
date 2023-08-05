<?php
namespace RobbieP\ZbarQrdecoder\Result;

interface ResultInterface {

    public function text ($text);
    public function format ($format);

} 