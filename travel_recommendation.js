const searchResult = document.getElementById("searchresult");
let dataArray= [];

function findDestination(){
    const searchinput = document.getElementById("searchbar").value;
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data=>{
        searchResult.innerHTML = '';
        switch(searchinput){
            case 'countries':
                data.countries.forEach(element => {
                    searchResult.innerHTML += `<h2>${element.name}</h2>`;
                    element.cities.forEach(item=>{    
                        searchResult.innerHTML += `<h3>${item.name}</h3>`
                        searchResult.innerHTML += `<img src="${item.imageUrl}" id='city'/>`
                        searchResult.innerHTML += `<div id="description">${item.description}</div>`
                    })
                });
                break;
            case 'temples':
                data.temples.forEach(e=>{
                    searchResult.innerHTML += `<h2>${e.name}</h2>`;
                    searchResult.innerHTML += `<img src="${e.imageUrl}" id='temple'/>`;
                    searchResult.innerHTML += `<div id="description">${e.description}</div>`;
                });
                break;
            case 'beaches':
                data.beaches.forEach(i=>{
                    searchResult.innerHTML += `<h2>${i.name}</h2>`
                    searchResult.innerHTML += `<img src="${i.imageUrl}" id='beach'/>`;
                    searchResult.innerHTML += `<div id="description">${i.description}</div>`
                });
                break;
            default:
                alert('sorry we don\'t offer travel to this destination yet!')
            }
      }).catch(error => {
         console.error('Error fetching data:', error); 
         alert('Failed to fetch data. Please try again later.'); 
    });
}

document.getElementById('search').addEventListener('click', findDestination);