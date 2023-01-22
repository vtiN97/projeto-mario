/* 

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.
    PASSO 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
    PASSO 2 - dar um jeito de indentificar quando o usuário clicar no botão.
    PASSO 3 - dar um jeito de pegar o elemento da modal no JS.
    PASSO 4 - abrir a modal na tela.

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
    PASSO 1 - dar um jeito de pegar o elemento de fechar modal usando o JS.
    PASSO 2 - dar uma jeito de identificar quando o usuário clicar no X.
    PASSO 3 - fechar a modal.

*/

const botaoTrailer = document.querySelector(".botao-para-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal")
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const linkDoVideo = video.src

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")   
})









