const me = {
    name: "엄지우",
    age: 21
};

const militaryMe = {
    ...me,
    militaryState: false
};

const animals = ["개", "고양이"];
const anotherAnimals = [...animals, "참새"];

console.log(anotherAnimals);