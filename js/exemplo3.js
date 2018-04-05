new Vue({
	el: '#app',
    data:{
        title: 'Título da aplicação',
        link: 'http://google.com',
        linkCompleto: '<a href="http://google.com">Google</a>'
    },
    methods: {
        sayHello: function(){
            this.title = 'Hey! The title has changed';
            return this.title;
        }
    }
});