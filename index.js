for(i=0; i<10; i++) {

	let vitorias = Math.floor(Math.random()*110);
	let derrotas = Math.floor(Math.random()*110);

	let saldoVitorias = calcularSaldoRanqueada(vitorias,derrotas);
	let nivel;

	if (vitorias<10) {
		nivel = "Ferro";
	} else if (vitorias<20) {
		nivel = "Bronze";
	} else if (vitorias<50) {
		nivel = "Prata";
	} else if (vitorias<80) {
		nivel = "Ouro";
	} else if (vitorias<90) {
		nivel = "Diamante";
	} else if (vitorias<100) {
		nivel = "Lendário";
	} else {
		nivel = "Imortal";
	}

	console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
	console.log(`V: ${vitorias} D: ${derrotas}`)
	console.log("------------------------------------------------------------------");
}

function calcularSaldoRanqueada(vitorias, derrotas) {
	return vitorias-derrotas;
}

