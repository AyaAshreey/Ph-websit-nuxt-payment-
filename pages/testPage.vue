<template>
    <div class="my-16" style="width: 50%; margin-right: auto; margin-left: auto;">
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
const sessionId = '06cde1ab-8ea5-4700-b45d-f8eba5d0d847';
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

        // Call ExecutePayment endpoint with sessionId
        const executePaymentResponse = await axios.post(
            'https://api.myfatoorah.com/v2/ExecutePayment',
            {
                SessionId: sessionId,
                // Add other required fields here
            },
            {
                headers: {
                    'Authorization': 'Bearer AsTYfKprDDtGNNlhy1T6LV85yZtK4VrGjcKu6KMkOjudglh9fkY4R_xbnFoOweMlmzwk84QaJaxtX2eUXVbgVaBLIUKORnNRKJpBlG-qee9cZQQMesVetN9mMhsS23RjxjBK5__BJxI8QE9Mf3lxFlnkwq3DOaltFJ9GmT4D3NLsa5t0t3w21s9NEaIdxiF7QI_ZgvqW9tbr1j2bUyjgz1JAKgFkOQPFZrOW7Fkqh6aVIfGyVqwd5eI6ysBa3wtrttCy0-VGEUu42QQTKWUJPA3HsgEu-XxDR_4ZTHE4Y1xPjOF9QC4wNvu0CF8UsO9xUlX6Gek-xzyrOp4ssAHYPnim-M3y2jhLfsKylR6DWdhd328l2a9Rt_omMCN-MRHbGdzdvGFKG2X0te6CVPOyWtujH5B9vqHhNrxQ_vtphTs9rjCMMo69xSDcaysCDIQfzJt5Y0Kk1DOlN-UHBSGt5Y56m7VdFD9koXoN5FZqCHhS_0jaq25nvg62pvOFYlvUTHuDnS161jrWPOo8TtWuCtjvL68j9vu6VgktmI2ZQ7w7o8D4n4yvAlk9f2gX7n3eIMAHJB-p1DgmseTEpyYX5pK6EJDcg66th8CSQJcI3LRuxcqqVQZ8tPdgJHXK0rr9fHgGVUMyrb1o0Uhh30C7X3HylLYkKbb6lphTdAvuXFANrMgj',
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('Payment response:', executePaymentResponse.data);
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
    /* margin-top: 24px; */
    font-size: 32px;
    color: white;
    border-radius: 12px;
    font-weight: 700;
    padding: 30px;
}
</style>
