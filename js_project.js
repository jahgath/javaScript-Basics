var age = prompt("Enter age");
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var height = prompt("Height");
var  petName = prompt("petName");

if (firstName[0] === lastName[0]) {
  if (age >=20 && age <= 30) {
    if (height >= 170) {
      if (petName[petName.length-1] === "y") {
        console.log("Hey");
      }
    }
  }

}
