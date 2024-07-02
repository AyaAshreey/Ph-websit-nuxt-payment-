<template>
    <div class="products-swiper mx-16">
        <div class="titl d-flex justify-space-between align-center mb-5">
            <h3 :style="similarStyling">
                {{ $t('swiper.usersShow') }}
            </h3>
            <a href="#" :style="showMoreStyling"> {{ $t('swiper.showMore') }} </a>
        </div>


        <swiper />
    </div>
</template>

<script setup>
import swiper from "@/components/home-page/Swiper.vue";
import { useStore } from 'vuex';

const store = useStore();
const similarStyling = computed(() => ({
    'margin-right': store.state.locale === 'ar' ? '100px' : '0',
    'margin-left': store.state.locale === 'ar' ? '0' : '100px',
    fontWeight: '700',
    color: '#000000',
    fontSize: '30px',
}));

const showMoreStyling = computed(() => ({
    'margin-right': store.state.locale === 'ar' ? '0' : '100px',
    'margin-left': store.state.locale === 'ar' ? '100px' : '0',
    color: '#939393',
    fontSize: '20px',
}));

</script>

<style scoped>
@media (max-width: 375px) {
    .titl {
        width: 370px !important;
    }

    .titl h3 {
        margin-right: 40px !important;
        font-size: 15px !important;
    }

    .titl a {
        font-size: 13px !important;
        margin-right: 40px !important;
        display: contents;
        text-decoration-line: underline;
    }
}
</style>
