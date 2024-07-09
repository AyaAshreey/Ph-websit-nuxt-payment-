<template>
    <div class="mx-16" style="margin-bottom: 300px;">
        <v-container>
            <v-row>
                <v-col cols="7">
                    <div class="d-flex align-center ">
                        <p style="font-size: 32px; font-weight: 700;">طريقة الدفع</p>
                    </div>
                    <PaymentCards />
                </v-col>
                <!-- =================================== -->
                <v-col cols="1">

                </v-col>
                <!-- =================================== -->
                <v-col cols="4">
                    <OrderSummary2 />
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>
<script setup>
import OrderSummary2 from "~/components/paymentMethod/OrderSummary2.vue";
import PaymentCards from "~/components/paymentMethod/PaymentCards.vue";

definePageMeta({
    layout: "custom"
});

</script>

<style>
.v-container {
    margin-right: 0;
    margin-left: 0;
}
</style>