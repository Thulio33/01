function enviarFormulario(event){
    event.preventDefault();
    const nome =document.getElementById('nomeContato').value;
    const email=document.getElementById('emailContato').value; 
    const telefone=document.getElementById('telefoneContato').value;

    const mensagem = `
    Dados enviados com Sucesso!<br>
    Nome: ${nome}<br>
    Email: ${email}</br>
    telefone: ${telefone}
    `;

    document.getElementById('mensagem-confirmacao').innerHTML = mensagem;
}

function mostrarFatoGato() {
    console.log('chegou na funçao')
    fetch("https://catfact.ninja/fact")
    .then(resposta => resposta.json())
    .then(dados =>{
         console.log('chegou na funçao',dados)
        document.getElementById('fato-gato').innerText = dados.fact;
     } )
     .catch(erro => console.error('erro ao buscar fato do gato:',erro));
}

function mostrarImagemCachorro() {
    console.log('chegou na funçao')
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resposta => resposta.json())
    .then(dados => {
         console.log('chegou na funçao',dados)
        document.getElementById('imagem-cachorro').src = dados.message;
    })
    .catch(erro => console.error('erro ao buscar imagem do cachorro:', erro));
}

mostrarImagemCachorro()
