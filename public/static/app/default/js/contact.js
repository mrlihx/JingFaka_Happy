  (function($) {
    "use strict";
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                name2: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                name2: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                subject: {
                    required: "please indicate a subject"
                },
                web: {
                    required: "please indicate a Website Link"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"./contact/contact_process.php",
                    success: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                            $("#contactForm").resetForm();
                        });
                       
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn();
                        });
                    }
                })
            }
        })
    })
 })(jQuery)