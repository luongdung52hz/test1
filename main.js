const inputBox = document.querySelector('.input-add')
const listItem = document.querySelector('.list-item')
const btnAdd = document.querySelector('.btn-add')

const maxItem = 10;

btnAdd.addEventListener('click',evenInput)
inputBox.addEventListener('keydown',(e)=>{
    if (e.key ==='Enter'){
        evenInput()
    }
})
function evenInput() {
    if (inputBox.value === ''){
        alert("You must write something!!! ")
    }
    else {
        if(listItem.children.length > maxItem){
           alert('Max list now, remove those item complete!!!')
            return;
        }
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;    
        listItem.appendChild(li);
        
        li.classList.add('item','hoho');
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        saveData()
    }
    inputBox.value = "";  
    inputBox.focus(); 
    console.log( listItem.innerHTML)
   
}

listItem.addEventListener('click',(e)=>{
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('item-checked');
        console.log(e.target)
        saveData()
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        console.log(e.target.parentElement);
        console.log(e.target.value)
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem('data',listItem.innerHTML);
}

function getData(){
    listItem.innerHTML = localStorage.getItem('data')
}

getData()