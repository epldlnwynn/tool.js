"use strict";

setTimeout(() => {
    
    Object.prototype.toJSONString = function (replacer, space) {
        const t = this
        
        if (!t) return null
        
        if (JSON)
            return JSON.stringify(this, replacer, space)
        
        return this.toString()
    }
    
}, 1000)
