import Footer from '~/components/global/Footer.vue';
<template>

    <FirstHeadOnly />


    <div style="background-color: #B8B8B8;">
        <img src="../assets/images/Frame 38198.png" alt="">
    </div>

    <Footer />
</template>
<script setup>
definePageMeta({
    layout: "customSuccessfulImg"
});
</script>


<style scoped>
.v-application__wrap {
    min-height: 13dvh !important;
}


img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>