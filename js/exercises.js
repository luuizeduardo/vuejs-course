new Vue({
	el: '#app',
    data:{
  	    YOUR_NAME: 'Luiz Eduardo Martins',
  	    YOUR_AGE: '24',
        IMAGE: 'https://thumbor.forbes.com/thumbor/100x0/smart/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2017%2F12%2Fflying-galaxy-in-cluster.jpg'
    },
    methods: {
        randomNumber: function(){
            return Math.random();
        }
    }
});