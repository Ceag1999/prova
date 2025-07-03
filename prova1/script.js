function cadastro() {
    let mostraHTML = document.getElementById("mostraHTML");
    let time = prompt("digite o nome do seu time");

    let atleta = prompt("escreva o nome do primeiro atleta");
    let idade = Number(window.prompt("digite sua idade"));

    let atleta2 = prompt("escreva o nome do segundo atleta");
    let idade2 = Number(window.prompt("digite sua idade"));

    let atleta3 = prompt("escreva o nome do terceiro atleta");
    let idade3 = Number(window.prompt("digite sua idade"));

    let media;

    mostraHTML.innerHTML += `<p><b>${time}</b></p>`;
    mostraHTML.innerHTML += `<p> primeiro atleta {c}: ${atleta}, ${idade}</p>`;
    mostraHTML.innerHTML += `<p> segundo atleta : ${atleta2}, ${idade2}</p>`;
    mostraHTML.innerHTML += `<p> terceiro atleta : ${atleta3}, ${idade3}</p>`;

    media = (idade + idade2 + idade3 ) / 3;
    if (media > 15) {
        alert("o seu time passou da idade. faça outro time.")
    }
}
