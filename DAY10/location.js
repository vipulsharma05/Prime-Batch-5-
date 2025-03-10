
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
const root = document.getElementById('locations')
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
let id = null;

const handleSearch = (e) => {
    if (id) clearTimeout(id);

    id = setTimeout(() => {
        getData(e.target.value);
    }, 800);
};

const getSpecificLocationInfo = (placeId) => {
    const pr = fetch(
        `https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true`,
        {
            method: "GET",
            headers: {
                "x-rapidapi-host": "google-map-places.p.rapidapi.com",
                "x-rapidapi-key": "4334cf89c2msh8bb2842ca1bc925p14d540jsn5476cbded4a8",
            },
        }
    );
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data);
            const { result } = data;
            const rootNew = document.getElementById("location-info");
            rootNew.innerHTML = `
                <h4>${result.name}</h4>
                <p>${result.formatted_address}</p>
                <img src='${result.icon}'>
                <a href='${result.url}' target="_blank">Open</a>
                ${result.photos.map((photoObj) => {
                    return photoObj.html_attributions[0];
                })}
            `;
        });
    });
};