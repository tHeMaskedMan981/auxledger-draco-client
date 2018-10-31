const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')

let win

function createWindow() { 
	win = new BrowserWindow({
		width: 1000,
		height: 600,
		icon: path.join(__dirname, '/src/icons/3.png')
	})
	win.loadURL(url.format ({ 
	  pathname: path.join(__dirname, '/src/index.html'), 
	  protocol: 'file:', 
	  slashes: true 
	})) 
}  


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})