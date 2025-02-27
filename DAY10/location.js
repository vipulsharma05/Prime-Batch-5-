
const getData = (text) => {
  const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`, {
    method: "GET",
    headers: {
		'x-rapidapi-key': '3e5a411137msh19705651423e19ep18d121jsn072f955a9331',
		'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
	}
  });
  pr.then((res)=>{
      const pr2 = res.json()
      pr2.then((data)=>{
          showLocations(data)
        })    
    })
};
getData()
const root = document.getElementById('location')
const showLocations = (data)=>{
    root.innerHTML = ''
    const {predictions} = data
    predictions.forEach(Element => {
        const p =document.createElement('p')
        p.innerText = Element.description
        root.appendChild(p)
    });
    console.log(data)
}

const handleSearch=(e)=>{
    getData(e.target.value)
}