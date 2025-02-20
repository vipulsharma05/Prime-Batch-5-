const data = [
    {name:'Vipul',city:'Greater Noida',email:'vipul@gmail.com'},
    {name:'pipin',city:'hapuria',email:'pipin@gmail.com'},
    {name:'jogi',city:'ghaziabadi',email:'jogi@gmail.com'},
    {name:'tripti',city:'bengal',email:'tipti@gmail.com'},
]

const root = document.getElementById('parent');
data.forEach((ele)=>{
    const newCard = document.createElement('div')
    // setAttribute
    // classList.add
    newCard.addEventListener("click",()=>{
        newCard.style.backgroundColor = getRandomColor();
        console.log('div click')
    },true)
    newCard.className = 'card'
    newCard.innerHTML=`
    <h4>${ele.name}</h4>
    <h6>${ele.email}</h6>    
    <p class="text">${ele.city}</p> `
    root.appendChild(newCard);
})

const handleBg = ()=>{
console.log('button clicked')
const bodyelem = document.querySelector('body')
bodyelem.style.backgroundColor = getRandomColor();
}
const getRandomColor = ()=>{
    const randomRed = Math.floor(Math.random()*255)
    const randomGreen = Math.floor(Math.random()*255)
    const randomBlue = Math.floor(Math.random()*255)
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
     
}
const textele = document.querySelector('.text');
textele.addEventListener('click',(event)=>{
    console.log('para clicked',event)
    event.stopPropagation();
    textele.style.backgroundColor = getRandomColor();
})