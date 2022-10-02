const countriesDataLoad = () =>{
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
    .then(res => res.json())
    .then(data => loadDataFromCountries(data))
}

const loadDataFromCountries = desh =>{            // desh = [{},{},{},{}]
    //console.log(desh);

    // for(const de of desh){
    //     console.log(de);
    // }
    const mainContainer = document.getElementById('data-container');
    mainContainer.classList.add('styleMainContainer')
    desh.forEach(abroad =>{                      // abroad = {}, abroad = {}, abroad = {}, abroad = {}, abroad = {}, 
     console.log(abroad);
    // console.log(abroad.region);               // Europe 
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('divStyle');
    containerDiv.innerHTML = `
    <h1>Country Name: ${abroad.name.common}</h1>
    <h1>Region: ${abroad.region}</h1>
    <h1>Symble: </h1>
    <img src="${abroad.flags.png}" alt="">
    `;
    mainContainer.appendChild(containerDiv);
    })
 }

countriesDataLoad();