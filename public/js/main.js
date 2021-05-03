document.querySelector(".submit").addEventListener("keyup", function(e) {
    if (e.keycode == 14) {
        myFunction();
    }
})

function myFunction() {

    // Gets input value and creates button
    let newItem = document.getElementById("todo").value;
    let button = document.createElement('button');
    document.getElementById("todo").value = "";

    // Assigns button properties
    button.type = 'button';
    button.innerHTML = "Delete";
    button.classList.add("myBtn");
    button.style.marginRight = "10px"
    button.style.marginLeft = "10px"

    // Adds the complete to do  item
    let newLi = document.createElement("li");
    let newElem = document.getElementById("list");
    newLi.innerHTML = newItem;
    newLi.appendChild(button);
    newElem.appendChild(newLi);

    document.querySelectorAll(".myBtn").forEach(item => item.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    }));
}