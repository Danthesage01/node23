const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user)

// sytem uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

// currentOS
const currentOS = {
 name: os.type(),
 release: os.release(),
 totalMem: os.totalmem(),
 freeMem: os.freemem(),
 platform: os.platform(),
 others: os.version()
}

console.log(currentOS)