# js2php
Call php functions from html/javascript






Examples:

    data_callback = function(data) {
        alert(data);
    }

    php = new js2php( 'example.php' , data_callback  );
    php.post('add_two_numbers')( 100 , 200 );


    // Sometimes HTTP_POST requests are not required and HTTP_GET requests can be used instead,
    // it should be noted that HTTP_GET requests are usually cached by browsers or proxy servers.
    // If you don't know which one to use then stick with POST.

    php = new js2php( 'example.php' , data_callback  );
    php.get('add_two_numbers')( 100 , 200 );   // <-- HTTP_GET request


    // There are two callbacks, both are optional. First callback gets called when data is returned from php function call.
    // The second callback is called when there is an error and status code != 200

    php = new js2php( 'example.php' , data_callback , err_callback );
    php.post('delete_product')( 10034543 );


    // Callback references can be changed or removed after object creation 

    php = new js2php( 'example.php' , data_callback , err_callback );
    php.ok = another_callback;
    php.err = null;
    php.post('search_product_by_ean13')( '8018417232879' );

    // The fourth parameter - response type can be changed later as well...
    php = new js2php( 'example.php' , data_callback , null , 'text' );
    php.type = 'json';
    php.post('update_product_name')( 10034543 , 'Very good product!' );


    // There are three basic response types - "text", "json", "blob"
    // If there is no need for an error callback then response type can be placed as a third parameter
    php = new js2php( 'example.php' , data_callback , 'json' );
    php.post('list_all_products')();
    //php.get('list_all_products')();


    // Simple HTTP requests with parameters can be sent as well
    php = new js2php( 'http://www.example.com/some-stuff/example.php' , data_callback , 'text' );
    php.post( {'Hello':'World!'} );
    //php.get( {'Hello':'World!'} );

