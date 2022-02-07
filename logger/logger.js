


function error(message){
    message = `[ERROR] ${message}`;
    console.log( "\x1b[31m", message, "\x1b[37m");
}

function info(message){
    message = `[INFO] ${message}`;
    console.log("\x1b[36m", message, "\x1b[37m");
}

function ok(message){
    message = `[SUCCESS] ${message}`;
    console.log("\x1b[32m" , message, "\x1b[37m");
}

module.exports = {
    ok,
    info,
    error
};



