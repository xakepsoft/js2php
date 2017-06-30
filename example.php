<?php
    require ('js2php.inc.php');



    // Example 1
    class example_class
    {
        function add( $a , $b ) {
            return $a + $b;
        }

    };



    // Example 2
    function get_date_info( $format ) {
        return date( $format );
    };




    // Example 3
    echo "Hello World from PHP!";




    // Example 4
    function _phpinfo( ) {
        return phpinfo();
    };
