// Get the dropdown element from the HTML
const select = document.getElementById("breedsSelector");

// API endpoint provides the cat breed data
const dogBreedsURL = "https://api.thedogapi.com/v1/breeds";

// Fetch data from the API when the page loads
fetch(dogBreedsURL).then((res) => { 
    // Check to see if response is successful
    if (!res.ok) {
        // If response is not ok, stop and throw error message
        throw new Error("Invalid Request"); 
    }
        // Parse from JSON format to JS object
        return res.json(); 

}).then((data) => {
      // Log the first breed's name to the console (for testing)
    console.log(data[0].name);
       // Loop through all 67 breeds
    for (let i=0; i < data.length; i++) {
        // Store the current breed object
        const breed = data[i];
        // Create a new dropdown breed option element
        const breedOption = document.createElement("option");
         // Set breed option's text to the breed's name (displayed to user)
        breedOption.innerText = breed.name; 
        // Set the breed option's value to the breed's unique ID (to fetch actual data)
        breedOption.value = breed.id; 
        // Add the breed option to the dropdown menu
        select.appendChild(breedOption);
    }
    // Log all breed data to the console (for testing)
    console.log(data);
});


// Listen for a change event on the dropdown menu
    select.addEventListener("change", (event) => {
    // Get the selected breed's ID from the dropdown
    const selectedDogID = event.target.value;
    // Log the selected breed ID (for testing)
    console.log(selectedDogID);

// Fetch a random image for the selected breed
    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${selectedDogID}`)
    .then((res) => {
        // Check to see if response is successful
        if (!res.ok) {
            // If response is not ok, stop and throw error message
            throw new Error("Invalid Request"); 
        }
            // Parse from JSON format to JS object
            return res.json(); 
        
    }).then((data) => {
        // Console log data to inspect the API response (for testing)
        console.log(data); 
        // Extract the image URL from the API response
        const url = data[0].url; 


// Fetch detailed breed data using the image ID
    fetch(`https://api.thedogapi.com/v1/images/${data[0].id}?include_breeds=1`)
    .then((res) => {
        // Check to see if response is successful
        if (!res.ok) {
            // If response is not ok, stop and throw error message
            throw new Error("Invalid Request");
        }
            // Parse from JSON format to JS object
            return res.json();

    }).then((breedData) => {
        // Create an <p> element for hypoallergenic information
        const hypo = document.createElement("p");
        hypo.classList.add("details");
        // Check IF the breed is hypoallergenic (1 = yes, 0 = no)
        if (breedData.breeds[0].hypoallergenic === 1) {
            // Display text in <p> element for 1
            hypo.innerText = "Yes, this is a good doggie! ARF! ARF!."; 
        } else {
            // Display text in <p> element for 0
            hypo.innerText = "Yes, this is a good doggie! ARF! ARF!";
        }
     
         // Create an <img> element for the cat image
        const dogImg = document.createElement("img");
        // Set the image source to the extracted URL
        dogImg.src = url;

        // Create a <section> element to group the image and the h2 text
        const section = document.createElement("section"); 
        // Append the cat image to the section
        section.appendChild(dogImg); 
        // Append the hypoallergenic message to the section
        section.appendChild(hypo);

        // Get the container where the content will be displayed
        const container = document.getElementById("dogContainer");
        // Clear the container to remove previous images and messages to avoid stacked images
        container.innerHTML = "";
        // Add the section (with image and text) to the container
        container.appendChild(section);
    })
    }).catch((error) => {
        // Log any errors that occur during the fetch
        console.error("Error fetching dog image:", error);
    });
});

