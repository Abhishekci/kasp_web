// Myapplication payment online / offline

$(document).ready(function () {
    $('input[name="paymentMode"]').change(function () {
        if (this.value === 'offline') {
            $('#offlinePaymentDetails').show();
            $('#onlinePaymentDetails').hide();
        } else {
            $('#offlinePaymentDetails').hide();
            $('#onlinePaymentDetails').show();


        }
    });
});


// Notyfy alerts

$(document).ready(function () {
    let notyf = new Notyf({
        position: {
            x: 'right',
            y: 'top'
        },
        // Your configuration options here
    });

    $('#myForm').submit(function (event) {
        event.preventDefault(); // Prevent form submission

        // Perform form validation here
        // ...

        // Display success notification
        notyf.success('Form submitted successfully!');

        // Display error notification
        notyf.error('An error occurred. Please try again.');

        // Display custom notification
        notyf.open({
            type: 'custom',
            background: 'purple',
            icon: {
                className: 'fas fa-info-circle',
                tagName: 'i',
                text: '',
            },
            message: 'This is a custom notification.',
        });
    });
});

