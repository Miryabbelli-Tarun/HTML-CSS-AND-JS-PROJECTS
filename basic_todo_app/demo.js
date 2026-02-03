let tasks=document.querySelector('.tasks')
let add=document.getElementById('add')
let input=document.getElementById('input')
console.log(input.value)
console.log(tasks,add,input)

add.addEventListener('click',()=>{
    if(input.value===''){
        alert('Enter task')
    }else{
        let taskelement=document.createElement('li')
        taskelement.innerText=input.value;
        tasks.append(taskelement)
    }
}
)
tasks.addEventListener('click',(event)=>{
    // event.target.style.textDecoration='line-through';
    // event.target.style.color='red';
    event.target.classList.toggle('complete')

    
})