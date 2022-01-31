"use strict";


const logger = require('./src/logger/logger');
const plataform = require('./src/plataform.js');
const electron = require('electron');
const chromium = require('./src/chromium.js');
const path = require('path');
const config = require('./config.json');
const cache = require('./src/cache.js');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const configUpdater = require('./src/fstream/fstream.js')



logger.info('CPPS Launcher is started. Made by Lau - 2022');




!config.exitOnError && process.on('uncaughtException', (err) => logger.error(err));
config.disableCache && cache.disableCache(app);


chromium.loadFlash(app, path.join(__dirname, plataform.getFlashPlugin()));
chromium.launch(app, BrowserWindow);

