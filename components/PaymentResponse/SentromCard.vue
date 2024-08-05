<template>
    <div class="MiniCart">
        <div class="mt-5 mb-16" style="border: 1px solid #C5C5C5; border-radius: 5px;">
            <v-container>
                <div class="d-flex" style="gap: 8px;">
                    <v-container>
                        <v-row>
                            <v-col cols="3">
                                <img src="../../assets/images/centrum-centrum-multigummies-150-units 1.png" alt="">
                            </v-col>

                            <v-col cols="7">
                                <div class="text-right " style="line-height: 29.48px; gap: 8px; ">

                                    <p style="font-weight: 600;font-size: 20px;"> سنتروم</p>
                                    <p style="color: #939393;font-weight: 400;font-size: 20px;">فيتامينات متعددة للطاقة
                                        - 30 قرص
                                    </p>

                                    <img src="../../assets/SVGs/purchaseMiniCart/Frame 37789.svg" alt="">
                                    <div class="d-flex ">

                                        <img src="../../assets/SVGs/purchaseMiniCart/Group 650.svg" alt="">
                                        <p style="font-size: 18px; margin-right: 5px;">لا يمكن استبدال او استرجاع هذا
                                            المنتج</p>
                                    </div>
                                    <p style="color: #939393; font-size: 20px;"> 80 ر.س</p>
                                    <div class="d-flex ">
                                        <p style="font-size: 24px; font-weight: 700;">280 ر.س</p>
                                        <span :style="discountStyle">خصم
                                            15%</span>
                                    </div>


                                </div>
                            </v-col>

                            <v-col cols="2">

                                <div class="icons-side text-center">
                                    <p class="" style="background-color: #F1F1F1; font-size: 24px; width: 50%;
  border-radius: 5px;">1</p>

                                </div>

                            </v-col>
                        </v-row>
                    </v-container>
                </div>

            </v-container>
            <!-- <img src="@/assets/images/centrum-centrum-multigummies-150-units 1" alt=""> -->

        </div>

    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
// import { useStore } from '@/store/index'; // Adjust the path according to your store file
import { useI18n } from 'vue-i18n';

// const store = useStore();
const { locale } = useI18n();
const discountStyle = computed(() => ({
    'margin-right': locale.value === 'ar' ? '15px' : '0',
    'margin-left': locale.value === 'ar' ? '0' : '15px',
    backgroundColor: 'rgb(229, 62, 62)',
    color: 'white',
    fontWeight: '700',
    fontSize: '16px',
    padding: '3px 12px',
    borderRadius: '8px',
}));
const btnIconStyle = computed(() => ({
    border: '1px solid #E5E5E5',
    width: '60px',
    padding: '6px',
    'margin-left': locale.value === 'ar' ? '30px' : '0',
    borderRadius: '8px',
    'margin-right': locale.value === 'ar' ? '0' : '30px',
}));
</script>

<style scoped>
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
    appearance: none;

}

.input-quantity {
    width: 25px;
    text-align: center;
    border-radius: 5px;
}
</style>
