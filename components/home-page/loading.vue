<template>
    <div class="overlay">
        <div class="LoadingImg"></div>
    </div>
</template>

<style scoped>
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ecf0f1;
    z-index: 99999999999;
}

.LoadingImg {
    background-image: url('~/assets/images/loader.gif');
    background-position: center center;
    background-size: cover;
    height: 200px;
    width: 200px;
    /* margin: 10px auto; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
}
</style>