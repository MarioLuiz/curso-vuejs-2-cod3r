new Vue({
	el: '#desafio',
	data: {
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		flag: false,
		pessoas: [
			{ nome: 'Ana', idade: 26, peso: 59 },
			{ nome: 'Mario', idade: 28, peso: 115 },
			{ nome: 'Luiz', idade: 30, peso: 90 },
			{ nome: 'Revihery', idade: 32, peso: 60 },
			{ nome: 'Beatrice', idade: 5, peso: 15 },
		]
	}
});
