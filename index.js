// document.getElementById("count-el").innerText = 5;
// Intialize the count as 0
// Listen for clicks on the increment button 
// Increment the count variable when the button is clicked 
// change the count-el n the HTML to reflect he new count
let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
function increment()
{
    
    count = count+1
    // console.log(count)
    countEl.innerText = count 

}
 function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
    
 }
