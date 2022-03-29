const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1] // tömböt másolunk, zárójelbe kell rakni és ...
arr3.push(6)
console.log("arr1: " , arr1);
console.log("arr3: " , arr3);

const arr4 = [...arr1, ...arr2]  // tömböket mergelünk // spread operator
console.log("arr4: ", arr4);  

const userProfile = {
    name: "Mirella",
    age: 18,
    country: "Hungary"
};

const userProfile2 = {...userProfile, gender: "female", name: "Léna"}; // egy objektumnak egy kulccsal csak egy értéke lehet--> megváltoztatja a létező kulcsot(name)

console.log("userProfile: ", userProfile); 
console.log("userProfile2: ", userProfile2); // objektum másolása