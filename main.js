const app = Vue.createApp({
    data(){
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id){
            console.log('this is the cart function ')
            this.cart.push(id);
        }
    }
})
