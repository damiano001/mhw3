function onJson(json) {
    console.log("JSON received",json);
    // Empty the image view
    const imageView = document.querySelector("#image-view");
    imageView.innerHTML = "";
    // Read the number of results
    const results = json.results;
    let numResults = results.length;
    // Display at most 10 images
    if (numResults > 10) numResults = 10;
    // Process each result
    for (let i = 0; i < numResults; i++) {
      // Read the image data
      const imageData = results[i];
      const imageUrl = imageData.urls.regular;
      
      // Create the image element
      const image = document.createElement("img");
      image.src = imageUrl;
      
      // Add the image to the image view
      imageView.appendChild(image);
    }
  }
  
  function onResponse(response) {
    console.log("Response received");
    return response.json();
  }
  

  let ACCESS_KEY = "bon2NbHxc2JlagiVNM-LvcANCbD5abOFdvxhuuszBt8"
  function search(event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Read the search term
    const locationInput = document.querySelector("#location");
    const locationValue = encodeURIComponent(locationInput.value);
    console.log("Executing search: " + locationValue);
    // Send the search request to Unsplash API
    fetch(
      `https://api.unsplash.com/search/photos?query=${locationValue}&per_page=10`,
      {
        headers: {
          Authorization: "Client-ID " +ACCESS_KEY
        }
      }
    )
      .then(onResponse)
      .then(onJson);
  }
  
  // Add event listener to the form
  const form = document.querySelector("form");
  form.addEventListener("submit", search);
  