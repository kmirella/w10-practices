const userProfile = {
    name: "Mirella",
    age: 18,
    country: "Hungary"
};

//const name = userProfile.name;
//const age = userProfile.age

// az alatta lévő ugyanazt jelenti, shorthand

/*const {name, age} = userProfile;
console.log("name: ", name);
console.log("age: ", age);*/

/*const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
}
logNameAndAge(userProfile)*/ 

const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}
logNameAndAge(userProfile)

const arr1 = [1,2,3,4];
/*const first = arr1[0];
const second = arr1[1];

console.log("first: ", first);
console.log("second: ", second);*/

const [a, b] = arr1;
console.log("a: ", a);
console.log("b: ", b);

const [x, ...y] = arr1;
console.log("x: ", x);
console.log("y: ", y);