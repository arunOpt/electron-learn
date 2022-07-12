// Electron follows typical JavaScript conventions here, where PascalCase modules are instantiable class constructors (e.g.BrowserWindow, Tray, Notification) whereas camelCase modules are not instantiable(e.g.app, ipcRenderer, webContents).
// Es6 not supported in electron
// Many of Electron's core modules are Node.js event emitters that adhere to Node's asynchronous event-driven architecture. The app module is one of these emitters.

// In Electron, BrowserWindows can only be created after the app module's ready event is fired. You can wait for this event by using the app.whenReady() API and calling createWindow() once its promise is fulfilled.

// + app.on('ready').then(() => {     can be used, but to prevent pitfalls we use
// - app.whenReady().then(() => {

// in .vs code launch.json
// Main is used to start the main process and also expose port 9222 for remote debugging (--remote-debugging-port=9222). This is the port that we will use to attach the debugger for the Renderer. Because the main process is a Node.js process, the type is set to pwa-node (pwa- is the prefix that tells VS Code to use the latest JavaScript debugger).
// Renderer is used to debug the renderer process. Because the main process is the one that creates the process, we have to "attach" to it ("request": "attach") instead of creating a new one. The renderer process is a web one, so the debugger we have to use is pwa-chrome.
// Main + renderer is a compound task that executes the previous ones simultaneously.
//
const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

func()