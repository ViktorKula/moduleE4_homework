// const obj = function () {
//     Object.create(null);
// }
//
// console.log(obj)

const obj = newObject();

function newObject() {
    return new Object(null)
}

console.log(obj)
