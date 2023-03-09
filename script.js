const localStorageKey = 'to-do-list'
const chk = document.getElementById('chk')


//função para adicionar tarefas no localStorage 

function newTask(){ 
    let input = document.getElementById('input-new-task')

    if(!input.value){
        alert('Digite algo para inserir em sua lista')
    }

    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }

}

//função para mostrar as tarefas na lista

function showValues(){ 

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('task-list')
    list.innerHTML = ''
    for(let i=0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id='button-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg></button></li>`
    }
}

//função para remover tarefas concluidas

function removeItem(data){ 
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

//modo escuro

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
