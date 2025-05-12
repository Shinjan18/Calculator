let input = document.querySelector('#inputBox');
let buttons = document.querySelectorAll('button');

//for storing the results
let string = "";
//creating array for the buttons
let arr = Array.from(buttons);

arr.forEach((button)=>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            //for deleting the number by one, we use substring for that string and goes till it's length
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})