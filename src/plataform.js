/*
    CPPS Launcher by Lau - January 2022
    Peppflash Plataform selector
*/
const getFlashPlugin = () =>{
    switch (process.platform) {
        case 'win32':
            return 'pepflashplayer.dll';
        case 'darwin':
            return 'flash/PepperFlashPlayer.plugin'
        case 'linux':
            return 'flash/libpepflashplayer.so'
    }
}

module.exports = { getFlashPlugin } ;