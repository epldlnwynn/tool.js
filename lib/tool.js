!function (W) {
    W.Date.MILLISECONDS = 1000,
    W.Date.SECONDS = 1 * W.Date.MILLISECONDS,
    W.Date.MINUTES = 60 * W.Date.SECONDS,
    W.Date.HOURS = 60 * W.Date.MINUTES,
    W.Date.DAYS = 24 * W.Date.HOURS;
    
    String.prototype.cut = function(len, ellipsis){
        const t = this;
        if (len * 2 > t.length) return t;
        return [t.substring(0, len), t.substring(t.length - len)].join(ellipsis || "...")
    };
    String.prototype.colorRgba = function() {
        var c = this.substring(1).toLowerCase(), m = ['R','G','B','A'], R = {}, i = 0;
        if (c.length === 3) c = c.replace(/[\w]/g, x => x + x);
        
        c.replace(/[\w]{2}/g, x => {R[m[i]] = parseInt("0x" + x), ++i}),
        R.A && (R.A = parseFloat((R.A / 255).toFixed(2)));
        return R
    };
    String.prototype.base64=function(){
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
    
    
    Date.prototype.format = function(format) {
        const D=function(n){return n < 10 ? '0'+n : n},T=this,W=["日","一","二","三","四","五","六"];
        return format.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|w{1,4}|yy(?:yy)?|([YwhHMstT])\1?|[lLZ])\b/ig, function(s){
            switch(s) {
                case 'yyyy':
                case 'Y':return T.getFullYear();
                case 'M':return T.getMonth()+1;
                case 'MM':return D(T.getMonth()+1);
                case 'MMM':return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][T.getMonth()];
                case 'MMMM':return ['January','February','March','April','May','June','July','August','September','October','November','December'][T.getMonth()];
                case 'd':return T.getDate();
                case 'dd':return D(T.getDate());
                case 'W':return W[T.getDay()];
                case 'WW':return '周'+W[T.getDay()];
                case 'WWW':return '星期'+W[T.getDay()];
                case 'h':return T.getHours()%12||12;
                case 'hh':return D(T.getHours()%12||12);
                case 'H':return T.getHours();
                case 'HH':return D(T.getHours());
                case 'm':return T.getMinutes();
                case 'mm':return D(T.getMinutes());
                case 's':return T.getSeconds();
                case 'ss':return D(T.getSeconds());
                case 'tt':return T.getHours()<12?'am':'pm';
                case 'TT':return T.getHours()<12 ?'AM':'PM';
                case 'Z':return T.toUTCString().match(/[A-Z]+$/);
                default :return s.substr(1,s.length - 2)
            }
        });
    };
    Date.prototype.localeTimeString = function(timeStyle){
        return this.toLocaleTimeString(navigator.language, {"timeStyle": (timeStyle || "short")})
    };
    Date.prototype.localeDateString = function(dateStyle){
        return this.toLocaleDateString(navigator.language, {dateStyle: dateStyle || "full"})
    }
    Date.prototype.setDay = function(days) {this.setTime(this.getTime() + (days * Date.DAYS));return this};
    Date.unixTime=function(){return Math.floor(Date.now() / 1000)}
    Date.newDate=function(noTime){
        const dt = new Date();
        if (noTime) return new Date(dt.getFullYear(),dt.getMonth(), dt.getDay())
        return dt
    }
    Number.prototype.toDate = function(){return new Date(this)};
    
}(window);



