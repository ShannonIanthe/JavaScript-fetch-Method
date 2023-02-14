
// Define variables
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json()) //results must be in json format
    .then((data) => {
      //calling the data
      //console.log(data[0]);
      //Picking the data we want to display
      //console.log(data[0].capital[0]);
      //console.log(data[0].continents[0]);
      //console.log(
      //data[0].currencies[Object.keys(data[0].currencies)].name);
      //console.log(data[0].flags.png);
      //console.log(data[0].name.common);
      //console.log(data[0].population);
      //console.log(Object.values(data[0].languages).toString().split(",").join(", "));

      //using innerHTML to display the data
      result.innerHTML = `
        <img src= "${data[0].flags.png}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>Currency:</h4>
    <span>${
      data[0].currencies[Object.keys(data[0].currencies)].name
    } - ${Object.keys(data[0].currencies)[0]}</span>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>Common Language:</h4>
<span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")}</span>
</div>
        </div>
        `;
    });
});
