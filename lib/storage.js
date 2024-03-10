!function (W) {
    W.localStorage.constructor.prototype.getJSON = function (k) {
        const s = W.localStorage.getItem(k);
        return JSON.parse(s ? s : null)
    };
    
    W.localStorage.constructor.prototype.setJSON = function (k, v) {
        v && W.localStorage.setItem(k, JSON.stringify(v));
        return v
    };
    
}(window || globalThis)
