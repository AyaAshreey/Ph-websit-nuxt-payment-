<template>
    <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <SecondNav />

        <slot />
        <Footer />
    </div>

</template>
<style scoped>
.v-application__wrap {
    min-height: 40dvh !important;
}

.v-container {
    max-width: none;
}
</style>
