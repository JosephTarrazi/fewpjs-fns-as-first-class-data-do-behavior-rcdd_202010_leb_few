/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
 if (parseInt(time)<12){
   return `Good Morning`;
 } 
 else if (12<parseInt(time)<17){
   return `Good Afternoon`;
 }
 else if (17<parseInt(time)<24){
   return `Good Evening`;
 }
 else{
   return;
 }
 
}
/* Write your implementation of displayMessage() */
function displayMessage(TEST){
 let a= document.getElementById("greeting");
  a.innerHTML="TEST";
  return; 
}
addEventListener('click', greet);
console.log(greet());
addEventListener('click', displayMessage('TEST'));