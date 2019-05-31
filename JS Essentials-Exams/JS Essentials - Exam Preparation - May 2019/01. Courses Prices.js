function solve(JSFundamentals, JSAdvanced, JSApplications, status) {
    let price = 0;
    let courses = {
        JSFundamentals: 170,
        JSAdvanced: 180,
        JSApplications: 190
    };
    if (JSFundamentals && JSAdvanced && JSApplications) {
        price = (courses.JSFundamentals + courses.JSAdvanced * 0.90 + courses.JSApplications) * 0.94;
    } else if (JSFundamentals && JSAdvanced && !JSApplications) {
        price = courses.JSFundamentals + courses.JSAdvanced * 0.90;

    } else {
        price += JSFundamentals ? courses.JSFundamentals : 0;
        price += JSAdvanced ? courses.JSAdvanced : 0;
        price += JSApplications ? courses.JSApplications : 0;
    }

    if (status === "online") {
        price *= 0.94;
    }
    console.log(Math.round(price));
}

solve(true, false, false, "onsite");
solve(true, false, false, "online");
solve(true, true, false, "onsite");