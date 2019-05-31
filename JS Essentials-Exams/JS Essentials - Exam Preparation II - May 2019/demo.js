function solve1() {
    let array =[1,1,1,1,2];

    for (let i = 0; i <array.length ; i++) {
        if (array[i]===1){
           delete array[i];
        }
    }

}
solve1();