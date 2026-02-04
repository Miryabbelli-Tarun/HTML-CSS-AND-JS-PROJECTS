let input=document.getElementById('todo-input')
let add=document.getElementById('add-btn')
let list=document.getElementById('todo-list')
let edit=document.querySelector('.edit')

add.addEventListener('click',()=>{
    let inputValue=input.value.trim();
    if(inputValue==='')return
    let li=document.createElement('li')
    li.innerHTML=`<span>${inputValue}</span>
                  <button class="edit">✏️</button>
                  <button class="delete">❌</button>`
    list.append(li);
    savetodos()
    input.value='';
});


list.addEventListener('click',(e)=>{
    if(e.target.tagName==='SPAN'){      
        e.target.classList.toggle('completed')
        savetodos()
    }
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
        savetodos()
    }
    if(e.target.classList.contains('edit')){
        let editbtn=e.target
        let li=editbtn.parentElement
        let span=li.getElementsByTagName('span')[0]
        if(editbtn.innerText==="💾"){
            span.contentEditable="false"
            editbtn.innerText="✏️"
            savetodos()
            return
        }
        span.contentEditable = "true";
        span.focus();
        editbtn.innerText="💾"
        
    
        
    }

})





function savetodos(){
    let todos=[]
    document.querySelectorAll('li').forEach((li)=>{
        todos.push({inputValue:li.querySelector('span').innerText,
        completed:li.querySelector('span').classList.contains('completed')})      
    })
    // console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))
}


function loadtodos(){
    let savedtodos=JSON.parse(localStorage.getItem('todos')) || []
    // console.log(savedtodos)
    savedtodos.forEach((todo)=>{
        let li=document.createElement('li')
        li.innerHTML=`<span class=${todo.completed ? "completed":""}>${todo.inputValue}</span>
                    <button class="edit">✏️</button>
                    <button class="delete">❌</button>`
        list.append(li);
    })
}
loadtodos();