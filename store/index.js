// store/index.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useStore = defineStore('main', () => {
    // State
    const flashDeals = ref([]);
    const newProducts = ref([]);
    const cartItems = ref([]);

    // Mutations (in Pinia, mutations are directly made inside actions)
    function setProducts({ newProductsList, flashDealsList }) {
        newProducts.value = newProductsList;
        flashDeals.value = flashDealsList;
    }

    function addItemToCart(item) {
        cartItems.value.push(item);
    }

    // Actions
    async function getProducts() {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            const { products } = res.data;
            const newProductsList = products.filter(el => el.category === 'laptops');
            const flashDealsList = products.slice(0, 8);
            setProducts({ newProductsList, flashDealsList });
        } catch (err) {
            console.error(err);
        }
    }

    async function addToCart(product) {
        console.log('product store', product);
        addItemToCart(product);
    }

    // Getters
    const cartItemCount = computed(() => cartItems.value.length);

    return {
        flashDeals,
        newProducts,
        cartItems,
        getProducts,
        addToCart,
        cartItemCount,
    };
});
