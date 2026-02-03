let increase=document.getElementById('increment')
let decrease=document.getElementById('decrement')
let save=document.getElementById('save')
let result=document.getElementById('result')
let savedhistory=document.getElementById('savedhistory')
let btns=document.querySelector('.btns')


let count=0
// increase.addEventListener('click',()=>{
//     count+=1;
//     result.innerText=count;
// });
// decrease.addEventListener('click',()=>{
//     count-=1;
//     result.innerText=count
// })
// save.addEventListener('click',()=>{
//     let data=count+'-';
//     savedhistory.innerText+=data;
// })

// ---------------second way----------------------
btns.addEventListener('click',(e)=>{
    if(e.target.innerText==='increase'){
        count+=1;
        result.innerText=count;
    }else if(e.target.innerText==='decrease'){
        count-=1;
        result.innerText=count;
    }else if(e.target.innerText==='save'){
        let data=count+'-';
        savedhistory.innerText+=data;
    }
})
