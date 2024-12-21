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
                        searchResult.innerHTML += `<pre>${item.description}</pre>`
                    })
                });
                break;
            case 'temples':
                data.temples.forEach(element=>{
                    searchResult.innerHTML += `<img src="${element.imageUrl}"/>`;
                    searchResult.innerHTML += `<h2>${element.name}</h2>`;
                    searchResult.innerHtml += `<pre>${element.description}</pre>`;
                });
                break;
            case 'beaches':
                data.beaches.forEach(element=>{
                    searchResult.innerHTML += `<img src="${element.imageUrl}/>`;
                    searchResult.innerHTML += `<h2>${element.name}</h2>`
                    searchResult.innerHTML += `<pre>${element.description}</pre>`
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