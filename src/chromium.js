const config = require('../config.json');
const logger = require('./logger/logger');
const path = require('path');
const { BrowserWindow, Menu } = require('electron')
const Remote = require('@electron/remote/main')
const cache = require('./cache');
const Alert = require('electron-alert');
const configEditor = require('./configEditor.js');

let alert = new Alert();

function loadFlash(app, path){
    try{
        logger.info('The OS plataform is ' + process.platform);
        logger.info('The Flash DLL is ' + path);
        logger.info('Flash version: ' + config.flashVersion);

        app.commandLine.appendSwitch('ppapi-flash-path', path);
        app.commandLine.appendSwitch('ppapi-flash-version', config.flashVersion);
        
        logger.ok('Flash Player injected on Chromium!');    
    }
    catch(ex){
        logger.error('ERROR DURING FLASH PLAYER INJECTION -> ' + ex);
    }
}


function launch(app, BrowserWindow){
    
try{
    app.whenReady().then(() => {
        const win = new BrowserWindow({
        title: config.loading.title,
        width: config.resolution.x,
        height: config.resolution.y,
        
        frame: false,
        webPreferences: {
          plugins: true,
          preload: path.join(__dirname, 'preload.js'),
          enableRemoteModule: true,
          contextIsolation: true,
          nodeIntegration: true,
        }
      })
      
     win.loadFile('src/public/index.html');
      

    if(config.debug.devTools){
      win.webContents.openDevTools();
    }
      win.removeMenu();
      logger.ok('CPPS Launched succesfully');  



      const XCPPSMenu = () => [
        {
          label: "Opciones",
          submenu: [
            
            {
              label: "Desactivar cache",
              type: "checkbox",
              checked: config.disableCache,
              click: () => configEditor.toggleCache(!config.disableCache)
            
            },
            {
              label: "Limpiar cache",
              click: () => cache.clearCache(win)
            }, 
            {
              label: "Abrir DevTools",
              click: () =>  win.webContents.openDevTools()
            },
            {type: "separator"},
            {
            label: "Salir",
            click: () => app.quit()
            },
          ]
        }
      ];
    
    
 Remote.initialize()

 const menu = Menu.buildFromTemplate(XCPPSMenu());
 Menu.setApplicationMenu(menu);

    });

    

  }
  catch(ex){
    logger.error("CRITICAL ERROR DURING WITH ELECTRON -> " + ex);
    if(config.exitOnError){
        app.exit();
        process.exit();
    }


  }
}

module.exports = {
    loadFlash, launch
}
