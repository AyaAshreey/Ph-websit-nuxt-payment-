<template>
    <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <FirstHeadOnly />

        <slot />
        <Footer />
    </div>

</template>
<style>
.v-application__wrap {
    min-height: 40dvh !important;
}
</style>
