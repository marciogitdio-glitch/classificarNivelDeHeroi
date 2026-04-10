///Observações, resolvi colocar para o próprio usuário colocar o nome e o exp via input, o programa em si apenas classifica seu ranking.
/// O programa é tão preciso quanto a explicação. Para ser honesto, está funcional, mas não ficou o suficiente os intervalos de ranking exigidos nos enunciados. 
///Futuramente posso estar considerando alguns níveis de transição como exp < 999 (ferro), 1000 (transição para o bronze), 1001 (bronze), 1999 (bronze), 2000 (transição para prata), 2001 (prata), 4999 (prata), 5000 (transição para ouro), 5001 (ouro), 6999 (ouro), 7000 (transição para platina), 7001 (platina), 7999 (platina), 8000 (transição para ascendente), 8001 (ascendente), 8999 (ascendente), 9000 (transição para imortal), 9001 (imortal), 9999 (imortal), 10000 (transição para radiante), >=10001 (radiante).  
/// Para todo efeito, interpretei que 0 |--- 1000 = Ferro, 1000 |--- 2000 = Bronze, 2000 |--- 5000 = Prata, 5000 |--- 7000 = Ouro, 7000 |--- 8000 = Platina, 8000 |--- 9000 = Ascendente, 9000 |--- 10000 = Imortal, >=10000 = Radiante.

/// Estrutura preparada para receber inputs, já que o node.js não aceita prompt().
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/// Solicita o nome do herói e a quantidade de XP, depois classifica o ranking com base na quantidade de XP.
rl.question("Digite o nome do herói: ", (nome) => {
  rl.question("Digite a quantidade de XP: ", (expInput) => {
    
    let exp = Number(expInput);
    let ranking = "";

    if (isNaN(exp) || exp < 0) {
      console.log("XP inválido!");
      rl.close();
      return;
    }
/// Classificação do ranking com base na quantidade de XP usando switch case. (Usar true para avaliar visa superar a funcionalidade de switch case, já que ele não aceita intervalos diretamente, mas sim expressões booleanas. )
    switch (true){
        case exp < 1000:
            ranking = "Ferro";
            break;
        case exp < 2000:
            ranking = "Bronze";
            break;
        case exp < 5000:
            ranking = "Prata";
            break;
        case exp < 7000:
            ranking = "Ouro";
            break;
        case exp < 8000:
            ranking = "Platina";
            break;
        case exp < 9000:
            ranking = "Ascendente";
            break;
        case exp < 10000:
            ranking = "Imortal";
            break;
        default:
            ranking = "Radiante";
            break;
    }
/// Exibe o resultado para o usuário.
    console.log(`O Herói de nome ${nome} está no nível ${ranking}.`);
    rl.close();
  });
});

///Sempre aberto a críticas Felipão, começando agora, a escolha do switch case foi para me dezafiar. Comecei recentemente minha faculdade de Engenharia de Software e estou ansioso para adentrar na prática, ter essa experiência de estar convivendo imergido nesse mundo de desenvolvimento de software.