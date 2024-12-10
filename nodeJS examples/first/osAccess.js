const os = require('os');

console.log("Platform: " + os.platform());

console.log("OS Release: " + os.release());

console.log('System Architecture:', os.arch());

const cpus = os.cpus();
console.log("\nCPU Information:");
console.log("Model:", cpus.at(0).model);
console.log("Cores:",cpus.length);
console.log('\n');

const freeMemoryMB = os.freemem() / (1024 * 1024 * 1024);
console.log(`Free memory: ${freeMemoryMB.toFixed(4)} GB`);

const totalMemoryMB = os.totalmem() / (1024 * 1024 * 1024);
console.log("Total Memory: " + totalMemoryMB.toFixed(4) + " GB");

console.log("Hostname: " + os.hostname());

console.log("System Uptime: " + os.uptime() + " seconds");

const networkInterfaces = os.networkInterfaces();
console.log("\nNetwork Interfaces:");
Object.keys(networkInterfaces).forEach(interfaceName => {
  networkInterfaces[interfaceName].forEach(details => {
    console.log(`${interfaceName}: ${details.family} - ${details.address}`);
  });
});
console.log('\n');