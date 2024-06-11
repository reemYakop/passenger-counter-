// document.getElementById("count-el").innerText = 5;
// Intialize the count as 0
// Listen for clicks on the increment button 
// Increment the count variable when the button is clicked 
// change the count-el n the HTML to reflect he new count
let count = 0
function increment()
{
    
    document.getElementById("count-el").innerText = count 
    count = count+1
    // console.log(count)
}
increment()