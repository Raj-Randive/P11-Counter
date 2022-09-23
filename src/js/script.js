// **********************************************************************************************************************
// Initial value is zero
let count = 0;

const counter = document.getElementById("count");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons); --> We can see that its an array of buttons...!!

buttons.forEach(b => {
    // console.log(item);  --> Points to each items of all buttons selected.

    b.addEventListener("click", (e)=>{
        const clickedItem = e.currentTarget.classList;

        if (clickedItem.contains("minus")) {
            count --;
        }
        else if(clickedItem.contains("plus")){
            count ++;
        }
        else{
            count = 0;
        }

        if (count > 0) { counter.style.color = "green"; }
        if (count < 0) { counter.style.color = "red"; }
        if (count === 0) { counter.style.color = "black"; }

        counter.textContent = count;

    });



});
