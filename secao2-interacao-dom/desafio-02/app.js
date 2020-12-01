new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta() {
            alert("Você clicou em mim, Tuts Tuts")
        },
        armazenaValor(event) {
            this.valor = event.target.value
        },
        armazenaValorExibeComEnter(event) {
            this.valor = event.target.value
        },
    }
})