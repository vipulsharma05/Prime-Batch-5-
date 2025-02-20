console.dir(document)
console.dir(document.childern)
console.dir(document.children[0])
console.dir(document.children[0].children[1])
document.children[0].children[1].children[0].style.color ='blue'
// document.children[0].children[1].children[1].style.backgroundColor ='red'

// main div color blue

const outerDiv= document.querySelector('div')
outerDiv.style.backgroundColor = 'Blue'

// inner div bg yellow
console.log(outerDiv)


// type 1-
// const divchildren = Array.from(outerDiv.children);
// console.log('div children: ',divchildren)

// divchildren.forEach((ele)=>{
//     ele.style.backgroundColor = 'yellow'
// })

// type 2---
const divchildren = Array.from(document.querySelectorAll('div div'))
divchildren.forEach((ele)=>{
    ele.style.backgroundColor = 'yellow';
})

// outerDiv.children.forEach(element => {
//     element.style.backgroundColor = 'yellow'
    
// }); ---- not work


const mapping = {
    Invitiation: 'You are invited for event',
    reminder: 'you are reminded for task',
    notice: 'you have a notice from college',
    message: 'you have 7 message',
}

const pele  = document.querySelector('p')
pele.innerHTML = 'vipin pilla'

const newelement = document.createElement('div');

const rootele = document.querySelector('body')
newelement.innerHTML = 'Jai Shree Ram';
rootele.appendChild(newelement)

// Object.entries(mapping).forEach(()=>{
//     const newchildDiv = document.createElement('div');
//     // newchildDiv.innerHTML = 'Jai BajrangBali'
//     newchildDiv.style.border = "1px solid lime"
//     newchildDiv.innerHTML = `
//     <h4 style='color:orange'>jai shree ram !</h4>
//     <p>Jai BajrangBali</p>`
//     newelement.appendChild(newchildDiv)
// })

Object.entries(mapping).forEach((ele)=>{
    const newchildDiv = document.createElement('div');
    // newchildDiv.innerHTML = 'Jai BajrangBali'
    newchildDiv.style.border = "1px solid lime"
    newchildDiv.innerHTML = `
    <h4 style='color:orange'>${ele[0]}</h4>
    <p>${ele[1]} </p>`
    newelement.appendChild(newchildDiv)
})
