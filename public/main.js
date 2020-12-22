const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 920,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    // 프로덕션 환경에서는 패키지 내부 리소스에 접근
    win.loadFile(path.join(__dirname, "../build/index.html"));
  }
}

app.on("ready", createWindow);
