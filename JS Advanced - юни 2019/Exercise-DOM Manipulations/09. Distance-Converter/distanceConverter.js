function attachEventsListeners() {
    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };
    let convertBtn = document.getElementById("convert");
    convertBtn.addEventListener("click", convert);

    function convert() {
        let inputFieldFrom = document.getElementById("inputDistance").value;
        let inputUnits = document.getElementById("inputUnits").value;
        let outputUnit = document.getElementById("outputUnits").value;
        let resultToMeter = units[inputUnits] * inputFieldFrom;
        document.getElementById("outputDistance").value=resultToMeter / units[outputUnit];
    }
}