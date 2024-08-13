const form = document.getElementById('form-campo')

form.addEventListener('submit',function(evento){
    evento.preventDefault()

    const formA = parseFloat(document.getElementById('campoA').value);
    const formB = parseFloat(document.getElementById('campoB').value);
    const message= document.getElementById('messagem')

    if(formA < formB){
        message.textContent= " Resultado com sucesso, o numero B é maior que o A";
        message.style.color = "green";
    }

    else{
        message.textContent= " Erro: O numero B deve ser maior que o A";
        message.style.color = "red";
    }


})

