const select = document.getElementById("breedsSelector");

const catBreedsURL = "https://api.thecatapi.com/v1/breeds";




fetch(catBreedsURL).then((res) => { // this will fetch ALL 67 breeds and related data when page loads
    if (!res.ok) {
        throw new Error("Invalid Request"); // If res is not ok throw error message
    }
        return res.json(); //parse from JSON into regular JS
}).then((data) => {
    console.log(data[0].name);
    for (let i=0; i < data.length; i++) {
        const breed = data[i];
        const breedOption = document.createElement("option");
        breedOption.innerText = breed.name; //setting name of specific option and displayed to user
        breedOption.value = breed.id; // used to fetch actual data
        select.appendChild(breedOption);
    }
    console.log(data);
})



select.addEventListener("change", (event) => {
    const selectedCatID = event.target.value;
    console.log(selectedCatID);

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedCatID}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Invalid Request"); // If res is not ok throw error message
        }
            return res.json(); //parse from JSON into regular JS
        
    }).then((data) => {
        console.log(data); //console log data to test and see useful data in console
        const url = data[0].url; // Create a url variable for the data.url

            // ! SECOND FETCH ADDED WITH MOHAMMAD'S HELP
    fetch(`https://api.thecatapi.com/v1/images/${data[0].id}?include_breeds=1`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Invalid Request"); // If res is not ok throw error message
        }
            return res.json(); //parse from JSON into regular JS
    }).then((breedData) => {
        const hypo = document.createElement("h2");
        if (breedData.breeds[0].hypoallergenic === 1) {
            hypo.innerText = "This cat breed will NOT cause allergies. You can pity-pat that kitty cat! Meow!"; //Add template literal here for `The ${breedName} cat breed will not cause allergies.`
        } else {
            hypo.innerText = "This cat breed will cause allergies. RUN!"; //Add template literal here for `The ${breedName} cat breed will cause allergies.`
        }
     

        const catImg = document.createElement("img"); // Create variable for cat image
        catImg.src = url; // the source of the cat image becomes the url variable

        const section = document.createElement("section"); // Create variable for cat image SECTION
        section.appendChild(catImg); // Append cat image to the SECTION

                // ! APPENDCHILD ADDED WITH MOHAMMAD'S HELP
        section.appendChild(hypo);

        const container = document.getElementById("catContainer"); //Create variable for cat image CONTAINER
        container.innerHTML = ""; // clear page to avoid stacked images
        container.appendChild(section); // Append the SECTION to the CONTAINER

    })
    

    }).catch((error) => {
        console.error("Error fetching cat image:", error);
    });
});

// After choosing cat breed from dropdown....
// COMPLETE 1. Displays the cat image CHECK!!! Logs ID in console 
// ---I WOULD LIKE TO ADD THIS TO INNERTEXT AS TEMPLATE LITERAL 2. Displays the breed name (maybe this is unnecessary bc breed shows on dropdown menu when selected) 
// COMPLETE 3. Displays the hypoallergenic status (1 or 0).
// COMPLETE 4. The hypoallergenic status should be converted to "yes" or "no" from 1 or 0, respectively
// COMPLETE 5. Maybe some text like: "Can I pet that dawg?" Y/N or "Can I pity-pat that kitty cat?" Y/N 
// or something not dumb and funny and more serious like "Hypoallergenic: Yes" : "Hypoallergenic: No" etc.

