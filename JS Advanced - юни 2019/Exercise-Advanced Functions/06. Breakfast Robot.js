function solve() {
    return (function () {
        let ingredients = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0,
            toString() {
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
            }
        };

        const recipes = {
            apple: {carbohydrate: 1, flavour: 2},
            lemonade: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            eggs: {protein: 5, fat: 1, flavour: 1},
            turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        };

        function restock(ingredient, quantity) {
            ingredients[ingredient] += quantity;
            return 'Success';
        }

        function prepare(recipe, neededQuantity) {
            const currentRecipe = recipes[recipe];

            for (const ingredient in currentRecipe) {
                if (ingredients[ingredient] < currentRecipe[ingredient]*neededQuantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }

            }

            for (const ingredient in currentRecipe) {
                ingredients[ingredient] -= currentRecipe[ingredient]*neededQuantity;
            }
            return 'Success';
        }

        function report() {
            return ingredients.toString();
        }

        return function (input) {
            const tokens = input.split(' ');
            const command = tokens[0];

            switch (command) {
                case "prepare":
                    return prepare(tokens[1], +tokens[2]);

                case "restock":
                    return restock(tokens[1], +tokens[2]);

                case "report":
                    return report();
            }
        }
    })();
}

