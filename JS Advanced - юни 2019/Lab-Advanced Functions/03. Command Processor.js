function result() {
    let result = "";

    function append(string) {
        result += string;
    }

    function removeStart(n) {
        result = result.substring(n);
    }

    function removeEnd(n) {
        result = result.substring(0, result.length - n);
    }

    function print() {
        console.log(result);
    }

    return {

        append,
        removeEnd,
        removeStart,
        print,

    };
}






