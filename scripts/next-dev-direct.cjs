const { startServer } = require("../node_modules/next/dist/server/lib/start-server");

const hasPath = Object.prototype.hasOwnProperty.call(process.env, "Path");
const hasPATH = Object.prototype.hasOwnProperty.call(process.env, "PATH");

if (hasPath && hasPATH) {
  delete process.env.PATH;
}

process.env.NEXT_TELEMETRY_DISABLED = "1";

const portIndex = process.argv.indexOf("--port");
const port = portIndex >= 0 ? Number(process.argv[portIndex + 1]) : 3000;

startServer({
  dir: process.cwd(),
  port,
  isDev: true,
  hostname: "127.0.0.1",
  allowRetry: true
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
