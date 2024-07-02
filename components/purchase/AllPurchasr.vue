<template>
    <div class="mx-16">
        <v-container>
            <v-row>
                <v-col cols="7">
                    <div class=" mb-16"
                        style="background-color: var(--btnColor); padding: 15px 30px; border-radius: 5px; ">
                        <p style="color: white; font-size: 20px;">اتمام الشراء </p>
                    </div>

                    <div class="d-flex align-center " style="width:1069px ; gap: 12px;">
                        <p style="font-size: 32px; font-weight: 700;">عربة التسوق</p>
                        <p class="text-blue-grey-lighten-2 ">(4 منتج )</p>
                    </div>

                    <miniCart />
                    <miniCart />
                    <miniCart />

                </v-col>
                <!-- =================================== -->
                <v-col cols="1">
                    <div style="border-right:2px solid #C5C5C5; height: 1120px; margin-right: 45px"></div>
                </v-col>
                <!-- =================================== -->
                <v-col cols="4">
                    <div class=" mb-4"
                        style="background-color:rgba(254, 174, 111, 0.23); padding: 15px 30px; border-radius: 5px;">
                        <p style="color: #FEAE6F ; font-size: 18px;"> اكمل طلبك لــ (1000 ر.س) واحصل علي خدمة التوصيل
                            مجاني
                        </p>
                    </div>


                    <OrderSummary />
                    <ProductMayLike />

                </v-col>
            </v-row>
        </v-container>



        <usersShow :products="flashDeals" />
        <MoreProducts :products="flashDeals" />

    </div>
</template>
<script setup>
// import { defineComponent, ref, computed, onMounted } from 'vue';
// import { useStore } from 'pinia';
import miniCart from "~/components/purchase/miniCart.vue";
import usersShow from "~/components/purchase/usersShow.vue";
import MoreProducts from "~/components/home-page/MoreProducts.vue";
import OrderSummary from "~/components/purchase/OrderSummary.vue";
import ProductMayLike from "~/components/purchase/ProductMayLike.vue";

import { useProductsStore } from "@/stores/products";
import { onMounted, computed } from "vue";


definePageMeta({
    components: {
        miniCart,
        usersShow,
        MoreProducts,
    }
});

// Use the products store
const productsStore = useProductsStore();
// Destructure the state and actions from the store
// const { flashDeals, getProducts } = productsStore;
const flashDeals = computed(() => productsStore.flashDeals);
// const getProducts = computed(() => productsStore.getProducts);

// const { flashDeals, getProducts } = productsStore();

// Fetch products on component mount
onMounted(async () => {
    await productsStore.getProducts();
});

</script>
<style>
.v-container {
    margin-right: 0;
    margin-left: 0;
}
</style>