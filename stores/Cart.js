import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', () => {
    // state
    const cartItems = ref([]);

    // actions
    const addItem = (item) => {
        cartItems.value.push(item);
        console.log(cartItems.value);
    };

    return {
        cartItems,
        addItem,
    };
});
