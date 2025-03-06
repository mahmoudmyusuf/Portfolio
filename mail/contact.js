(function() {
    emailjs.init("JDdGv6axiaqLAF-50"); // Initialize EmailJS with your Public Key
})();

$(function () {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Handle any errors if needed
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Prevent default form submission

            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            var $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable button to prevent multiple submissions

            // Prepare EmailJS parameters
            var params = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };

            // Send email via EmailJS
            emailjs.send("service_t5ay6cz", "template_6zvy6ko", params)
                .then(function (response) {
                    console.log("SUCCESS!", response.status, response.text);

                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>Your message has been sent. </strong>")
                        .append('</div>');

                    $('#contactForm').trigger("reset"); // Reset form after successful submission
                }, function (error) {
                    console.log("FAILED...", error);

                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append($("<strong>").text("Sorry " + name + ", there was an error sending your message. Please try again later!"))
                        .append('</div>');

                    $('#contactForm').trigger("reset");
                })
                .finally(function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable button after a delay
                    }, 1000);
                });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
