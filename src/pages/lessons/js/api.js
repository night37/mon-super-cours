const apiDiv = document.querySelector('.apiContacter');
const contactApi =   async() => {
    //Data va récup Toutes les données de l'api
    const response =  await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed =  await response.json();
    
    console.log('dataTransformed');
    console.log(dataTransformed);
    console.log(dataTransformed.elevation);
    apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
};
contactApi();