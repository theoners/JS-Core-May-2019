(() => {
        let IdCounter = 0;
        return class Extensible{
            constructor(){
                this.id = IdCounter;
                IdCounter++;
            }
            extend(template){
                for (const prop in template) {
                    if (typeof template[prop] === 'function') {
                        Extensible.prototype[prop] = template[prop];
                    } else {
                        this[prop] = template[prop];
                    }
                }
            }
        }
    }
)();