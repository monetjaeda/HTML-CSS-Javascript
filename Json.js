let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);
let myArray = ["hello",'everyone'];
 console.log(myArray.length);
 myArray.push("goodbye");
 console.log(myArray.length);
 myArray.shift();
 for(let eachElement of myArray) {
     console.log(eachElement);
 }