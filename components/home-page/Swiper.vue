<template>
    <v-sheet class="mx-auto" elevation="0" max-width="90%">
        <v-slide-group v - model=" model" class="pa-4" selected-class="bg-primary" mandatory show-arrows
            :slides-per-page="5">
            <v-slide-group-item v-for=" n  in  15 " :key="n">

                <v-card :disabled="loading" :loading="loading" class="mx-auto my-12 mr-6" max-width="300">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4"
                            indeterminate></v-progress-linear>
                    </template>
                    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" cover></v-img>

                    <v-card-item>
                        <v-card-title>Cafe Badilico</v-card-title>
                    </v-card-item>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :model-value="4.5" color="amber" density="compact" size="small" half-increments
                                readonly></v-rating>
                        </v-row>

                        <div class="my-4 text-subtitle-1">Small plates, salads & sandwiches - an intimate setting with
                            12 indoor seats plus
                            patio
                            seating.</div>
                    </v-card-text>

                    <v-card-title>Tonight's availability</v-card-title>

                    <v-card-actions>
                        <v-btn @click="addToCart(item)" density="compact"
                            style="letter-spacing: revert; background-color: #FF9900; font-weight: 700;font-size: 16px; color: #ffffff;width: 266px; border-radius: 14px; padding: 11px 0px;">
                            <svg style="width: 20px; fill: #ffffff; margin-left: 5px;" viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="path1"
                                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z" />
                                <path class="path2"
                                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z" />
                                <path class="path3"
                                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z" />
                            </svg>
                            {{ $t('button.slidBtn') }}
                        </v-btn>
                        <!-- <v-btn color="deep-purple-lighten-2" text="Reserve" block border @click="reserve"></v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
const loading = ref(false);
const selection = ref(1);
const model = ref(null);

const reserve = () => {
    loading.value = true;
    setTimeout(() => (loading.value = false), 2000);
};

// Define props
const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});
// Define refs and computed properties
const screenWidth = ref(0);
const showenItem = ref({});

const { t, locale } = useI18n();
const store = useStore();

const cartItemCount = computed(() => store.getters.cartItemCount);

const similarStyling = computed(() => ({
    'margin-right': locale.value === 'ar' ? '100px' : '0',
    'margin-left': locale.value === 'ar' ? '0' : '100px',
    fontWeight: '700',
    color: '#000000',
    fontSize: '30px'
}));

const showMoreStyling = computed(() => ({
    'margin-right': locale.value === 'ar' ? '0' : '100px',
    'margin-left': locale.value === 'ar' ? '100px' : '0',
    color: '#939393',
    fontSize: '20px'
}));

// Methods
const addToCart = (product) => {
    store.dispatch('addToCart', product);
};

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

const calculateSlidesPerView = computed(() => {
    if (screenWidth.value >= 1366) {
        return 4.2;
    } else if (screenWidth.value >= 834) {
        return 2.2;
    } else {
        return 1.2;
    }
});

// Lifecycle hooks
onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenWidth);
});
</script>
<style scoped>
.v-btn.v-btn--density-compact {
    height: calc(var(--v-btn-height) + px) !important;
}
</style>
