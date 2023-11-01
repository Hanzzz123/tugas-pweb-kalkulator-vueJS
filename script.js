const {createApp} = Vue

createApp({
    data() {
        return {
            display:''
        }
    },
    methods: {
        appendToDisplay(num) {
            this.display += num;
        },
        evaluate(){
            this.display = eval(this.display)
        },
        Clear(){
            this.display = ''
        },
        Delete(){
            this.display = this.display.toString().slice(0, -1)
        }
    }
}).mount('#result')