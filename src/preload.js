const customTitlebar = require('custom-electron-titlebar');
const config = require('../config.json');

window.addEventListener('DOMContentLoaded', () => {
    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex(config.barColor)
    });

    // ...
})