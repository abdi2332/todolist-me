const output = document.getElementById("lists");
const btn = document.getElementById("button");
btn.addEventListener("click", add);

function add() {
    const input = document.getElementById("input").value;
    const li = document.createElement('li');
    li.innerText = input;
    output.appendChild(li);
}