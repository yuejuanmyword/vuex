import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import {
  SET_NAME,
  SET_AGE,
  SET_HEIGHT
} from './mutation-types' // 引入常量

Vue.use(Vuex) // 显式地通过 Vue.use() 来安装 Vuex

export default new Vuex.Store({
  modules: {
    cart
  }
})
