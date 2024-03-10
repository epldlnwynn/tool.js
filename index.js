
["number", "date", "object", "string", "utils", "cookie", "storage"].map(s => {
    require(`./lib/${s}.js`);
})

