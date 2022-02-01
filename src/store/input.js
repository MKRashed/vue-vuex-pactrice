
import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        count: 0,
        colorCode:'red',
      }
    },

    mutations: {

      increment (state) {
        state.count++
      },

      colorCode(state, newValue){
        return state.colorCode = newValue;
      },

    },

    actions: {
      colorCode({commit},newValue){
        commit('colorCode', newValue)
      },
    },

    modules: {
      post: require('./modules/post').default,
    }
  })
  
export default store;