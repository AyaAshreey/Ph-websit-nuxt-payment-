<template>
    <div>
        <all-purchasr></all-purchasr>
        <!-- <miniCart />
        <usersShow :products="flashDeals" />
        <MoreProducts :products="flashDeals" /> -->

    </div>
</template>

<script setup>
// import { defineComponent, ref, computed, onMounted } from 'vue';
// import { useStore } from 'pinia';
import AllPurchasr from "~/components/purchase/AllPurchasr.vue";
// import { useProductsStore } from "@/stores/products";
// import { onMounted } from "vue";

// // Use the products store
// const productsStore = useProductsStore();
// // Destructure the state and actions from the store
// const { flashDeals, getProducts } = productsStore;

// // Fetch products on component mount
// onMounted(async () => {
//     await getProducts();
// });

</script>