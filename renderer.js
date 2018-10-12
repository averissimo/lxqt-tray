// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { remote } = require('electron')
const { Menu, Tray, BrowserWindow } = remote
const path = require('path')

const tray = new Tray(path.join(__dirname,'icon-read_128.png'))
tray.setToolTip('caca')

const myMenu = [
  {
    label: 'Switch tray icon',
    click: () => {
      tray.setImage(path.join(__dirname,'icon-unread_128.png'))
    }
  }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(myMenu))
