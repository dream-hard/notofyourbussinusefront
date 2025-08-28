const os = require("os");

function getLocalIPv4() {
  const interfaces = os.networkInterfaces();

  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address; // e.g. "192.168.1.12"
      }
    }
  }

  return "127.0.0.1"; // fallback
}

export default {getLocalIPv4};