// document.getElementById("count-el").innerText = 5;
// Intialize the count as 0
// Listen for clicks on the increment button 
// Increment the count variable when the button is clicked 
// change the count-el n the HTML to reflect he new count
let count = 0
function increment()
{
    
    count = count+1
    // console.log(count)
    document.getElementById("count-el").innerText = count 

}
 function save(){
    console.log(count)
 }