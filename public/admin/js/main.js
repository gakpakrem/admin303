// Ajax calls should always have the CSRF token attached to them, otherwise they won't work
$.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

// Automatically trigger the loading animation on submit buttons click
Ladda.bind( 'input[type=submit]' );
Ladda.bind( 'button[type=submit]' );
Ladda.bind( 'a.ladda-button' );