let res = ''
for (let i = 0; i < 5; i++) {
    // res akan ditambah dengan bintang setiap kali looping
    res += ' * '
}
// setelah looping nya selesai, maka res di console.log
console.log(res)
// result:
// * * * * *
let res1 = ''
for (let i = 0; i < 5; i++) {
    // res akan ditambah dengan bintang setiap kali looping
    res1 += ' * '
    // res akan di console.log setiap kali looping
    console.log(res1)
}

// result:
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *

let res2 = ''
for (let i = 0; i < 5; i++) {
    res2 += '*' + '\n'
}
console.log(res2)
// result:
// *
// *
// *
// *
// *

let res3 = ''
for (let i = 0; i < 5; i++) { // i => 0
    for (let j = 0; j < 5; j++) { // j => 0
        res3 += ' * '
    }
    res3 += '\n'
}
console.log(res3)
// result: 
// ' * * * * *'
// ' * * * * *'
// ' * * * * *'
// ' * * * * *'
// ' * * * * *'
for (let i = 0; i < 5; i++) { // i => 0
    for (let j = 0; j < 5; j++) { // j => 0
        res3 += ' * '

let res4 = ''
for (let i = 0; i < 5; i++) {// i => 
    for (let j = 0; j <= i; j++) { // j => 
        res4 += ' * '
    }
    res3 += '\n'
    res4 += '\n'
}
console.log(res3) 
console.log(res4)

// result:
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *