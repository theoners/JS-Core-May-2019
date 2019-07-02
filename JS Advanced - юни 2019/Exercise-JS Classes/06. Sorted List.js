class List {
    constructor() {
        this.data = [];
        this.size = this.data.length;
    }

    add(element) {
        this.size++;
        this.data.push(+element);
        this.data.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.data.splice(index,1);
            this.size--;
        }


    }

    get(index) {
        return this.data[index];
    }

}


let list = new List();
for (let i = 0; i < 20; i++) {
    list.add(Math.floor(Math.random() * 200) - 100);
}
console.log(list);

