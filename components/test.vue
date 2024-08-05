<template>
    <div class="paymentForm mt-12">
        <div>
            <!-- <div id="payment-element" class="nes-input">
            </div> -->

            <!-- <form @submit.prevent="submitPayment">
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Name" variant="outlined" v-model="name" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="cardNumber" variant="outlined" type="text" placeholder="رقم الكارت "
                            required>
                        </v-text-field>
                    </v-col>
                </v-row>

                <v-row class="mt-11">
                    <v-col cols="6">
                        <v-text-field variant="outlined" type="number" placeholder="MM/YY">
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field variant="outlined" type="password" placeholder="cvv"></v-text-field>
                    </v-col>
                </v-row>

                <v-btn to="/PaymentSuccessful" class="payBtn mt-11">ادفع</v-btn>
            </form> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const cardNumber = ref('');
const expiryDate = ref('');
const cvc = ref('');
const paymentUrl = ref('');

const handlePayment = async () => {
    const paymentData = {
        InvoiceAmount: 100.00,  // Example amount
        CurrencyIso: 'KWD',
        PaymentMethodId: 2,  // Assuming 2 is the card payment method
        CustomerName: name.value,
        CallBackUrl: 'http://localhost:3000/PaymentSuccessful',
        ErrorUrl: 'http://localhost:3000/paymentFailure',
        CardInfo: {
            CardNumber: cardNumber.value,
            ExpiryMonth: expiryDate.value.split('/')[0],
            ExpiryYear: expiryDate.value.split('/')[1],
            SecurityCode: cvc.value,
        },
    };

    try {
        const executeResponse = await myfatoorahService.executePayment(paymentData);
        paymentUrl.value = executeResponse.Data.PaymentURL;
    } catch (error) {
        console.error('Payment error:', error);
    }
};
</script>

<style scoped>
.v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height) + 52px);
}

.bigInput {
    width: 100%;
    border-radius: 12px;
    border: 1px solid #E5E5E5;

    padding: 30px;
    gap: 10px;
    font-size: 24px;

}

.active-btn {
    border: 5px solid var(--mainColor);

}

input::placeholder {
    color: #939393;
    font-size: 24px;
    font-weight: 500;
}

.payBtn {
    background-color: var(--mainColor);
    width: 100%;
    margin-top: 24px;
    font-size: 32px;
    color: white;
    border-radius: 12px;
    font-weight: 700;
    padding: 30px
}
</style>
