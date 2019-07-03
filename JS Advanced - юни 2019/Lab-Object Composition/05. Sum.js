function solve() {
    let num1;
    let num2;
    let result;

    let init = (selectorOne, selectorTwo, resultSelector) => {
        num1 = $(selectorOne);
        num2 = $(selectorTwo);
        result = $(resultSelector);
    };

    let add = () => result.val(+num1.val() + +num2.val());
    let subtract = () => result.val(num1.val() - num2.val());
return{init,add,subtract};
}