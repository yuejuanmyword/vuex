// study模块
const state = {
  count: 0,
  str: null,
  arr: [],
  form: {
    name: '默认名字'
  }
}
// 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：划重点，第三个参数！
const getters = {
  total (state, getter, rootState) {
    return state.count + rootState.num
  },
  count: state => state.count
}
const mutations = {
}
// 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
const actions = {
  sum({rootState}) {
    rootState.num += 10
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
