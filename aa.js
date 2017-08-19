var cma = require('cumulative-moving-average')

var avg = cma()

avg.push(1)
console.log(avg.value) // 1
console.log(avg.length) // 1

avg.push(3)
console.log(avg.value) // 2
console.log(avg.length) // 2