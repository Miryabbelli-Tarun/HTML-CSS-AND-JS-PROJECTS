const btnEl=document.getElementById("btn");
const resultEl=document.getElementById("result");
const birthDayEl=document.getElementById("birthday");


function calculateAge(){
    let birthDayValue=birthDayEl.value;
    if(birthDayValue===""){
        alert("Enter BirthDay")
    }else{
        let age=getAge(birthDayValue);
        let months=getMonths(birthDayValue);
        let days=getDays(birthDayValue);
        resultEl.innerText=`your are ${age} years ${months} months and ${days} days old`;
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

function getMonths(birthDayValue){
    let currentDate=new Date();
    let birthDate=new Date(birthDayValue);

    let currentMonth=currentDate.getMonth();
    let birthMonth=birthDate.getMonth();

    let currentDays=currentDate.getDate();
    let birthDays=birthDate.getDate();

    let MonthDiff=currentMonth-birthMonth;
    if(MonthDiff<0){
        MonthDiff+=12;
    }
    if(currentDays<birthDays){
        MonthDiff--;
        if(MonthDiff<0) {
             MonthDiff+=12;
        }
    }
    return MonthDiff;
}

//get days
function getDays(birthDayValue){
    let currentDate=new Date();
    let birthDate=new Date(birthDayValue);

    let currentDays=currentDate.getDate();
    let birthDays=birthDate.getDate();

    let prevMonthdays=new Date(currentDate.getFullYear(),currentDate.getMonth(),0);


    let daysDiff=currentDays-birthDays;
    if(daysDiff<0){
        daysDiff+=prevMonthdays.getDate();
    }
    return daysDiff;

}

btnEl.addEventListener("click",calculateAge);
