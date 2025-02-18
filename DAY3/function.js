// ---------------------function declaration---------------

// --- cons -> can be defined seversl times
// --- cons -> we can call it before declaration


print('Vipul')

function print(a){
    console.log('hello',a)
}
function print(a,b){
    console.log('hi',a,b)
}
print('Vipul',2)

// -----------------function assigment-----------------
// -> function name is not mandatory as well as function keyword also.

const view = function (a){
    console.log('hello',a)
}
view('kya haal h')
// printl('ram ram ji')
// using arrow function /  anonymous function


const f1 =  (a)=>{
    console.log('hello',a)
}
f1('gogi')

function smod(a,b){
    var sum = a+b
    console.log('sum: ',sum)
    console.log('mod: ',sum%10)
}
smod(20,32)

const type2 = (a,b)=>{
    console.log('type mod: ',(a+b)%10)
}
type2(20,32)

// REMOVE curly bracket and return keyword , so it return automatically.

const short = (a,b)=>(a+b)%10;
console.log('new: ',short(20,28))