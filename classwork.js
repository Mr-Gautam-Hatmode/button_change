let input1El=document.getElementById("input1");
let input2El=document.getElementById("input2");
let input3El=document.getElementById("input3");
let input4El=document.getElementById("input4");
let input5El=document.getElementById("input5");
let input6El=document.getElementById("input6");
let customBtnEl=document.getElementById("customBtn");

function onApply()
{
let input1ElVal=input1El.value;  
let input2ElVal=input2El.value;
let input3ElVal=input3El.value;
let input4ElVal=input4El.value;
let input5ElVal=input5El.value;
let input6ElVal=input6El.value;

customBtnEl.style.backgroundColor=input1ElVal;

customBtnEl.style.color=input2ElVal;

customBtnEl.style.fontSize=input3ElVal;

customBtnEl.style.fontWeight=input4ElVal;

customBtnEl.style.padding=input5ElVal;

customBtnEl.style.borderRadius=input6ElVal;
}