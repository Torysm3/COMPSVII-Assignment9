console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=lJWfLSs7mSYNDyZkbTJmlwbSl7qiebij&q=cat&limit=25&offset=0&rating=pg&lang=en&bundle=messaging_non_clips";


async function cats() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    console.log(images)
    return images;


}

cats();

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
button.addEventListener("click", async function() {
    const images = await cats();
    images.forEach(image => {
        gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3">`;
  
        
    });
        
    
});