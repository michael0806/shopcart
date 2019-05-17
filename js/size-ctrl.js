Vue.component('size-ctrl', {
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
            actived: null,
            activedIdx: null
        }
    },
    template: '<div class="size-container">' +
    '<div class="size-label">' +
    '                    <span class="gray-color">SIZE</span>' +
    '<span class="red-color">*</span>' +
    '<span class="black-color weight size-text" v-if="actived!==null">{{actived}}</span>' +
    '                </div>' +
    '                <div class="size-wrapper gray-color">' +
    '                    <span class="size-item" v-for="(cartItem,idx) in cartList" ' +
    '                       v-bind:class="{active:cartItem.size===actived}" ' +
    '                       v-on:click="handleClick(cartItem.size,idx)">{{cartItem.size}}</span>' +
    '                </div>' +
    '<button class="action-btn" v-on:click="addToCart">ADD TO CART</button>' +
    '</div>',
    methods: {
        /**
         * size button was clicked
         * @param size
         */
        handleClick: function (size, idx) {
            this.actived = size
            this.activedIdx = idx
        },
        /**
         * handle add to cart
         */
        addToCart: function () {
            if (this.actived === null) {
                alert('You haven\'t chosen the size yet.\n')
            } else {
                let selecedItem = this.cartList[this.activedIdx]
                !isNaN(selecedItem.count) && selecedItem.count++
            }
        }
    }
})