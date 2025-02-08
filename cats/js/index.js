const select = document.getElementById("breedsSelector");

const catBreedsURL = "https://api.thecatapi.com/v1/breeds";

fetch(catBreedsURL).then((res) => {
    if (!res.ok) {
        throw new Error("Invalid Request");
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
    // console.log(data);
})

select.addEventListener("change", (event) => {
    const selectedCatID = event.target.value;
    console.log(selectedCatID);

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedCatID}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Invalid Request");
        }
            return res.json(); //parse from JSON into regular JS
        
    }).then((data) => {
        console.log(data);
        const url = data[0].url;
        // make an image with the url as source of image. Add image to dom. Section for cat image, select section, say section.Appendchild("new cat image dom element"); OR make a blank image "".
    })
})


