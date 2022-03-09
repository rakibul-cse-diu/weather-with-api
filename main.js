// ee37041bb2ad802bdd7f94107aeb82fe
// api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}

var apiKey = "ee37041bb2ad802bdd7f94107aeb82fe";

const handleSearch = () => {
    const input = document.getElementById("search-input")
    let cityName = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))

    input.value = '';
}


// display data
const displayData = (data) => {
    const container = document.querySelector(".result-area");
    container.textContent = '';
    const resultContainer = document.createElement("div")
    resultContainer.className = "result-container text-start";
    resultContainer.innerHTML = `
            <span class="d-block text-white">
            <h5 class="d-inline">City: </h5><span>${data.name}</span>
            </span>
            <span class="d-block text-white">
                <h5 class="d-inline">Country: </h5><span>${data.sys.country}</span>
            </span>
            <span class="d-block text-white">
                <h5 class="d-inline">Tempareture: </h5><span>${data.main.temp}</span>
            </span>
            <span class="d-block text-white">
                <h5 class="d-inline">Min Tempareture: </h5><span>${data.main.temp_min}</span>
            </span>
            <span class="d-block text-white">
                <h5 class="d-inline">Max Tempareture: </h5><span>${data.main.temp_max}</span>
            </span>
    `
    container.appendChild(resultContainer);
}