
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"
function btnCriptografar() {
    const textoOriginal = document.getElementsByClassName("text_input")[0].value;
    const textoCriptografado = criptografar(textoOriginal);
    document.getElementsByClassName("mensagem")[0].value = textoCriptografado;
}

function criptografar(text_input){
    const resultado = text_input
    .replaceAll('e','enter')
    .replaceAll('i','imes')
    .replaceAll('a','ai')
    .replaceAll('o','ober')
    .replaceAll('u','ufat');

    return resultado;
}

// Descriptografando o texto resultado

function btnDescriptografar(){
    const textoCriptografado = document.getElementsByClassName("text_input")[0].value;
    const textoDescriptografado = descriptografar(textoCriptografado);
    document.getElementsByClassName("mensagem")[0].value = textoDescriptografado
}

function descriptografar(text_input){
    const resultado = text_input
    .replaceAll('ai','a')
    .replaceAll('imes','i')
    .replaceAll('enter','e')
    .replaceAll('ober','o')
    .replaceAll('ufat','u');
    return resultado;
}
// funcao para copiar o texto Criptografado
function botao_copiar() {
    const texto_mensagem = document.getElementsByClassName("mensagem")[0].value;
    navigator.clipboard.writeText(texto_mensagem)
        .then(() => alert("Texto copiado com sucesso!"))
        .catch(err => console.error("Erro ao copiar o texto:", err));
}
// funcao para limpar ambos textarea
function btnLimpar() {
    var textAreas = document.querySelectorAll('.text_input, .mensagem');
    textAreas.forEach(function(textArea) {
        textArea.value = '';
    });
}
