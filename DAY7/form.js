const data = [
    {
        email:'aad@gmail.com',
        name:"Vipul",
        city:'delhi',
    },
    {
        email:'go@gmail.com',
        name:"GOGI",
        city:'noida',
    },
    {
        email:'vip@gmail.com',
        name:"Vipin",
        city:'hapur',
    },
    {
        email:'shas@gmail.com',
        name:"shashwat",
        city:'ghaziabad',
    },
]
const root =document.getElementById('root')
const selectElement = document.getElementsByTagName('select')[0]

// const cities = data.map((ele)=>ele.city)
const showOptions= ()=>{
    selectElement.innerHTML = '';
    const citiesobj = {}
    data.forEach((ele)=>(citiesobj[ele.city]=true))
    const cities = Object.keys(citiesobj)

    cities.forEach((city)=>{
        const newOption =  document.createElement("option")
        newOption.value = city
        newOption.innerText = city
        selectElement.appendChild(newOption)

    }

)
}
const showCards =(newData)=>{
    showOptions()
    root.innerHTML="";
    newData.forEach((element,idx) => {
        const card = document.createElement('div')
        card.className = "card"
        card.innerHTML =`
        <div>
        <h5>${element.email}</h5>
        <h4>${element.name}</h4>
        <p>${element.city}</p>
        <button onClick="deleteCard(event,'${element.email}')">Delete</button>
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
    const index = data.findIndex((ele)=>ele.email==idx)
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



const handleFormSubmit = (e)=>{
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.email.value);
    // console.log(e.target[0].value);
    // console.log(e.target.name.value);
    // console.log(e.target[1].value);
    // console.log(e.target.city.value);
    // console.log(e.target[2].value);

    const isEmailExits = data.some((elem)=>{
        return elem.email ===e.target.email.value
    })
    if(isEmailExits){
        alert("email already exists");
        return
    } 
    const newElem = {
        name :e.target.name.value,
        email :e.target.email.value,
        city :e.target.city.value,
    }
    data.push(newElem);
    showCards(data);
}

