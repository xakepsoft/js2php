# js2php
Call php functions from html/javascript



Example:

    p = new phpcall( string $url [ ,function callback_ok = null [ ,function callback_err = null ] [ ,string responseType = '' ] ] );
    p.get('php_user_function')(param1 , .... , paramN);


In order to call user defined php functions and/or static methods from html/js:

    1) include js2php.js file in html document

        for example:

            <script src="https://raw.githubusercontent.com/xakepsoft/js2php/master/js2php.js"></script>


    2) include js2php.inc.php in php files at the top

        for example:

            require ('js2php.inc.php');


    3) call user defined php functions from js

        for example:

            php = new phpcall( 'http://www.example.com/files/example.php' , callback_ok  );
            php.post('php_example_function')( 10.987 , 300 , 'some text' );
