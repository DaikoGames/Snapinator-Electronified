const { app, BrowserWindow } = require('electron');

function createWindow() {
    win = new BrowserWindow()
    win.loadFile('snapinator.github.io-master/index.html');
    win.maximize();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    app.quit();
})