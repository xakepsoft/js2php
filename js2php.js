    function phpcall( url , ok , err , type ) {
        this.url = url.trim();
        this.ok = typeof ok === 'function'?ok:null;
        this.err = typeof err === 'function'?err:null;
        type = typeof err === 'string'?err:type;
        this.type = type==='text'||type==='json'||type==='blob'?type:'';
        this.get = function(func) {
            return request(func,'GET',this.url.split('?')[0].trim(),this.ok,this.err,this.type);
        }
        this.post = function(func) {
            return request(func,'POST',this.url,this.ok,this.err,this.type);
        }
        var request = function(func, method, url, ok, err, type) {
            if( typeof func === 'undefined' || String(func).trim() === '' ) func = null;
            function _request() {
                var params = '';
                if(func !== null) {
                    params = (method==='GET'?'?':'') +  '__xakepsoft_php_func_call__=' + func.trim();
                    for (i = 0; i < arguments.length; i++) {
                        var val = arguments[i];
                        var what = val !== null && ( typeof val === 'object' || typeof val === 'function' )?'o':'s';
                        params += ( '&' + what + i + '=' + encodeURIComponent( what==='o'?JSON.stringify(val):String(val) )  );
                    }
                }
                var xhr = new XMLHttpRequest();
                xhr.responseType = type;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE ) {
                        if (xhr.status == 200) {
                            if(ok !== null)ok( xhr.response );
                        }
                        else if(err !== null) err( xhr );
                    }
                }
                xhr.open( method, url + (method==='GET'?params:'') , true );
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send( (method==='POST'?params:null) );
            }
            if(func === null) return _request(); else { if(type === '') type = 'json'; return _request; }
        };
    }