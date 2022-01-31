const configFile = require('../../config.json');
const path = require('path');
const logger = require('../logger/logger.js');
const configFileLocationn = path.join(__dirname, '../../config.json');
const fs = require('fs');

function updateConfig(json){
    try{
        fs.writeFileSync(configFileLocationn, JSON.stringify(json, null, "\t"));
        logger.ok("Configuration has been changed");
    }
    catch(ex){
        logger.error("An error has ocurred updating configuration file -> " + ex);
    }

}
module.exports = { updateConfig };
