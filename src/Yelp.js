/*
const apiKey = 'TbP0Z-sMe74wtuw6kP-qGa2FXbN74GhfR9lx1FhQmnToCiw6Oee_ASQpIFxl-1BqHvUIMtBQCfxtRHGVCPlNu0jp8q7n9AQUjErfBfzTSfC_fICFSDDEOfEoyoOoZXYx';
const yelpBaseUrl = 'https://api.yelp.com/v3';

function search(searchState, locationState, sortBy){
    const corsOverride = 'https://cors-anywhere.herokuapp.com/' //must go to https://cors-anywhere.herokuapp.com/corsdemo and request temporary access in order to use CORS Anywhere.
    const searchEndpoint = '/businesses/search';
    const queryParams = `?location=${locationState}&term=${searchState}&sort_by=${sortBy}&limit=18`;
    const urlToFetch =  corsOverride + yelpBaseUrl + searchEndpoint + queryParams;
    return fetch(urlToFetch,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response=>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    }, networkError=> console.log(networkError.message)
    ).then(poop=>{
        if(poop.businesses){
            console.log(poop.businesses)
            return poop.businesses.map((business)=>({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }))
        }
    });
}

export default search

*/

const apiKey = 'TbP0Z-sMe74wtuw6kP-qGa2FXbN74GhfR9lx1FhQmnToCiw6Oee_ASQpIFxl-1BqHvUIMtBQCfxtRHGVCPlNu0jp8q7n9AQUjErfBfzTSfC_fICFSDDEOfEoyoOoZXYx';
//must go to https://cors-anywhere.herokuapp.com/corsdemo and request temporary access in order to use CORS Anywhere.
function search(searchState, locationState, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${locationState}&term=${searchState}&sort_by=${sortBy}&limit=18`,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
    })
    .then(
        fart=>{ 
        if(fart.ok){ //checks to see if response status is okay
            return fart.json(); //parse the JSON data from the response
        }// if not okay it acts as an else block by default I think
        throw new Error('Request Faileddddd!');
              } 
        )
    .then( // DO something with the response if okay
        poopResponse=>{
        if(poopResponse.businesses){
            return poopResponse.businesses.map((shit)=>({
                id: shit.id,
                imageSrc: shit.image_url,
                name: shit.name,
                address: shit.location.address1,
                city: shit.location.city,
                state: shit.location.state,
                zipCode: shit.location.zip_code,
                category: shit.categories[0].title,
                rating: shit.rating,
                reviewCount: shit.review_count
            }))
        }
    }
    )
    .catch(error => { //Handle any errors
        console.log('OH shit', error)
    })
};

export default search
