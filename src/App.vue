<template>
  <header>
    <the-header :cartList="cartList" @hanlde-delete-cart="hanldeDelete"
      @hanlde-up-or-down-amount-cart="hanldeUpOrDownAmount" />
  </header>
  <main class="container">
    <product-list @hanlde-buy="hanldeBuy" />
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    ProductList,
  },
  data() {
    return {
      cartList: [],
    }
  },
  methods: {
    hanldeBuy(productItem) {
      console.log(productItem);
      const index = this.cartList.findIndex(cart => cart.id === productItem.id);
      if (index !== -1) {
        //Tìm thấy productItem trong cartItem
        this.cartList[index].amount += 1;
      } else {
        // Ko tìm thấy productiTem trong cartList
        const newProductItem = { ...productItem, amount: 1 };
        this.cartList = [...this.cartList, newProductItem];
      }
      // this.cartList.push(productItem);
    },
    hanldeDelete(cart) {
      this.cartList = this.cartList.filter((cartItem) => cartItem.id !== cart.id)
    },
    hanldeUpOrDownAmount(params) {
      const { status, cart } = params;
      const index = this.cartList.findIndex((cartItem) => cartItem.id === cart.id);
      if (index !== -1) {
        if (status) {
          //Tăng
          if (this.cartList[index].amount < this.cartList[index].quantityInStock) {
            this.cartList[index].amount += 1;
          } else {
            alert("Không thể tăng nữa");
          }
        } else {
          //Giảm
          if (this.cartList[index].amount > 1) {
            this.cartList[index].amount -= 1;
          } else {
            alert("Không thể giảm nữa");
          }
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
