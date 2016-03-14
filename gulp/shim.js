var config = require('./config.js');

var shim = {};

for(var key in Object.keys(config.files.vend_javascripts)) {
    shim[config.files.vend_javascripts[key]] = key;
}

module.exports = shim;