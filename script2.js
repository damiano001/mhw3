function onJson(json) {
    console.log('JSON ricevuto', json);
    // Svuotiamo la libreria
    const info_res = document.querySelector('#res');
    info_res.innerHTML = '';
    
    if (json.name === undefined) {
      const msg = document.createElement('span');
      msg.textContent = 'Insert a valid code ';
      info_res.appendChild(msg);
      return;
    }
    const name = json.name !== "" ? json.name : "N/A";
    const location = json.location !== "" ? json.location : "N/A";
    const postal_code = json.postal_code !== "" ? json.postal_code : "N/A";
    const contacts = json.phone !== "" ? json.phone : "N/A";
    const website = json.website !== "" ? json.website : "N/A";
    const street_name = json.street !== "" ? json.street : "N/A";
    const street_number = json.street_number;
    const street = street_name +' '+ street_number;
  
      // div esterno
      const section = document.createElement('div');
      // tag interni per le varie info
      const section_text = document.createElement('span');
      section_text.innerHTML = '<strong>Airport name:</strong> '+name+ '<br><br>' + 
                          '<strong>Location:</strong> '+location+ '<br><br>' +
                          '<strong>Address:</strong> '+street+ '<br><br>'    +  
                          '<strong>Postal code:</strong> '+postal_code+ '<br><br>' +
                          '<strong>Contacts:</strong> '+contacts+ '<br><br>'   +
                          '<strong>Website:</strong> <a href="'+website+'" target="_blank">'+website+'</a><br>';
      section.appendChild(section_text);
      
         
      
      info_res.appendChild(section);
    }
  
  
  function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  } 


function search(event){  
  event.preventDefault();
  
  const input = document.querySelector('#city');
  const value = encodeURIComponent(input.value);
  console.log('Eseguo ricerca: ' + value);

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0541f69136msh9683cf46d2f08acp193ca1jsnd89b017f75d5',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
}

fetch('https://airport-info.p.rapidapi.com/airport?iata='+value, options)
   .then(onResponse)
   .then(onJson)



	//.then(response => response.json())
	//.then(response => console.log(response))
	//.catch(err => console.error(err));
}  

 
const form = document.querySelector('form');
form.addEventListener('submit', search)




