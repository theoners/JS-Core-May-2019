function solve(input) {
    function formatter(formatter) {
        function dollarFormatter(value) {
            return formatter(',', '$', true, value);
        }
        return dollarFormatter;
    }
    return formatter(input);
}
