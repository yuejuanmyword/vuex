<template>
  <div >
      <cart></cart>
      <product></product>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<script>
import cart from '../components/cart.vue'
import product from '../components/product.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'dcdc'
    }
  },
  components: {
    cart,
    product
  }
}
</script>
