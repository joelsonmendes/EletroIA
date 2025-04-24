function enviarPergunta() {
    let pergunta = document.getElementById("pergunta").value.toLowerCase();
    let resposta = "";

    if (pergunta.includes("luz") && pergunta.includes("nao acende")) {
        resposta = "Verifique se a lâmpada está queimada ou se há disjuntor desarmado.";
    } else if (pergunta.includes("tomada") && pergunta.includes("sem energia")) {
        resposta = "Pode ser um fio solto ou disjuntor desligado. Verifique com um multímetro.";
    } else if (pergunta.includes("disjuntor") && pergunta.includes("desarma")) {
        resposta = "Pode haver curto-circuito ou sobrecarga. Revise os circuitos ligados.";
    } else {
        resposta = "Desculpe, não entendi o problema. Tente descrever de outra forma.";
    }

    document.getElementById("resposta").innerText = resposta;
}
