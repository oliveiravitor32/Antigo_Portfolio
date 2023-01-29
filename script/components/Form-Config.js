
const form = document.querySelector("#Contatos")

const handleSubmit = (event) => {
    event.preventDefault();
    
    const Name = document.querySelector("#Name")
    const Email = document.querySelector("#Email")
    const Message = document.querySelector("#Message")
    const FullDate = new Date().toString()
    // const SimpleDate = new Date().toLocaleString("pt-BR") 

    fetch("https://api.sheetmonkey.io/form/tenEHQVjcMESDiqFtviLu9", {

        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Name: Name.value, Email: Email.value, Message: Message.value, Date: FullDate})
    }).then( () => {
        Name.value = "";
        Email.value = "";
        Message.value = "";

        alert("Enviado com sucesso!")
    })
}

form.addEventListener("submit", handleSubmit)