import Footer from '~/components/global/Footer.vue';
<template>
    <div style="background-color: #B8B8B8;">
        <FirstHeadOnly />
        <img class="Suc_img" src="../assets/images/Frame 38198.png" alt="">

        <Footer />
    </div>
</template>
<script setup>
definePageMeta({
    layout: "customSuccessfulImg"
});
</script>
<style>
.v-application__wrap {
    min-height: 15dvh !important;
}

.Suc_img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
</style>