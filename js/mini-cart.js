var DESKTOP_MAX_WIDTH = 1200
Vue.component('mini-cart', {
    props: {
        cartList: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data: function () {
        return {
            isActived: false
        }
    },
    template: '' +
    '    <header class="cart-wrapper clearfix"v-bind:class="{active:isActived === true}">' +
    '     <div v-on="{mouseleave:handleMouseleave}" >' +
    '        <div class="my-cart pull-right" v-on="{mouseover:handleMouseover,click:handleClick}">' +
    '            <span class="hidden-xs">My Cart</span>' +
    '            <img src="./img/cart.png" class="hidden-lg hidden-md hidden-sm"/> ({{total}})' +
    '        </div>' +
    '        <div class="cart-info" v-if="isActived === true">' +
    '            <div class="goods-item clearfix" v-for="cartItem in cartList" v-if="cartItem.count > 0">' +
    '                <img class="pull-left" src="./img/classic-tee.jpg">' +
    '                <div class="pull-left goods-item-details black-color">' +
    '                    <p class="item-details-info weight">Classic Tee</p>' +
    '                    <p class="item-details-info">' +
    '                        <span>{{cartItem.count}}</span> x' +
    '                        <b class="weight">$75.00</b>' +
    '                    </p>' +
    '                    <p class="item-details-info">Size: {{cartItem.size}}</p>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '</div>' +
    '    </header>',
    methods: {
        handleMouseover: function () {
            if (this.isDesktop()) {
                this.openMiniCart()
            }
        },
        handleMouseleave: function () {
            if (this.isDesktop()) {
                this.closeMiniCart()
            }
        },
        handleClick: function () {
            if (!this.isDesktop()) {
                this.toggleMiniCart()
            }
        },
        openMiniCart: function () {
            if (this.total > 0) {
                this.isActived = true
            }
        },
        closeMiniCart: function () {
            this.isActived = false
        },
        toggleMiniCart: function () {
            if (this.total > 0) {
                this.isActived = !this.isActived
            }
        },
        isDesktop: function () {
            var width = document.body.clientWidth
            return width >= DESKTOP_MAX_WIDTH
        }
    },
    computed: {
        total: function () {
            var total = 0
            for (var i = 0, count = this.cartList.length; i < count; i++) {
                var cartItem = this.cartList[i]
                total += cartItem.count
            }
            return total
        }
    }
})