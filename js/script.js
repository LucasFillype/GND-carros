console.log("✅ script carregado com sucesso!");

const buttonSubmit = document.getElementById("button-submit");


//Modal pop-up
const openFormButton = document.getElementById("modal-button");
const modal = document.getElementById("modal-1")


openFormButton.onclick = function (){
    modal.showModal();
}

//Transformando em o arquivo file em Foto visível pelo HTML
const inputFoto = document.getElementById("foto-carro");
const preview = document.getElementById("preview");

inputFoto.addEventListener("change", function () {
    const arquivo = this.files[0]; // pega o primeiro arquivo
    if (arquivo) {
        fotoURL = URL.createObjectURL(arquivo); // cria o link temporário
        preview.src = fotoURL; // exibe na imagem
        preview.style.display = "block"; // garante que fique visível
    }
})


function submitForm() {
    const buttonSubmit = document.getElementById("button-submit")
    let carCard = document.querySelector(".car-card")

    // Valor dos inputs
    const nome = document.getElementById("fullname").value;
    const modelo = document.getElementById("model").value;
    const ano = document.getElementById("year").value;
    const preco = document.getElementById("price").value;
    const transmissao = document.querySelector('select[name="transmission"]').value;
    const combustivel = document.querySelector('select[name="fuel"]').value;

    console.log(nome);

    //Criando o Card
    const card = document.createElement("div")
    card.classList.add("car-infos")

    //Colocando os valores reotornados nas divs
    card.innerHTML = 
        `
     <div class="foto-wrapper">
      <img class="foto" src="${fotoURL}" alt="Foto do carro">
     </div>
     <div class="car-name">${nome}</div>
     <div class="car-version">${modelo}</div>
     <div class="car-year">${ano}</div>
     <div class="car-transmission">${transmissao}</div>
     <div class="car-fuel">${combustivel}</div>
     <div class="car-price">${preco}</div>
        `


    carCard.appendChild(card);

   
    // ✅ Exibir alerta antes de redirecionar
    alert("🚘 Seu carro foi enviado com sucesso!");

    modal.close()

}
//fim da função

const voltar = document.getElementById("back-button")

voltar.onclick = function(){
    modal.close()
}



buttonSubmit.addEventListener("click", submitForm);
