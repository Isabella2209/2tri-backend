const furiaCS = ["FalleN", "chelo", "skullz", "yuurih", "KSCERATO"];

// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"
const indexChelo = furiaCS.indexOf("chelo");
console.log("1) Índice do jogador 'chelo':", indexChelo);
console.log('---');

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
furiaCS.splice(indexChelo, 2, "molodoy", "YEKINDAR");
console.log("2) Lista após substituição de jogadores:");
furiaCS.forEach(nome => console.log(nome));
console.log('---');

// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)
const furiaCSUpper = furiaCS.map(jogador => jogador.toUpperCase());
console.log("3) Lista em letras maiúsculas:");
furiaCSUpper.forEach(nome => console.log(nome));
console.log('---');

// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos
const furiaCSSorted = [...furiaCSUpper].sort();
console.log("4) Lista maiúscula ordenada:");
furiaCSSorted.forEach(nome => console.log(nome));
console.log('---');

// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"
const nomesComY = furiaCS.filter(nome => nome.toLowerCase().startsWith("y"));
console.log("5) Nomes da lista original que começam com 'y':");
nomesComY.forEach(nome => console.log(nome));
