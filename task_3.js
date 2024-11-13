function newObject() {
    return Object.create(null);
}

const obj = newObject();

console.log(obj)
console.log(Object.getPrototypeOf(obj));
