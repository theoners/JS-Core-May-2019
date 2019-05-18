function GCD(x,y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}

GCD(15,5);