document.getElementById("first").innerHTML
   ="innerHTML property is to display the content of a specific element identified by id ";
console.log("This is output of console in JS")
console.log("2+3=",2+3);
function display(){
  document.write("Hello! you will used this method ( document.wirte() )  many times to display easily.");
}
function alert_func(){
  window.alert("This is an alert message!!!");
}
function print_func(){
  window.print();
}
function prompt_func(){
    let userName= window.prompt("Enter your name:");
    if (userName !== null){
      window.alert("Hello "+userName+"!");
    }
    else{
      window.alert("You have cancelled the prompt.");
    }
}
function checkError_func(){
  console.error("There is an error");
}