!function (W) {
    "use strict";
    
    W.isFunction = function(a){
        return "function" === typeof(a)
    };
    
    W.isArray = Array.isArray;
    
    W.isNumber = function(k){
        return /^[0-9]*$/g.test(k)
    };
    
    W.uuid = function (format) {
        return format.uuid()
    }
    
    W.location.query = function(a, df = null) {
        const c = W.location.search.substring(1),b = c.match(new RegExp("(^|&)"+ a +"=([^&]*)(&|$)"));
        return b ? decodeURIComponent(b[2]) : df
    };
    
    W.loadCss = function (paths, delay, success) {
        const ar = typeof(paths) === "string" ? paths.split(",") : paths;
        const head = document.getElementsByTagName("head")[0]
        
        success = success || function () {};
        window.setTimeout(function () {
            ar.map((m, i) => {
                const css = document.createElement("link");
                css.rel = "stylesheet", css.type = "text/css", css.href = m;
                css.onload = css.onreadystatechange = function (e) {
                    this.onload = this.onreadystatechange = null;
                    success(e)
                }
                head.appendChild(css)
            })
        }, delay || 0)
    };
    
    W.loadJS = function (url, success) {
        var domScript = document.createElement('script');
        domScript.src = url;
        success = success || function () {};
        domScript.onload = domScript.onreadystatechange = function (e) {
            if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                success(e);
                this.onload = this.onreadystatechange = null;
                this.parentNode.removeChild(this);
            }
        }
        document.getElementsByTagName('head')[0].appendChild(domScript);
    };
    
}(window);
