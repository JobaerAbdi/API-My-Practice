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
    <h1>Symble:</h1>
    <img src="${abroad.flags.png}" alt=""><br>
    <button onclick="buttonLoadData('${abroad.region}')">Country Details</button>
    `;
    mainContainer.appendChild(containerDiv);
    })
 }

 const buttonLoadData = site =>{
    const url = `https://restcountries.com/v3.1/region/${site}`
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => positionSite(data))
 }

 const positionSite = position =>{
    console.log(position);
    const divContainer = document.getElementById('positionSite');
    divContainer.innerHTML = `
        <h1>Country Area: ${position[0].area}</h1>
    `;
 }

countriesDataLoad();