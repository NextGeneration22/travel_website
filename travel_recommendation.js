const searchResult = document.getElementById("searchresult");
let dataArray= [];

function findDestination(){
    const searchinput = document.getElementById("searchbar").value;
    fetch('travel_recommendation_api.json')
      .the(response => response.json)
      .then(data=>{})
}