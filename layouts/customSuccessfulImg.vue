<template>
    <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <FirstHeadOnly />

        <slot />
        <Footer />
    </div>

</template>
<script setup>
// import FirstHeadOnly from '~/components/global/FirstHeadOnly.vue';

</script>
