const pathModule = require('path')

console.log(pathModule.dirname(__filename))
console.log(pathModule.basename(__filename))
console.log(pathModule.extname(__filename))
console.log(pathModule.parse(__filename))