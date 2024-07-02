<template>
  <div>
    <UpperSection />
    <InfoPart />
    <swiperSimilarproducts :products="flashDeals" />
    <MoreProducts :products="flashDeals" />
  </div>
</template>

<script setup>
// import { defineComponent, ref, computed, onMounted } from 'vue';
// import { useStore } from 'pinia';
import UpperSection from "~/components/home-page/UpperSection.vue";
import InfoPart from "~/components/home-page/InfoPart.vue";
import swiperSimilarproducts from "~/components/home-page/swiperSimilarproducts.vue";
import MoreProducts from "~/components/home-page/MoreProducts.vue";
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";

// Use the products store
const productsStore = useProductsStore();
// Destructure the state and actions from the store
const { flashDeals, getProducts } = productsStore;

// Fetch products on component mount
onMounted(async () => {
  await getProducts();
});

</script>
