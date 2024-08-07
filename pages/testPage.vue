<template>
    <div>
        <h1>MyFatoorah Payment</h1>
        <button @click="submit">Pay Now</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from '@nuxt/http';

const scriptLoaded = ref(false);

onMounted(() => {
    // Load the MyFatoorah script
    const script = document.createElement('script');
    script.src = 'https://demo.myfatoorah.com/cardview/v1/session.js';
    script.onload = () => {
        scriptLoaded.value = true;
    };
    document.head.appendChild(script);
});

const submit = async () => {
    if (!scriptLoaded.value) {
        console.error('Script not loaded');
        return;
    }

    try {
        const response = await window.MyFatoorah.submit();  // Use window.MyFatoorah
        const sessionId = response.SessionId;

        // Call server-side API to execute payment
        const { data, error } = await useFetch('/api/execute-payment', {
            method: 'POST',
            body: {
                PaymentMethodId: 1, // Example value, change accordingly
                InvoiceValue: 50,
                SessionId: sessionId
            }
        });

        if (error) {
            console.error(error);
            return;
        }

        const { InvoiceId, PaymentURL } = data;

        // Display the result to the user
        console.log(`To pay the invoice ID ${InvoiceId}, click on: ${PaymentURL}`);
        window.location.href = PaymentURL;

    } catch (error) {
        console.error(error);
    }
};
</script>
<style scoped>
.v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height) + 52px);
}

.payBtn {
    background-color: var(--mainColor);
    width: 100%;
    font-size: 32px;
    color: white;
    border-radius: 12px;
    font-weight: 700;
    padding: 30px;
}
</style>
