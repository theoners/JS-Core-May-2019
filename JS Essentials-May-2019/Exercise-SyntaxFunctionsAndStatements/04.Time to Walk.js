function calculateWalkTime(steps, footPrintLength, speed){
    let distance= steps * footPrintLength;
    let speedInMetersPerSecond = speed * 1000 / (3600);

    let breakTimeSeconds = Math.floor(distance / 500) * 60;

    let totalSeconds = breakTimeSeconds + distance / speedInMetersPerSecond;

    let hours = Math.floor(totalSeconds / (60 * 60));
    let minutes = Math.floor((totalSeconds - hours * 60 * 60) / 60);
    let seconds = Math.ceil(totalSeconds % 60);
    hours = hours > 10 ? hours : "0"+hours;
    minutes =minutes > 10 ? minutes : "0"+minutes;
    seconds = seconds > 10 ? seconds : "0"+seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
}

calculateWalkTime(4000, 0.60, 5);