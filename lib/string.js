
String.prototype.ellipsis = function(len, separator, textOverflow) {
    const t = this, symbols = separator || '...';
    if (textOverflow == 'left') {
        if (t.length >= len)
            return symbols + t.substring(0, len)
    }
    
    if (textOverflow == 'right') {
        if (t.length >= len)
            return t.substring(0, len) + symbols
    }
    
    if (len * 2 > t.length) return t;
    return [t.substring(0, len), t.substring(t.length - len)].join(symbols)
};

String.prototype.format = function(args) {
    var f = this, b = f.match(/\{([\d|\w|\.|\_]*)\}/g),t,v;
    if(b != null) {
        for (var i = 0; i < b.length; i++) {
            t = b[i].replace(/\{|\}/g,'')
            v = args[t],
                f = f.replace(b[i],typeof(v) != 'undefined' ? v : "")
        }
    }
    return f
};

String.prototype.colorRgba = function() {
    var c = this, m = ['R','G','B','A'], R = {}, i = 0;
    if (!c || c.length < 3) return null;
    if (c.startsWith('rgb(') || c.startsWith('rgba(')) {
        var ar = c.replace(/rgb?\(|\)|\s/ig, '').split(',')
        R.A = 1.0, ar.map((v, i) => R[m[i]] = parseFloat(v))
        return R
    }
    c = c.substring(1).toLowerCase();
    if (c.length === 3) c = c.replace(/[\w]/g, x => x + x);
    c.replace(/[\w]{2}/g, x => {R[m[i]] = parseInt("0x" + x), ++i}),
    R.A && (R.A = parseFloat((R.A / 255).toFixed(2)));
    return R
};

String.prototype.base64 = function (){
    const s = this;
    if ("btoa" in window)
        return window.btoa(s);
    
    const ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var c1, c2, c3, e1, e2, e3, e4;
    var l = s.length, i = 0, r = "";
    
    do {
        c1 = s.charCodeAt(i);
        e1 = c1 >> 2;
        c2 = s.charCodeAt(i+1);
        e2 = ((c1 & 3) << 4) | (c2 >> 4);
        c3 = s.charCodeAt(i+2);
        if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
        if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }
        r += ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
    } while ((i += 3) < l);
    return r;
};

String.prototype.uuid = function () {
    let d = new Date().getTime(), tmp = this || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    if (window.performance && isFunction(window.performance.now)) {
        d += window.performance.now();
    }
    return tmp.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    })
};

String.prototype.toNumber = function () {
    return new Number(this)
}

String.prototype.toJSON = function (reviver) {
    return JSON.parse(this, reviver)
}
