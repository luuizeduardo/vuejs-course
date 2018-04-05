new Vue({
	el: '#app',
    data:{
        counter: 0,
        counterByParam: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(){
            this.counter++;
        },
        increaseByParam: function(step){
            this.counterByParam += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(){
            alert('Alert!');
        }
    }
});