const student = {
    name: 'Иван',
    surname: 'Иванов',
    age: 36,
    course: 'Skillfactory',
    city: "Moscow",
}

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true
    } else {
        return false
    }
}

console.log(isProperty(student, 'city'));