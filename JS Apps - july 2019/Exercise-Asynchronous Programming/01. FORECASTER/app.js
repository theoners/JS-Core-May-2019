function attachEvents() {

    const weatherIcons = {
        "Sunny": "☀",
        "Partly sunny": "&#x26C5",
        Overcast: "&#x2601",
        Degrees: "&#176",
        Rain: "&#x2614"

    };
    const urlLocation = "https://judgetests.firebaseio.com/locations.json";
    const currentWeatherElement = document.getElementById("current");
    const upComingWeatherElement = document.getElementById("upcoming");
    const submitBtn = document.getElementById("submit");
    const forecastElement = document.getElementById("forecast");
    submitBtn.addEventListener("click", clickEvent);

    function clickEvent() {
        forecastElement.firstElementChild.innerHTML = "<div class=\"label\">Current conditions</div>";
        upComingWeatherElement.innerHTML="<div class=\"label\">Three-day forecast</div>";
        fetch(urlLocation)
            .then(handler)
            .then(getForecastForCurrentLocation);

    }

    function getForecastForCurrentLocation(data) {
        const input = document.getElementById("location").value;
        const code = data.filter(x => x.name === input).length!==0?data.filter(x => x.name === input)[0].code:"";
        if (!code){
            forecastElement.style.display = "block";
            forecastElement.firstElementChild.firstElementChild.textContent = "Currently we support forecast for London, Barcelona and New York";
            upComingWeatherElement.firstElementChild.textContent="another city will be added soon:)";
            return;
        }
        fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json `)
            .then(response => response.json())
            .then(attachForecastToDom);

        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(response => response.json())
            .then(attachForecastToDomForThreeDays)


    }

    function attachForecastToDom(data) {
        let spanElement = document.createElement("span");
        spanElement.classList.add("condition");
        spanElement.classList.add("symbol");
        spanElement.innerHTML = weatherIcons[data.forecast.condition];
        currentWeatherElement.appendChild(spanElement);
        forecastElement.style.display = "block";

        const spanCondition = document.createElement("span");
        spanCondition.classList.add("condition");
        spanElement = document.createElement("span");
        spanElement.classList.add("forecast-data");
        spanElement.textContent = data.name;
        spanCondition.appendChild(spanElement);

        spanElement = document.createElement("span");
        spanElement.classList.add("forecast-data");
        spanElement.innerHTML = data.forecast.low + weatherIcons.Degrees + "/" + data.forecast.high + weatherIcons.Degrees;
        spanCondition.appendChild(spanElement);

        spanElement = document.createElement("span");
        spanElement.classList.add("forecast-data");
        spanElement.textContent = data.forecast.condition;
        spanCondition.appendChild(spanElement);
        currentWeatherElement.appendChild(spanCondition);

    }

    function attachForecastToDomForThreeDays(data) {
        for (const weatherInfo of data.forecast) {
            const spanUpComing = document.createElement("span");
            spanUpComing.classList.add("upcoming");

            let spanElement = document.createElement("span");
            spanElement.classList.add("forecast-data");
            spanElement.innerHTML = weatherIcons[weatherInfo.condition];
            spanUpComing.appendChild(spanElement);

            spanElement = document.createElement("span");
            spanElement.classList.add("forecast-data");
            spanElement.innerHTML = weatherInfo.low + weatherIcons.Degrees + "/" + weatherInfo.high + weatherIcons.Degrees;
            spanUpComing.appendChild(spanElement);

            spanElement = document.createElement("span");
            spanElement.classList.add("forecast-data");
            spanElement.textContent = data.forecast.condition;
            spanUpComing.appendChild(spanElement);

            upComingWeatherElement.appendChild(spanUpComing);
        }
    }

    function handler(response) {
        console.log(response.status);
        if (response.status > 400) {
            forecastElement.style.display = "block";
            forecastElement.firstElementChild.firstElementChild.textContent = "Something went wrong";
            upComingWeatherElement.firstElementChild.textContent="Please try after few seconds";
        }
        return response.json();

    }
}

attachEvents();