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
    // O watch fica observando mudanças na propridade que definirmos. Esta propriedade 
    // deve estar dentro do data. Recomendado usar quando precisamos que algo aconteça
    // de forma reativa.
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function(){
            console.log('Method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});