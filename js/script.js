console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=lJWfLSs7mSYNDyZkbTJmlwbSl7qiebij&q=cat&limit=25&offset=0&rating=pg&lang=en&bundle=messaging_non_clips";


async function cats() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data[0];
    console.log(images);
}

cats();
