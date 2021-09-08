import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [
            { id: 0, name: 'foo', description: 'bar', price: 33 },
            { id: 1, name: 'mario', description: 'bros', price: 34 },
            { id: 2, name: 'luigi', description: 'bros', price: 35 },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        items(state) {
            return state.items;
        },
        itemById: (state) => (id) => {
            return state.items.find(item => item.id == id)
        },
    },
});
