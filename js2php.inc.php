<?php

    function __xakepsoft_js2php_093DD0C315106297193D7FBDF916ECBBEE78229643CFE__ ()
    {
        @$method = $_SERVER['REQUEST_METHOD'];
        if( $method == 'GET' ) $p = &$_GET;
        else if( $method == 'POST' ) $p = &$_POST;
        else return FALSE;
        $f = strtolower( $p['__xakepsoft_php_func_call__'] );
        if(!is_callable($f)) return FALSE;

        if( strpos( $f, '::' ) !== false )
        {
            $tmp = new ReflectionMethod( $f );
            if( $tmp->isInternal() ) return FALSE;
        }
        else 
        {
            $tmp = new ReflectionFunction( $f );
            if( $tmp->isInternal() ) return FALSE;
        }

        unset($p['__xakepsoft_php_func_call__']);
        foreach( $p as $key=>$val ) if( $key[0]=='o' ) $p[$key] = json_decode($val);
        echo json_encode(call_user_func_array($f,$p));
        exit();
    }
    __xakepsoft_js2php_093DD0C315106297193D7FBDF916ECBBEE78229643CFE__();
