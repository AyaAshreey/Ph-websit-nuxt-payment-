<template>
    <div class="mx-16" style="margin-top: 150px;">
        <v-container>

            <thank />
            <hr style="border: 1px solid #C5C5C5; width: 95%;" class="my-5">

            <OrderDetails />
            <hr style="border: 1px solid #C5C5C5; width: 95%;" class="my-5">
            <ShippingDetails />
            <hr style="border: 1px solid #C5C5C5; width: 95%;" class="my-5">
            <taps />
            <v-row>
                <v-col cols="7">
                    <SentromCard />
                    <SentromCard />
                </v-col>

                <v-col cols="1">

                </v-col>

                <v-col cols="4">
                    <OrderSummary3 />
                    <div class="text-center font-weight-medium mt-12" style="font-size: 24px">
                        <NuxtLink to="/" style="color: #939393">
                            إلغاء الطلب بالكامل
                        </NuxtLink>
                    </div>

                </v-col>
            </v-row>

        </v-container>
    </div>
</template>
<script setup>
import thank from "~/components/PaymentResponse/thank.vue";
import OrderDetails from "~/components/PaymentResponse/OrderDetails.vue";
import ShippingDetails from "~/components/PaymentResponse/ShippingDetails.vue";
import taps from "~/components/PaymentResponse/taps.vue";
import SentromCard from "~/components/PaymentResponse/SentromCard.vue";
import OrderSummary3 from "~/components/PaymentResponse/OrderSummary3.vue";



definePageMeta({
    layout: "custom"
});

</script>
<style scoped>
.v-container {
    max-width: none;
}

/* .v-application__wrap {
    min-height: 40dvh !important;
} */
</style>