new Vue({
    el:'#app',
    data:{
        pressure:0,
        explode:false
    },
    methods:{
        addPressure: function(){
            this.pressure += 10;
            if(this.pressure>=100){
                this.explode = true;
            }

        },
        restart: function(){
            this.pressure = 0
            this.explode = false
        }
    }
})