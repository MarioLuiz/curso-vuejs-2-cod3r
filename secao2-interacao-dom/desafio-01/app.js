new Vue({
    el: '#desafio',
    data: {
        titulo: 'Usando Vue.JS! 2',
        meuNome: 'Mario Luiz',
        minhaIdade: '28',
        link: 'http://www.google.com',
        linkHtml: '<a href="http://www.google.com">Google</a>',
        localImagem:'gatoComMascara.jpg',
    },
    methods: {
        saudacao: function () {
            this.titulo = 'Bom dia!!!'
            return this.titulo
        },
        multiplicaIdade: function () {
            return this.minhaIdade * 3 ;
        },
        numeroRandomico: function () {
            return (Math.random() * (1 - 0) + 0);
        }
    }
})