// Ex com .map() 
const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square)

// Higher-order Functions

const pause = wait => fn => setTimeout(fn, wait)

pause(6000)( () => console.log('waiting 6000ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait1000(() => console.log('wainting 1000ms'))
wait200(() => console.log('waiting 200ms'))
