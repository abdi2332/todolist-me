const output = document.getElementById("lists");
const btn = document.getElementById("button");
btn.addEventListener("click", add);

function add() {
    const input = document.getElementById("input").value;
    const li = document.createElement('li');
    li.innerText = input;
    const button=document.createElement('button')
    button.innerText="X"
    button.classList.add("del");
    output.appendChild(li);
    li.appendChild(button)
}
output.addEventListener('click',)