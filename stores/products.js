import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import axios from 'axios';

export const useProductsStore = defineStore('productsModule', () => {
    // Reactive state
    const flashDeals = ref([]);
    const newProducts = ref([]);
    const cartItems = ref([]);

    // Actions
    const getProducts = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            newProducts.value = res.data.products.filter((el) => el.category === 'laptops');
            flashDeals.value = res.data.products.slice(0, 8);
        } catch (err) {
            console.log(err);
        }
    };

    const addItemToStore = (item) => {
        // Mutate the state to add the item
        cartItems.value.push(item);
        console.log(cartItems.value);
    };

    return {
        flashDeals,
        newProducts,
        cartItems,
        getProducts,
        addItemToStore,
    };
});
