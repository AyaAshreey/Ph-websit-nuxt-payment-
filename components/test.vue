<template>
    <div class="paymentCard mt-8">


        <!-- ================================= -->
        <div>

            <Input type="text" placeholder="الاسم" class="bigInput py-3 px-5 bg-white" />
            <Input type="text" placeholder="رقم الكارت " class="bigInput py-3 px-5 bg-white mt-6" />
            <v-row class="mt-6">
                <v-col cols="6">
                    <Input type="text"
                        style="width: 100%; height: 50px; border-radius: 10px; border: 1px solid #E5E5E5;"
                        class="py-3 px-5 bg-white" placeholder="MM/YY" />
                </v-col>
                <v-col cols="6">
                    <Input type="text"
                        style="width: 100%; height: 50px; border-radius: 10px; border: 1px solid #E5E5E5;"
                        placeholder="cvv" class="py-3 px-5 bg-white" />
                </v-col>
            </v-row>


            <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
                placeholder="Search..." />

            <UButton label="Button" />
        </div>

    </div>
</template>

<script setup>
import { VTextField, VRow, VCol } from 'vuetify/components'; // Import Vuetify components
import UInput from '@/components/UInput.vue'; // Adjust the import path
import UButton from '@/components/UButton.vue'; // Adjust the import path


</script>
<style scoped>
.paySVG {
    border: 2px solid #C5C5C5;

}

.bigInput {
    width: 100%;
    height: 50px;
    border-radius: 12px;
    border: 1px solid #E5E5E5;
    padding: 25px, 45px, 25px, 45px;
    gap: 10px;
}

input::placeholder {
    color: #939393;
    font-size: 24px;
    font-weight: 500;
}
</style>