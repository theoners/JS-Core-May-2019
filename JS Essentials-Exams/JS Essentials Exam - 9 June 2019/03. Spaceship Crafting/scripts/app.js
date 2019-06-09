function spaceshipCrafting() {
    let products = {
        titanium: 25,
        aluminum: 50,
        magnesium: 75,
        carbon: 100,

    };

    let spaceships = {
        theUndefinedShip: {
            name: "THE-UNDEFINED-SHIP",
            titaniumBars: 7,
            aluminumBars: 9,
            magnesiumBars: 7,
            carbonBars: 7,
            count: 0
        },
        nullMaster: {name: "NULL-MASTER", titaniumBars: 5, aluminumBars: 7, magnesiumBars: 7, carbonBars: 5, count: 0},
        JSONCrew: {name: "JSON-CREW", titaniumBars: 3, aluminumBars: 5, magnesiumBars: 5, carbonBars: 2, count: 0},
        falseFleet: {name: "FALSE-FLEET", titaniumBars: 2, aluminumBars: 2, magnesiumBars: 3, carbonBars: 1, count: 0}

    };
    let titaniumCoreFound = +document.getElementById("titaniumCoreFound").value;
    let aluminiumCoreFound = +document.getElementById("aluminiumCoreFound").value;
    let magnesiumCoreFound = +document.getElementById("magnesiumCoreFound").value;
    let carbonCoreFound = +document.getElementById("carbonCoreFound").value;
    let lossesPercent = ((+document.getElementById("lossesPercent").value) / 4);

    titaniumCoreFound -= titaniumCoreFound * lossesPercent / 100;
    aluminiumCoreFound -= aluminiumCoreFound * lossesPercent / 100;
    magnesiumCoreFound -= magnesiumCoreFound * lossesPercent / 100;
    carbonCoreFound -= carbonCoreFound * lossesPercent / 100;

    let titaniumBars = Math.round(titaniumCoreFound / products.titanium);
    let aluminiumBars = Math.round(aluminiumCoreFound / products.aluminum);
    let magnesiumBars = Math.round(magnesiumCoreFound / products.magnesium);
    let carbonBars = Math.round(carbonCoreFound / products.carbon);
    while (true) {
        if (titaniumBars >= spaceships.theUndefinedShip.titaniumBars
            && aluminiumBars >= spaceships.theUndefinedShip.aluminumBars
            && magnesiumBars >= spaceships.theUndefinedShip.magnesiumBars
            && carbonBars >= spaceships.theUndefinedShip.carbonBars) {
            spaceships.theUndefinedShip.count++;
            titaniumBars -= spaceships.theUndefinedShip.titaniumBars;
            aluminiumBars -= spaceships.theUndefinedShip.aluminumBars;
            magnesiumBars -= spaceships.theUndefinedShip.magnesiumBars;
            carbonBars -= spaceships.theUndefinedShip.carbonBars;

        }
        if (titaniumBars >= spaceships.nullMaster.titaniumBars
            && aluminiumBars >= spaceships.nullMaster.aluminumBars
            && magnesiumBars >= spaceships.nullMaster.magnesiumBars
            && carbonBars >= spaceships.nullMaster.carbonBars) {
            spaceships.nullMaster.count++;
            titaniumBars -= spaceships.nullMaster.titaniumBars;
            aluminiumBars -= spaceships.nullMaster.aluminumBars;
            magnesiumBars -= spaceships.nullMaster.magnesiumBars;
            carbonBars -= spaceships.nullMaster.carbonBars;
        }
        if (titaniumBars >= spaceships.JSONCrew.titaniumBars
            && aluminiumBars >= spaceships.JSONCrew.aluminumBars
            && magnesiumBars >= spaceships.JSONCrew.magnesiumBars
            && carbonBars >= spaceships.JSONCrew.carbonBars) {
            spaceships.JSONCrew.count++;
            titaniumBars -= spaceships.JSONCrew.titaniumBars;
            aluminiumBars -= spaceships.JSONCrew.aluminumBars;
            magnesiumBars -= spaceships.JSONCrew.magnesiumBars;
            carbonBars -= spaceships.JSONCrew.carbonBars;
        }
        if (titaniumBars >= spaceships.falseFleet.titaniumBars
            && aluminiumBars >= spaceships.falseFleet.aluminumBars
            && magnesiumBars >= spaceships.falseFleet.magnesiumBars
            && carbonBars >= spaceships.falseFleet.carbonBars) {
            spaceships.falseFleet.count++;
            titaniumBars -= spaceships.falseFleet.titaniumBars;
            aluminiumBars -= spaceships.falseFleet.aluminumBars;
            magnesiumBars -= spaceships.falseFleet.magnesiumBars;
            carbonBars -= spaceships.falseFleet.carbonBars;
        } else {
            break;
        }
    }
    let availableBars = document.getElementById("availableBars").getElementsByTagName("p")[0];
    availableBars.textContent = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;
    let allSpaceShips = document.getElementById("builtSpaceships").getElementsByTagName("p")[0];
    let result = "";
    for (const spaceship in spaceships) {
        if (spaceships[spaceship].count !== 0) {
            result += ` ${spaceships[spaceship].count} ${spaceships[spaceship].name},`;
        }

    }
    if (result !== "") {
        result = result.substring(1, result.length - 1);
    }

    console.log(result);
    allSpaceShips.textContent = result;

}