// store/index.js
import Vuex from 'vuex';
import axios from 'axios';
// import direction from './direction';

export default new Vuex.Store({
    state: {
        flashDeals: [],
        newProducts: [],
        cartItems: [],
    },
    mutations: {
        SET_PRODUCTS(state, { newProducts, flashDeals }) {
            state.newProducts = newProducts;
            state.flashDeals = flashDeals;
        },
        ADD_ITEM_TO_CART(state, item) {
            state.cartItems.push(item);
        },
    },
    actions: {
        async getProducts({ commit }) {
            try {
                const res = await axios.get('https://dummyjson.com/products');
                const { products } = res.data;
                const newProducts = products.filter((el) => el.category === 'laptops');
                const flashDeals = products.slice(0, 8);
                commit('SET_PRODUCTS', { newProducts, flashDeals });
            } catch (err) {
                console.error(err);
            }
        },
        async addToCart({ commit }, product) {
            console.log('product store', product);
            commit('ADD_ITEM_TO_CART', product);
        },
    },
    getters: {
        cartItemCount: (state) => state.cartItems.length,
    },
    modules: {
        // direction,
    },
});


////////////////////////////////////////////////////////////////////////////////////////////////////////
// store/index.js
// import { createStore } from 'vuex';
// import axios from 'axios';

// export default createStore({
//     state: {
//         flashDeals: [],
//         newProducts: [],
//         cartItems: [],
//     },
//     mutations: {
//         SET_PRODUCTS(state, { newProducts, flashDeals }) {
//             state.newProducts = newProducts;
//             state.flashDeals = flashDeals;
//         },
//         ADD_ITEM_TO_CART(state, item) {
//             state.cartItems.push(item);
//         },
//     },
//     actions: {
//         async getProducts({ commit }) {
//             try {
//                 const res = await axios.get('https://dummyjson.com/products');
//                 const { products } = res.data;
//                 const newProducts = products.filter((el) => el.category === 'laptops');
//                 const flashDeals = products.slice(0, 8);
//                 commit('SET_PRODUCTS', { newProducts, flashDeals });
//             } catch (err) {
//                 console.error(err);
//             }
//         },
//         async addToCart({ commit }, product) {
//             console.log('product store', product);
//             commit('ADD_ITEM_TO_CART', product);
//         },
//     },
//     getters: {
//         cartItemCount: (state) => state.cartItems.length,
//     },
// });

