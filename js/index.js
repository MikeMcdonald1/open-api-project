//Create function for GET/fetch requests for each API endpoint (get the data)
//Create function to display the retrieved data on the page/html (display the data)
//Add error handling to manage problems during the API requests (deal with issues)

// Event listeners for navigation buttons

// document.getElementById("fetch-cat").addEventListener("click", fetchEndPoint1);
// document.getElementById("endpoint2-btn").addEventListener("click", fetchEndPoint2);


// const apiKeyCat = "live_L41ngJrkRY52Td92Fpm5NU4WgwfGDn4XispAZM8wpIO1oLrdX8cXlUpymkRRHpbH";
// const apiKeyDog = "live_L8UE7f4UGb01MkPFkgMjxc5eHRFZY2xFxl1oasaqephW0D8W0CD0Vwem4gSxy40U";


// const baseCatURL = "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_L41ngJrkRY52Td92Fpm5NU4WgwfGDn4XispAZM8wpIO1oLrdX8cXlUpymkRRHpbH";

// const baseDogURL = "https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_L8UE7f4UGb01MkPFkgMjxc5eHRFZY2xFxl1oasaqephW0D8W0CD0Vwem4gSxy40U";

// // const catContainer = document.getElementById("catContainer");
// // const fetchCatButton = document.getElementById("fetch-cat");

// // //test info for GitHub

// fetchCatButton.addEventListener("click", () => {
//     fetch(baseCatURL)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("Invalid Request");
//         }
//             return res.json(); //parse from JSON into regular JS
//             // clear out previous cat
//     }).then((data) => {
//         catContainer.innerHTML = ""; //empty the contents of catContainer before running the fetch 
//         console.log(data);
//         const catImgURL = data[0].url;
//         const catImg = document.createElement("img");
//         catImg.src = catImgURL;
    
    
//         console.log(data[0].breeds[0].description);
//         const breedName = data[0].breeds[0].name;
//         const catBreedTitle = document.createElement("h2");
//         catBreedTitle.innerText = breedName;
    
//         const breedDescription = document.createElement("p");
//         breedDescription.innerText = data[0].breeds[0].description;
    
//         catContainer.appendChild(catBreedTitle);
//         catContainer.appendChild(breedDescription);
//         catContainer.appendChild(catImg);
    
//     }).catch((err) => {
//         console.warn(err);
//     });
// });




//if you wanted specific element from array/object  do this -- console.log(data[0].url);
//https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=live_L41ngJrkRY52Td92Fpm5NU4WgwfGDn4XispAZM8wpIO1oLrdX8cXlUpymkRRHpbH
//potential endpoints -- breed, name, description, hypoallergenic, temperament, wikipedia_URL, limit=1&has_Breeds=1, 

// console.log(data[0].breeds[0].temperament);
// console.log(data[0].breeds[0].description);
// console.log(data[0].breeds[0].hypoallergenic); 

// async function fetchEndpoint1() {