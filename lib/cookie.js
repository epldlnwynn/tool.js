!function (W) {
    "use strict";
    
    W.cookie = {
        get(k, df = null) {
            const ck = document.cookie
            if (ck.length > 0) {
                var a = k + "=", beg = ck.indexOf(a), end;
                if (beg > -1) {
                    beg += a.length, end = ck.indexOf(";", beg);
                    if (end == -1) end = ck.length;
                    return decodeURIComponent(ck.substring(beg, end))
                }
            }
            return df
        },
        set(k, v, expires, path, domain, secure) {
            const c = [], date = new Date(), time = date.getTime();
            c.push(k, '=', encodeURIComponent(v)),
            expires && (date.setTime(expires * Date.DAYS + time), c.push(';expires=', date.toGMTString())),
            path && c.push('; path=', path),
            domain && c.push('; domain=', domain),
            secure && c.push('; secure'),
                c.push('; SameSite=Lax'),
                document.cookie = c.join('')
            return v;
        },
        del(k) {
            const date = new Date()
            date.setTime(date.getTime() - 1000);
            document.cookie = [k, '=; path=', path, '; expires=', date.toGMTString()].join('');
        },
    }
    
}(window)
