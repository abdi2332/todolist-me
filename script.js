const output = document.getElementById("lists");
const btn = document.getElementById("button");
btn.addEventListener("click", add);

function add() {
    const input = document.getElementById("input").value;
    const li = document.createElement('li');
    const text=document.createElement('span')
    text.textContent = input;
    li.append(text)
    output.appendChild(li)  
    //  appending lists to ul


    const checkbox = document.createElement('input');
    checkbox.type = "checkbox"; 
    checkbox.classList.add("check") // Setting the type of input to checkbox
    li.appendChild(checkbox);
    


    const button=document.createElement('button')
    button.innerText="X"
    button.classList.add("del");
    li.appendChild(button)


    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.type = 'button';
    editBtn.classList.add("editbtn")
    li.appendChild(editBtn);
    editBtn.addEventListener('click', editTask);


   
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.type = 'button';
  saveBtn.classList.add('hide');
  li.appendChild(saveBtn);
  saveBtn.addEventListener('click', saveEdit);

    
  saveData()
    document.getElementById("input").value = "";
    

}

output.addEventListener('click', function(e){
    if (event.target.classList.contains("del")) {
        event.target.parentElement.remove();
    }
    else if (event.target.classList.contains("check")) {
        const listItem = event.target.parentElement;
        if (event.target.checked) {
            listItem.classList.add("checked");
           
        } else {
            listItem.classList.remove("checked");
            
        }
       
    }
    saveData()
})
function editTask(event) {
    const item = event.target.parentElement;
    const text = item.children[0]; // Assuming the text is the first child element
    text.setAttribute('contenteditable',true);
    event.target.classList.add('hide');
    event.target.nextElementSibling.classList.remove('hide');
    saveData()
}


function saveEdit(event) {
    const item = event.target.parentElement;
    const text = item.children[0];
    text.removeAttribute('contenteditable');
    this.classList.add('hide');
    this.previousElementSibling.classList.remove('hide');
    saveData()
  }
  function saveData(){
    localStorage.setItem("data", output.innerHTML)
  }
  // Add this code at the beginning of your script
window.addEventListener('load', function() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      output.innerHTML = savedData;
    }
  });
  