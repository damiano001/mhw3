function onJson(json) {
    console.log("JSON received",json);
   
    const imageView = document.querySelector("#image-view");
    imageView.innerHTML = "";
   
    const results = json.results;
    let numResults = results.length;
  
    if (numResults > 10) numResults = 10;
   
    for (let i = 0; i < numResults; i++) {
     
      const imageData = results[i];
      const imageUrl = imageData.urls.regular;
      
    
      const image = document.createElement("img");
      image.src = imageUrl;
      
     
      imageView.appendChild(image);
    }
  }
  
  function onResponse(response) {
    console.log("Response received");
    return response.json();
  }
  

  let ACCESS_KEY = "bon2NbHxc2JlagiVNM-LvcANCbD5abOFdvxhuuszBt8"
  function search(event) {
   
    event.preventDefault();
   
    const locationInput = document.querySelector("#location");
    const locationValue = encodeURIComponent(locationInput.value);
    console.log("Executing search: " + locationValue);
    
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
  
 
  const form = document.querySelector("form");
  form.addEventListener("submit", search);
  
