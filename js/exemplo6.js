new Vue({
	el: '#app',
    data:{
        counter: 0,
        secondCounter: 0
    },
    // O Computed armazena dados para serem usados em sua página assim como o data.
    // A diferença é que aqui os dados são funções, e não dados estáticos.
    computed: {
        output: function(){
            console.log('Computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    methods: {
        result: function(){
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});