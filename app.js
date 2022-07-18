const checkCountry= () =>{
    url='https://restcountries.com/v3.1/all'
    fetch(url)
    .then(response=>response.json())
    .then(data => displayCountries(data))
}

//Display country data

const displayCountries= data =>{
    // console.log(data)
    const allCountry=document.getElementById('all-country')
    data.forEach(country => {
       
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=
        `
        <h3>Common Name:${country.name.common} </h3>
        <h3>Official Name:${country.name.official} </h3>
       
        <h3>Population:${country.population} </h3>
        <h3>Population:${country.region} </h3>
        <img src="${country.flags.png}" alt="">
        <img src="${country.coatOfArms.png}" alt="">
        `
        allCountry.appendChild(div)
    
    });

}