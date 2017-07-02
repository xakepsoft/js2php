    function js2php( url , ok , err , type ) {
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
            if( typeof func !== 'object' && ( typeof func === 'undefined' || String(func).trim() === '' ) ) func = null;
            function _request() {
                var params = '';
                if( typeof func === 'object') {
                    for(var k in func)
                        params += '&'+encodeURIComponent(k)+'='+encodeURIComponent(typeof func[k]==='function'||typeof func[k]==='object'?JSON.stringify(func[k]):String(func[k]) );
                    params = params.substr(1);
                }
                else if(func !== null) {
                    params = '__xakepsoft_php_func_call__=' + func.trim();
                    for (i = 0; i < arguments.length; i++) {
                        var val = arguments[i];
                        var k = val !== null && ( typeof val === 'object' || typeof val === 'function' )?'o':'s';
                        params += ( '&' + k + i + '=' + encodeURIComponent( k === 'o'?JSON.stringify(val):String(val) )  );
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
                xhr.open( method, url + (method==='GET'?'?'+params:'') , true );
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send( (method==='POST'?params:null) );
            }
            if( typeof func === 'object' || func === null ) return _request(); else { if(type === '') type = 'json'; return _request; }
        };
    }