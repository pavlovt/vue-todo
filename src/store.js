import Vue from "vue";
import Vuex from "vuex";
// pathify config
import pathify from './pathify'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    increment: ctx => ctx.commit('increment'),
    decrement: ctx => ctx.commit('decrement')
  },
  plugins: [ pathify.plugin ],
});
