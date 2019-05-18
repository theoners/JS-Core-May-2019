function aggregateElements(elements) {
    console.log(elements.reduce((a, b) => a + b, 0));
    console.log(elements.reduce((a, b) => a + 1/b, 0));
    console.log(elements.join(""));
}

aggregateElements([1, 2, 3]);