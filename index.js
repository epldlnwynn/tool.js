
["number", "date", "object", "string", "utils"].map(s => {
    require(`./lib/${s}.js`);
})

