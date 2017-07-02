# js2php
Call php functions from html/javascript





Examples:

    // Callback function for return data from php
    data_callback = function(data)
    {
        alert(data);
    }

    // Create js2php object and call php function "add_two_numbers(x,y)" in "example.php"
    php = new js2php( 'example.php' , data_callback  );
    php.post('add_two_numbers')( 100 , 200 );

    // Call static php method "someclass::add_two_numbers(100,200)" in "example.php"
    php.post('someclass::add_two_numbers')( 100 , 200 );

    // Sometimes HTTP_POST requests are not required and HTTP_GET requests can be used instead.
    // it should be noted that HTTP_GET requests usually are cached by browsers or proxy servers.
    // If you don't know which one to use then stick with POST.

    php.get('add_two_numbers')( 100 , 200 );   // <-- HTTP_GET request


    // There are two callbacks, both are optional. First callback is called when data is returned from php function call.
    // The second callback is called when server returns HTTP status code != 200

    php = new js2php( 'example.php' , data_callback , err_callback );
    php.post('delete_product')( 10034543 );


    // Callback references can be changed or removed after object creation 

    php = new js2php( 'example.php' , data_callback , err_callback );
    php.ok = another_callback;
    php.err = null;
    php.post('search_product_by_ean13')( '8018417232879' );

    // The optional fourth parameter - response type can be changed after object creation as well...
    php = new js2php( 'example.php' , data_callback , null , 'text' );
    php.type = 'json';
    php.post('update_product_name')( 10034543 , 'APPLE iPhone 7!' );


    // There are three basic response types - "text", "json", "blob"
    // If there is no need for an error callback then response type can be placed as a third parameter
    php = new js2php( 'example.php' , data_callback , 'json' );
    php.get('list_all_products')();


    // Simple HTTP request with parameters can be easy sent too
    php.post( {'Hello':'World!'} );
    php.get( {'Hello':'World!'} );

