/*
    Made by Lau - January 2022
*/

const config = require('../config.json');
const fstream = require('./fstream/fstream.js');


const toggleCache = (value) => {
    let newConfig = config;
    newConfig.disableCache = value;

    fstream.updateConfig(newConfig);
}



module.exports = {
    toggleCache
}