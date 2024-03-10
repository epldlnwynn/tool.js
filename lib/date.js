Date.MILLISECONDS = 1000;
Date.SECONDS = 1 * Date.MILLISECONDS;
Date.MINUTES = 60 * Date.SECONDS;
Date.HOURS = 60 * Date.MINUTES;
Date.DAYS = 24 * Date.HOURS;


Date.FORMAT_DATE = "yyyy-MM-dd";
Date.FORMAT_TIME = "HH:mm:ss";

Date.FORMAT_DATE_TIME = Date.FORMAT_DATE + " " + Date.FORMAT_TIME;
Date.FORMAT_DATE_TIMEZ = Date.FORMAT_DATE_TIME + " ZZZ";
Date.FORMAT_IOS_DATE_TIME = Date.FORMAT_DATE + "T" + Date.FORMAT_TIME


Date.unixTime = function(){return Math.floor(Date.now() / 1000)}

Date.newDate = function(noTime) {
    const dt = new Date();
    if (noTime)
        return new Date(dt.getFullYear(), dt.getMonth(), dt.getDay())
    
    return dt
}

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
            case 'WW':return '周' + W[T.getDay()];
            case 'WWW':return '星期' + W[T.getDay()];
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
            case 'SSS':return T.getMilliseconds();
            case 'Z':return T.toUTCString().match(/[A-Z]+$/);
            case 'ZZZ':return T.toString().match(/(GMT|UTC)[+-|0-9]+/);
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

Date.prototype.addYears = function (years) {
    const t = this, a = new Date(t.getFullYear() + years, t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
    t.setTime(a.getTime())
    return this
}

Date.prototype.addMonths = function (months) {
    const t = this, a = new Date(t.getFullYear(), t.getMonth() + months, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
    t.setTime(a.getTime())
    return this
}

Date.prototype.addDays = function(days) {
    this.setTime(this.getTime() + (days * Date.DAYS));
    return this
};

Date.prototype.addHours = function(hours) {
    this.setTime(this.getTime() + (hours * Date.HOURS));
    return this
};

Date.prototype.addSeconds = function(seconds) {
    this.setTime(this.getTime() + (seconds * Date.SECONDS));
    return this
};

