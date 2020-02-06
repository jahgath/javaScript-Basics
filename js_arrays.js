// var countries = ["USA","Germany","China"]
//
// function giveCountryName(i){
//   return countries[i];
// }
//
// function giveLength() {
//   return countries.length;
// }

//push, pop

var choice = prompt("start y/n");
var arr = [];

if(choice == 'y'){
  action = "add";
  while (action != "quit") {

  action = prompt("type action");
  switch (action) {
    case "add":
    arr.push(prompt("name"));
    break;

    case "remove":
    var remName = prompt("name");
    var index = arr.indexOf(remName);
    arr.splice(index,1);
    break;

    case "display":
    console.log(arr);
    break;

    case "quit":
    break;

    default:
            }
      }
}//end of if
