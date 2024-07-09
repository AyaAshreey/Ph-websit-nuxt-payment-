<template>

    <div class="px-4 py-6 " style="background-color: #F1F1F1; border-radius: 12px;">
        <div class="mb-4">
            <p style="font-size: 24px;">ملخص الطلب </p>

        </div>

        <div id="search" class="position-relative text-center mb-4">
            <input type="search" style="width: 100%;height: 65px; border-radius: 8px; outline: none"
                :placeholder="$t('CompeletePurchase.CodeInput')" class="py-3 px-5 bg-white" />

            <p :style="svgStyle" style="background-color: var(--mainColor);">تطبيق</p>


        </div>

        <hr class="my-4" style="color: white;">

        <div class="d-flex  justify-space-around mb-6">
            <p style="color: #939393; font-size: 20px;">المجموع (4 منتج ) </p>
            <p style="font-size: 20px;"> 26458.00 ر.س </p>
        </div>

        <div class="d-flex  justify-space-around text-red mb-12" style="font-size: 20px;">
            <p>القيمة المضافة </p>
            <p> 14.00 ر.س </p>
        </div>

        <div class="d-flex  justify-space-around px-4 py-4 mb-6 "
            style="color: var(--mainColor); background-color: #C2D3E3; border-radius: 8px;height: 65px">
            <p>الاجمالي <span>(شاملا ً ضريبة القيمة المضافة)</span></p>
            <p> س.ر 26488.0</p>
        </div>

        <div class="mb-4">
            <v-btn to="/PaymentMethod" class="px-4 py-4"
                style="background-color: var(--mainColor); border-radius: 8px; width: 100%; height: 65px;">إتمام
                الشراء</v-btn>
        </div>


    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();


const svgStyle = computed(() => {
    return {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'var(--btnColor)',
        height: '100%',
        width: '20%',
        borderTopLeftRadius: locale.value === 'ar' ? '8px' : '0',
        borderTopRightRadius: locale.value === 'ar' ? '0' : '8px',
        borderBottomLeftRadius: locale.value === 'ar' ? '8px' : '0',
        borderBottomRightRadius: locale.value === 'ar' ? '0' : '8px',
        padding: '20px',
        left: locale.value === 'ar' ? '0' : 'auto',
    };
});
</script>
<style scoped>
input::placeholder {
    color: #C5C5C5;
}
</style>