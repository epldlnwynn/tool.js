!function (W) {
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
    
}(window);
