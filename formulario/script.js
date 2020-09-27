const fields = document.querySelectorAll("[required]")

console.log(fields)


for( field of fields ){
    field.addEventListener("invalid", event => {
        console.log("campo invalido")
    })
}



document.querySelector('form')
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    //não vai enviar o formulario
    event.preventDefault()
})