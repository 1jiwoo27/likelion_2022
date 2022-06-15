const me = {
    name: "엄지우",
    age: 21,
    gender: 'female'
};

const someone = {
    name: "율전이",
    age: 20,
    gender: 'male'
};

function addMilitaryStateMale(person) {
    if (person.gender === 'male') {
        person.militaryState = false;
    }
}

addMilitaryStateMale(me);
addMilitaryStateMale(someone);

function parseBoolean(value){
    if (value === true) {
        return "참";
    } else if (value === false) {
        return "거짓";
    }
}

/*if (me.militaryState !== undefined){
    console.log(parseBoolean(me.militaryState));
}
if (someone.militaryState !== undefined){
    console.log(parseBoolean(someone.militaryState));
}*/

me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState));