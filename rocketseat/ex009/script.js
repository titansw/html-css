const div = document.querySelector(".invisible")

div.style.backgroundColor = "ffffff"
div.style.display = "none"

function enviar() {
    div.style.display = "inline"
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key ==='Escape'
    if(isEscKey) div.style.display = "none"
})
