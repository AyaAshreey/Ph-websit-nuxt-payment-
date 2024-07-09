import Footer from '~/components/global/Footer.vue';
<template>
    <div style="background-color: #B8B8B8;">
        <FirstHeadOnly />



        <img src="../assets/images/Frame 38198.png" alt="">

        <Footer />


    </div>


</template>
<script setup>
definePageMeta({
    layout: "customSuccessfulImg"
});
</script>


<style scoped>
.v-application__wrap {
    min-height: 15dvh !important;
    background: #B8B8B8 !important;
    background-color: rgb(184, 184, 184);
}


img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
</style>