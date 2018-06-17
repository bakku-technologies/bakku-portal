import { app, Menu, BrowserWindow } from 'electron';
import path from 'path';
import { mongo } from 'mongoose';
let mainWindow;

mongo.connect('mongodb://localhost/absp-portal');

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'Bakku',
        titleBarStyle: "hidden",
        frame: true,
        webPreferences: {
            webSecurity: true
        }
    });

    app.setName('Bakku');

    mainWindow.loadURL(path.join('file://', __dirname, '/views/index.html'));
    mainWindow.openDevTools({mode: 'bottom'});
    mainWindow.maximize();

    createMenu();

});

function createMenu() {
    let topLevelItems = [
        {
            label: 'Bakku',
            submenu: [
                {
                    label: 'Quit',
                    accelerator: 'CmdOrCtrl+Q',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Devices'
        },
        {
            label: 'Development',
            submenu: [
                {
                    label: 'Toggle Electron Inspector',
                    accelerator: 'Alt+CmdOrCtrl+I',
                    click() {
                        BrowserWindow.getFocusedWindow().toggleDevTools();
                    }
                }
            ]
        }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(topLevelItems));
}