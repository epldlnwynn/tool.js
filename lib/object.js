"use strict";

setTimeout(() => {
    
    Object.prototype.toJSONString = function (replacer, space) {
        if (JSON)
            return JSON.stringify(this, replacer, space)
        
        return this.toString()
    }
    
}, 1000)
