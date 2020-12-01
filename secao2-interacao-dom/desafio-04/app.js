new Vue({
	el: '#desafio',
	data: {
		aplicarGirar: false,
		quadrado: 'quadrado',
		classeEx1: 'destaque',
		classeEx2: 'destaque',
		classeEx3: 'quadrado destaque',
		classeEx4: '',
		flag: false,
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		porcentagemProgresso: '0'
	},
	computed: {

	},
	watch: {
		// resultado(novo, antigo) {
		//     setTimeout(() => {
		//         this.valor = 0
		//     }, 5000)
		// }
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeEx1 = this.classeEx1 == 'destaque' ? 'encolher' : 'destaque'
			}, 500)
		},
		iniciarProgresso() {
			let contador = 0
			const temporizador = setInterval(() => {
				contador += 4
				this.porcentagemProgresso = `${contador}%`
				if(contador == 100) clearInterval(temporizador)
			}, 250)
		},
		setFlag(event) {
			if (event.target.value == "true") {
				this.flag = true
			} else if (event.target.value == "false") {
				this.flag = false
			}
		}
	}
})
