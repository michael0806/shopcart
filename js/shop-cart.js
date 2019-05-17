var app = new Vue({
    el: '#app',
    data() {
        return {
            cartList: [
                {
                    size: 'S',
                    count: 0
                },
                {
                    size: 'M',
                    count: 0
                },
                {
                    size: 'L',
                    count: 0
                }
            ]
        }
    },
    methods: {
        handleClick() {
            // closeMiniCart when miniCart is open
            this.$refs.miniCart && this.$refs.miniCart.closeMiniCart()
        }
    }
})
