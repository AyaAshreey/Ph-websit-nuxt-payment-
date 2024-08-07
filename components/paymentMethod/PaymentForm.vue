<template>
    <div>
        <div>
            <div id="card-element"></div>
        </div>
        <v-btn @click="submit" class="payBtn">ادفع</v-btn>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const countryCode = 'KWT';
const sessionId = 'facf0b3a-6852-482a-87e9-a739b6efa8c6';
const scriptLoaded = ref(false);

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
};

const initMyFatoorah = () => {
    const config = {
        countryCode: countryCode,
        sessionId: sessionId,
        cardViewId: 'card-element',
        supportedNetworks: 'v,m,ae,md',
        onCardBinChanged: handleBinChanges,
        style: {
            hideCardIcons: true,
            direction: 'rtl',
            cardHeight: 300,
            tokenHeight: 250,
            input: {
                color: 'black',
                fontSize: '24px',
                fontFamily: 'Montserrat Arabic',
                inputHeight: '52px',
                inputMargin: '30px',
                borderColor: 'E5E5E5',
                borderWidth: '1px',
                borderRadius: '12px',
                boxShadow: '',
                placeHolder: {
                    holderName: 'الاسم',
                    cardNumber: 'رقم الكارت',
                    expiryDate: 'MM / YY',
                    securityCode: 'CVV',
                },
            },
            text: {
                saveCard: 'Save card info for future payment.',
                addCard: 'Use another Card!',
                deleteAlert: {
                    title: 'Delete',
                    message: 'Test',
                    confirm: 'yes',
                    cancel: 'no',
                },
            },
            label: {
                display: false,
                color: 'black',
                fontSize: '13px',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                text: {
                    holderName: 'Card Holder Name',
                    cardNumber: 'Card Number',
                    expiryDate: 'Expiry Date',
                    securityCode: 'Security Code',
                },
            },
            error: {
                borderColor: 'red',
                borderRadius: '8px',
                boxShadow: '0px',
            },
        },
    };
    myFatoorah.init(config);
};

onMounted(async () => {
    try {
        await loadScript('https://demo.myfatoorah.com/cardview/v2/session.js');
        scriptLoaded.value = true;
        initMyFatoorah();
    } catch (error) {
        console.error(error.message);
    }
});

const submit = async () => {
    if (!scriptLoaded.value) {
        console.error('Script not loaded');
        return;
    }

    try {
        const response = await myFatoorah.submit();
        const sessionId = response.sessionId;

        // Call server-side API to execute payment
        const { data, error } = await $fetch('/api/execute-payment', {
            method: 'POST',
            body: { sessionId }
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

const handleBinChanges = (bin) => {
    console.log(bin);
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
