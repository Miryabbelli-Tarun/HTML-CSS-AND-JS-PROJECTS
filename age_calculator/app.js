const btnEl=document.getElementById("btn");
const resultEl=document.getElementById("result");
const birthDayEl=document.getElementById("birthday");


function calculateAge(){
    let birthDayValue=birthDayEl.value;
    if(birthDayValue===""){
        alert("Enter BirthDay")
    }else{
        let age=getAge(birthDayValue);
        resultEl.innerText=`your are ${age} years old`;
    }
}
function getAge(birthDayValue){
    let currentDate=new Date();
    let birthDate=new Date(birthDayValue);
    let age=currentDate.getFullYear()-birthDate.getFullYear();
    let month=currentDate.getMonth()-birthDate.getMonth();

    if(month<0 || (month===0 && currentDate.getDate()<birthDate.getDate())){
        age--;
    }
    return age;
}


btnEl.addEventListener("click",calculateAge);
