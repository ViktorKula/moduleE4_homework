const student = {
    name: 'Иван',
    surname: 'Иванов',
    age: 36,
    course: 'Skillfactory',
    city: "Moscow",
}

const sorting = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`key: ${key}, value: ${obj[key]}`);
        }
    }
}

sorting(student);
