function stringLength(firstString, secondString,thirdString) {
    let length = firstString.length+secondString.length+thirdString.length;
    let result = Math.round(length/3);
    console.log(length);
    console.log(result);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');