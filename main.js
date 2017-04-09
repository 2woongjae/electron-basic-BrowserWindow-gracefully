const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        // show: false
    });
    win.loadURL('https://github.com/2woongjae');
    /*
    win.once('ready-to-show', () => {
        win.show();
    });
    */
});