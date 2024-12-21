const searchResult = document.getElementById("searchresult");
let dataArray= [];
const segustion =['countries', 'temples', 'beaches', 'australia', 'japan', 'brazil'];

function findDestination(){
    const searchinput = document.getElementById("searchbar").value.toLowerCase();
    const searchkey = segustion.find(item=> item.includes(searchinput))
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data=>{
        searchResult.innerHTML = '';
        switch(searchkey){
            case 'australia':
                data.countries[0].cities.forEach(element=>{
                     searchResult.innerHTML += `<h2>Australia</h2>`;
                     searchResult.innerHTML += `<h3>${element.name}</h3>`;
                     searchResult.innerHTML += `<img src="${element.imageUrl}" id='city'/>`;
                     searchResult.innerHTML += `<div id="description">${element.description}</div>`;
                })
                break;
            case 'japan':
                data.countries[1].cities.forEach(element=>{
                     searchResult.innerHTML += `<h2>Japan</h2>`;
                     searchResult.innerHTML += `<h3>${element.name}</h3>`;
                     searchResult.innerHTML += `<img src="${element.imageUrl}" id='city'/>`;
                     searchResult.innerHTML += `<div id="description">${element.description}</div>`;
                })
                break;  
            case 'brazil':
                data.countries[2].cities.forEach(element=>{
                     searchResult.innerHTML += `<h2>Brazil</h2>`;
                     searchResult.innerHTML += `<h3>${element.name}</h3>`;
                     searchResult.innerHTML += `<img src="${element.imageUrl}" id='city'/>`;
                     searchResult.innerHTML += `<div id="description">${element.description}</div>`;
                })
                break;
            case 'countries':
                data.countries.forEach(element => {
                    searchResult.innerHTML += `<h2>${element.name}</h2>`;
                    element.cities.forEach(item=>{    
                        searchResult.innerHTML += `<h3>${item.name}</h3>`
                        searchResult.innerHTML += `<img src="${item.imageUrl}" id='city'/>`
                        searchResult.innerHTML += `<div id="description">${item.description}<br>
                    <button id="view">view</button></div>`
                    })
                });
                break;
            case 'temples':
                data.temples.forEach(e=>{
                    searchResult.innerHTML += `<h2>${e.name}</h2>`;
                    searchResult.innerHTML += `<img src="${e.imageUrl}" id='temple'/>`;
                    searchResult.innerHTML += `<div id="description">${e.description}<br>
                    <button id="view">view</button></div>`;
                });
                break;
            case 'beaches':
                data.beaches.forEach(i=>{
                    searchResult.innerHTML += `<h2>${i.name}</h2>`
                    searchResult.innerHTML += `<img src="${i.imageUrl}" id='beach'/>`;
                    searchResult.innerHTML += `<div id="description">${i.description}<br>
                    <button id="view">view</button></div>`
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
document.getElementById('reset').addEventListener('click', ()=>{
    document.getElementById("searchbar").value="";
    searchResult.innerHTML="";
})