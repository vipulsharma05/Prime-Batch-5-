const data = [
    {
        id:'aad',
        name:"Vipul",
        city:'delhi',
    },
    {
        id:'sa',
        name:"GOGI",
        city:'noida',
    },
    {
        id:'awef',
        name:"Vipin",
        city:'hapur',
    },
    {
        id:'efvkj',
        name:"shashwat",
        city:'ghaziabad',
    },
]
const root =document.getElementById('root')
const showCards =(newData)=>{
    root.innerHTML="";
    newData.forEach((element,idx) => {
        const card = document.createElement('div')
        card.className = "card"
        card.innerHTML =`
        <div>
        <h4>${element.name}</h4>
        <p>${element.city}</p>
        <button onClick="deleteCard(event,'${element.id}')">Delete</button>
        </div>`
        root.appendChild(card)
    });
}
const deleteCard = (e,idx)=>{
    console.log(e.target.parentElement)
    // e.target.remove();
    // one way to delete
    // e.target.parentElement.parentElement.remove();
    // another way to delete
    // console.log(e,idx)
    // data.splice(idx,1)
    // showCards(data);
    // --correct way
    const index = data.findIndex((ele)=>ele.id==idx)
    data.splice(index,1)
    showCards(data)
}
const selectCard = (e)=>{
    const selectedCity = e.target.value
    console.log(selectedCity)
    const newData = data.filter((ele)=>{
        if(ele.city===selectedCity) return true
        return false
    })
    showCards(newData);

}
showCards(data);
