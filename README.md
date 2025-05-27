const furiaCS = ["FalleN", "chelo", "skullz", "yuurih", "KSCERATO"];

// 1) Índice do jogador "chelo" e imprimir o nome
const indexChelo = furiaCS.indexOf("chelo");
console.log(furiaCS[indexChelo]); // chelo
console.log('---');

// 2) Substituir "chelo" e "skullz" por "molodoy" e "YEKINDAR"
furiaCS.splice(indexChelo, 2, "molodoy", "YEKINDAR");
furiaCS.forEach(nome => console.log(nome));
console.log('---');

// 3) Criar lista com nomes maiúsculos usando .map()
const furiaCSUpper = furiaCS.map(jogador => jogador.toUpperCase());
furiaCSUpper.forEach(nome => console.log(nome));
console.log('---');

// 4) Ordenar a lista maiúscula usando .sort()
furiaCSUpper.sort();
furiaCSUpper.forEach(nome => console.log(nome));
console.log('---');

// 5) Filtrar nomes que começam com "y"
const nomesComY = furiaCS.filter(nome => nome.toLowerCase().startsWith("y"));
nomesComY.forEach(nome => console.log(nome));
