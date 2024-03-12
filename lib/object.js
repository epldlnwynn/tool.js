"use strict";

setTimeout(() => {
    
    Object.prototype.toJSONString = function (replacer, space) {
        const t = this
        
        if (!t) return null
        
        if ("JSON" in window)
            return JSON.stringify(t, replacer, space)
        
        return t.toString()
    }
    
}, 1000)
