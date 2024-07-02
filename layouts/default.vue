<template>
    <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <AppNav />
        <slot />
        <Footer />
    </div>
</template>
<!-- <script>
export default {
    data: () => ({
        drawer: true,
        windowWidth: 0,
    }),
    mounted() {
        this.windowWidth = window.innerWidth;
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
            console.log(this.windowWidth);
        };
    },
};
</script> -->

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const drawer = ref(true);
const windowWidth = ref(0);

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
    console.log(windowWidth.value);
};

onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>
<style>
.v-application__wrap {
    min-height: 20dvh !important;
}
</style>