class Kitchen {
    constructor(budget) {
        this.budget = +budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let productName = product.split(" ")[0];
            let productQuantity = +product.split(" ")[1];
            let productPrice = +product.split(" ")[2];
            let message = `There was not enough money to load ${productQuantity} ${productName}`;
            if (this.budget >= productPrice) {
                if (!this.productsInStock[productName]) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                message = `Successfully loaded ${productQuantity} ${productName}`;
            }
            this.actionsHistory.push(message);
        }
        return this.actionsHistory.join('\n');

    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {};
            this.menu[meal]["products"] = neededProducts;
            this.menu[meal]["price"] = +price;
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let result = "";
        Object.keys(this.menu).length === 0
            ? result = "Our menu is not ready yet, please come later..."
            : Object.keys(this.menu).forEach(x => result += `${x} - $ ${this.menu[x].price}\n`);
        result.trim();
        return result;
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (const product of this.menu[meal].products) {
            let neededProduct = product.split(' ')[0];
            let neededQuantity = +product.split(' ')[1];
            if (!this.productsInStock[neededProduct] || this.productsInStock[neededProduct] < neededQuantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }


        for (const product of this.menu[meal].products) {
            let neededProduct = product.split(' ')[0];
            let neededQuantity = +product.split(' ')[1];
            this.productsInStock[neededProduct] -= neededQuantity;
        }
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}