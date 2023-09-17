var validator = require('validator');

console.log('Jika String yang dimasukkan sesuai')
console.log('----------------------------------------------------')
console.log('apakah ini email ? ', validator.isEmail('raihandailham03@gmail.com')) 
console.log('apakah ini Etherium Address ? ', validator.isEthereumAddress('0xaEE2357E03Cb6E5382130ad1f59bbE1ddb1f3b77')) 

console.log('----------------------------------------------------')

console.log('Jika String yang dimasukkan tidak sesuai')
console.log('----------------------------------------------------')
console.log('apakah ini email ? ', validator.isEmail('raihandailham')) 
console.log('apakah ini Etherium Address ? ', validator.isEthereumAddress('axsfw0fe2fsgd35ygrgsfwgsbfdnfbsreg3')) 
console.log('----------------------------------------------------')
