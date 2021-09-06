import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [
            { name: 'foo', description: 'bar', price: 33 },
            { name: 'mario', description: 'bros', price: 34 },
            { name: 'luigi', description: 'bros', price: 35 },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        items(state) {
            return state.items;
        }
    },
});
