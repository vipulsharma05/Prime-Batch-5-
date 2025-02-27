
const getData = (text)=>{
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${text}`)
    pr.then((res)=>{
        const pr2 = res.json()
        pr2.then((data)=>{
            showCards(data.recipes)
        })
    })
}
const root = document.getElementById('card-container')
const showCards = (dataArr)=>{
    dataArr.forEach(elem => {
        const  newDiv = document.createElement('div')
        newDiv.className = 'card'
        newDiv.innerHTML = `
        <h4>${elem.name}</h4>
        <img src = '${elem.image}' width = '100px'>
        <p >${elem.cusine}</p>
        `
        root.appendChild(newDiv)
    });
}
// const handleSearch = (e)=>{
//     getData(e.target.value)     this will call api every time
// }
let timeoutId = null;
const handleSearch = (e)=>{
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(()=>{
        getData(e.target.value)        
    },1000);
}