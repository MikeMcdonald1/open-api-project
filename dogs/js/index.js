const select = document.getElementById("breedsSelector");

const dogBreedsURL = "https://api.thedogapi.com/v1/breeds";




fetch(dogBreedsURL).then((res) => { // this will fetch ALL 67 breeds and related data when page loads
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
    const selectedDogID = event.target.value;
    console.log(selectedDogID);

    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${selectedDogID}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Invalid Request"); // If res is not ok throw error message
        }
            return res.json(); //parse from JSON into regular JS
        
    }).then((data) => {
        console.log(data); //console log data to test and see useful data in console
        const url = data[0].url; // Create a url variable for the data.url

            // ! SECOND FETCH ADDED WITH MOHAMMAD'S HELP
    fetch(`https://api.thedogapi.com/v1/images/${data[0].id}?include_breeds=1`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Invalid Request"); // If res is not ok throw error message
        }
            return res.json(); //parse from JSON into regular JS
    }).then((breedData) => {
        const hypo = document.createElement("h2");
        if (breedData.breeds[0].hypoallergenic === 1) {
            hypo.innerText = "This dog breed will not cause allergies."; 
        } else {
            hypo.innerText = "Yes, this is a good doggie! ARF! ARF!";
        }
     

        const dogImg = document.createElement("img"); // Create variable for dog image
        dogImg.src = url; // the source of the dog image becomes the url variable

        const section = document.createElement("section"); // Create variable for dog image SECTION
        section.appendChild(dogImg); // Append dog image to the SECTION

                // ! APPENDCHILD ADDED WITH MOHAMMAD'S HELP
        section.appendChild(hypo);

        const container = document.getElementById("dogContainer"); //Create variable for dog image CONTAINER
        container.innerHTML = ""; // clear page to avoid stacked images
        container.appendChild(section); // Append the SECTION to the CONTAINER

    })
    

    }).catch((error) => {
        console.error("Error fetching dog image:", error);
    });
});

// After choosing cat breed from dropdown....
// COMPLETE 1. Displays the cat image CHECK!!! Logs ID in console 
// COMPLETE 2. Displays the hypoallergenic status (1 or 0).
// COMPLETE 3. The hypoallergenic status should be converted to "yes" or "no" from 1 or 0, respectively
// COMPLETE 4. Maybe some text like: "Can I pet that dawwwg?" Y/N or "Can I pity-pat that kitty cat?" Y/N 
// or something not dumb and funny and more serious like "Hypoallergenic: Yes" : "Hypoallergenic: No" etc.

