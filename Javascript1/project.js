let counter=0;
const value = document.querySelector(".value");
const btnincrease=document.querySelector(".Increase");
const btnreset=document.querySelector(".reset");
const btndecrease=document.querySelector(".Decrease");
const btns =document.querySelectorAll(".btn");

 btnincrease.addEventListener("click",increase)
 function increase(event){
    event.preventDefault();
     counter++;
    value.textContent=counter;
    if(value.textContent>=0)
        value.style.color='black';

 }
 btndecrease.addEventListener("click",Decrease)
 function Decrease(event){
    event.preventDefault();
     counter--;
    value.textContent=counter;
    if (value.textContent<0)
      value.style.color='red';  
 }
 btnreset.addEventListener("click",reset)
 function reset(event){
     counter=0;
     value.textContent=counter;
     if(value.textContent>=0)
     value.style.color='black';
 }