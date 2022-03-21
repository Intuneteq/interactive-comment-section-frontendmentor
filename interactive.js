window.onload = function () {
const deleted = document.getElementById("deleted");
const modalContainer = document.getElementById("modalContainer");
const modal = document.getElementsByClassName("modal");
const cancel = document.getElementById("cancel")

    deleted.addEventListener('click',() =>{
        modalContainer.classList.add('show');
    });

    cancel.addEventListener('click', () =>{
        modalContainer.classList.remove('show');
    });

}