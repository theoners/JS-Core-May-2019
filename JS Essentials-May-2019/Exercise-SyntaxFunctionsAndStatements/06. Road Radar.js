function roadRadar(array) {
    let roadLimits = {
        "motorway":130,
        "interstate":90,
        "city":50,
        "residential":20
    };

    let speedingUp = array[0]-roadLimits[array[1]];
    let message ="";

   if (speedingUp>40){
       message="reckless driving";
   }else if (speedingUp>20){
       message="excessive speeding"
   }else if (speedingUp>0){
       message="speeding";
   }
   console.log(message);
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);