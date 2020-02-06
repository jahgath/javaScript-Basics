function helloYou(name){
  console.log("Hello "+name);
}

function addNum(num1,num2) {
  console.log(num1 + num2);
}

function helloSomeone(name="Frankie") {
  console.log("Hello " +name);
}

function formal(name="Sam", title="Sir") {
  console.log(title+" "+name);
  return title+" "+name;
}

function timesFive(numIn){
  var result = numIn * 5;
  return result;
}

function makeBricks(small, big, goal){
  if(small + (big*5) >= goal)
  return true;
  else return false;
}
