const  logger = require("./logger/logger");
const Alert = require('electron-alert');


const clearCache = async (window) => { 
    try{
        await window.webContents.session.clearCache();
        let alert = new Alert();
        logger.info("Cache was cleaned succesfully");
        let swalOptions = {
            title: "Se ha eliminado la caché",
            text: "Los cambios se aplicarán la proxima vez que habras el launcher",
            icon: "success",
        };            
        alert.fireWithFrame(swalOptions, "Eliminar caché", null, false);          
    }
    catch(ex){
        logger.logger.error("ERROR DURING CACHE CLEANING ->" + ex);
    }
}

const disableCache = (app) => {
    app.commandLine.appendSwitch ("disable-http-cache");
    logger.info("HTTP Cache is disabled. This may cause slower loads");
}


module.exports = {
    clearCache, disableCache
};