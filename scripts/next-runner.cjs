const hasPath = Object.prototype.hasOwnProperty.call(process.env, "Path");
const hasPATH = Object.prototype.hasOwnProperty.call(process.env, "PATH");

if (hasPath && hasPATH) {
  delete process.env.PATH;
}

process.env.NEXT_TELEMETRY_DISABLED = "1";
process.argv = [process.argv[0], "next", ...process.argv.slice(2)];

require("../node_modules/next/dist/bin/next");
