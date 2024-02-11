const output = document.getElementById("lists");
const btn = document.getElementById("button");
btn.addEventListener("click", add);

function add() {
    const input = document.getElementById("input").value;
    const li = document.createElement('li');
    li.textContent = input;
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

})
