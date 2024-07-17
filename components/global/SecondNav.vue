<template>
    <div class="app-nav mx-16">
        <v-app>
            <v-app-bar class="pt-3" height="fit-content" color="var(--mainColor)">
                <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
                <v-container class="mx-8">
                    <v-row class="first-nav p-2">

                        <v-col cols="3" class="ps-8 " :style="computedColStyle">
                            <div class="parent text-white d-flex justify-space-between align-center"
                                :style="computedParentStyle">
                                <!-- ////////////Logo   //////////////////-->
                                <NuxtLink to="/">
                                    <img class="nav-logo" src="@/assets/images/logo 1.png" alt="" />
                                </NuxtLink>

                                <!-- ///////////////// الشحن الي ////////// -->
                                <div class="lang-column">
                                    <div class="lang d-flex align-center text-white "
                                        style="gap: 5px; cursor: pointer;width: 110px" id="language-btn">
                                        <!-- <span v-html="selectedState[0].icon"></span> -->
                                        <h4> {{ $t('uppernav.ShippingTo') }} {{ selectedState[0].lang }} </h4>
                                        <!-- <h4> {{ $t('uppernav.ShippingTo') }} {{ selectedLang ? displayLang(selectedLang) : '' }} </h4> -->
                                        <!-- <h4> {{ $t('uppernav.ShippingTo') }} {{ $t('langs.Saudia') }} {{ selectedState[0].lang }} </h4> -->


                                        <v-icon>mdi-chevron-down</v-icon>
                                        <v-menu activator="#language-btn">
                                            <v-list v-model:selected="selectedState" mandatory>

                                                <!-- <v-list-item v-for=" lang  in  langs " :key="lang.lang" :value="lang">
  <v-list-item-title class="d-flex " style="gap: 10px">
    <span v-html="lang.icon"> </span> {{ lang.lang }}
    <v-radio v-model="selectedLang" :value="lang" color="#009966"></v-radio>
  </v-list-item-title> -->

                                                <v-list-item v-for=" lang  in  langs " :key="lang.lang" :value="lang">
                                                    <v-list-item-title class="d-flex " style="gap: 10px">
                                                        <span v-html="lang.icon"> </span> {{ displayLang(lang) }}
                                                        <v-radio v-model="selectedLang" :value="lang"
                                                            color="var(--mainColor)"></v-radio>
                                                    </v-list-item-title>

                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </div>


                            </div>
                        </v-col>

                        <!-- ========================================================== -->
                        <v-col class="input-col-container" cols="6" :style="inputColStyle">

                            <div id="search" class="position-relative" style="width: 100%;">

                                <input @click="showAlert" type="search" name="navSearch" id="navSearch"
                                    style="width: 100%; height: 60px; border-radius: 10px; outline: none"
                                    :placeholder="$t('uppernav.placeHolder')" class="py-3 px-5 bg-white" />


                                <svg width="34" height="33" viewBox="0 0 34 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" :style="svgStyle">
                                    <path
                                        d="M4.63833 14.9763C4.63833 22.6954 10.99 28.9527 18.8255 28.9527C26.661 28.9527 33.0127 22.6954 33.0127 14.9763C33.0127 7.25729 26.661 1 18.8255 1C10.99 1 4.63833 7.25729 4.63833 14.9763Z"
                                        stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M24.3821 19.6268C25.0029 19.0167 25.4953 18.2918 25.8309 17.4936C26.1664 16.6955 26.3386 15.8399 26.3374 14.976C26.3386 14.1121 26.1664 13.2565 25.8309 12.4583C25.4953 11.6602 25.0029 10.9352 24.3821 10.3251M8.62678 25.0241L1.54571 32"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>


                            </div>
                        </v-col>
                        <!-- ========================================================== -->

                        <v-col cols="3" class="first-col d-flex flex-row align-center " :style="firstColStyle">
                            <div class="overlay d-flex flex-row align-center" style="gap: 22px; margin-top: 8px;">
                                <div @click="showAlert" class="login-link">
                                    <NuxtLink to="/"> {{ $t('uppernav.loginLink') }} </NuxtLink>
                                    <!-- <a href="#"> تسجيل الدخول </a> -->
                                </div>


                                <div style="cursor: pointer">
                                    <v-badge :content="cartItemCount" overlap location="right top"
                                        color="var(--btnColor)" offset-y="-32"></v-badge>

                                    <svg @click="showAlert" style="width: 28px; ; fill: #FFFFFF" viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="path1"
                                            d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
                                        </path>
                                        <path class="path2"
                                            d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
                                        </path>
                                        <path class="path3"
                                            d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z">
                                        </path>
                                    </svg>


                                    <!-- <template v-if="cartItemCount >= 1">
<v-badge overlap location="right top" color="#FFBD1F" offset-y="-32">
<svg @click="showAlert" style="width: 28px; fill: #FFFFFF" viewBox="0 0 1024 1024"
xmlns="http://www.w3.org/2000/svg">
<path class="path1"
  d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
</path>
<path class="path2"
  d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
</path>
<path class="path3"
  d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z">
</path>
</svg>
</v-badge>
</template>
<template v-else>
<svg @click="showAlert" style="width: 28px; fill: #FFFFFF" viewBox="0 0 1024 1024"
xmlns="http://www.w3.org/2000/svg">
<path class="path1"
d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
</path>
<path class="path2"
d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
</path>
<path class="path3"
d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z">
</path>
</svg>
</template> -->
                                </div>
                                <div class="locale-changer">
                                    <select class="Lang-btn" v-model="$i18n.locale">
                                        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`"
                                            :value="locale">{{
                            locale }}
                                        </option>
                                    </select>
                                </div>
                                <!-- <div>
<a @click="toggleDirection" class="Lang-btn" href="#">EN</a>
</div> -->
                            </div>
                        </v-col>
                        <!-- ==== -->

                        <div class="alt-burger-menu" style="gap: 15px ;margin-right: 70px; padding-bottom: 35px;">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"
                                style="fill: #FFFFFF; cursor: pointer; enable-background:new 0 0 512 512;"
                                xml:space="preserve" width="20px">

                                <g>
                                    <path
                                        d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                                    <path
                                        d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
                                    <path
                                        d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
                                </g>
                            </svg>
                        </div>


                    </v-row>
                    <!-- ===================================================================== -->
                    <!-- ================Second Row Nav -->
                    <!-- ===================================================================== -->

                    <v-row class="darkgreen-nav mt-6 py-8" style="width:100% ; background-color: var(--secNavColor) ;position: fixed;
    top: 92px;
    left: 12px;">

                        <!-- <v-col cols="2"></v-col> -->

                        <!-- =====Second Col Second row ======= -->
                        <!-- 
                        <v-col cols="8">
                            <div class="d-flex align-center text-white justify-space-between ga-8">
                                <div class="d-flex ga-5">
                                    <p class="numersStyle">
                                        1</p>
                                    <p style="font-size: 24px; font-weight: 700;">عنوان الشحن</p>
                                </div>

                                <div class="vl"></div>

                                <div class="d-flex ga-3">
                                    <p class="numersStyle">2</p>
                                    <p style="font-size: 24px; font-weight: 700;">الدفع</p>
                                </div>

                                <div class="vl"></div>

                                <div class="d-flex ga-3">
                                    <p class="numersStyle">3</p>
                                    <p style="font-size: 24px; font-weight: 700;">الفاتورة</p>
                                </div>

                            </div>
                        </v-col> -->

                        <!-- =====third Col Second row ======= -->

                        <!-- <v-col cols="2"></v-col> -->

                        <v-stepper>
                            <v-stepper-header>
                                <v-stepper-item title=" عنوان الشحن " value="1"></v-stepper-item>

                                <v-divider></v-divider>

                                <v-stepper-item title="الدفع" value="2"></v-stepper-item>

                                <v-divider></v-divider>

                                <v-stepper-item title="الفاتورة" value="3"></v-stepper-item>
                            </v-stepper-header>
                        </v-stepper>
                    </v-row>

                </v-container>
            </v-app-bar>

        </v-app>
    </div>



    <div v-if="alertVisible" class="custom-alert">
        <div class="alert-content">
            <p>{{ alertMessage }}</p>
            <v-icon @click="hideAlert" class="alert-close">mdi-close</v-icon>
        </div>
    </div>
</template>


<script setup>
import { ref, reactive, computed, inject, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

const store = useStore();
const { locale } = useI18n();
const Emitter = inject("Emitter");

const alertVisible = ref(false);
const alertMessage = ref("");
const selectedLang = ref("");
const selectedState = ref([
    {
        icon: ``,
        lang: "السعودية",
    },
]);
const langs = ref([
    {
        icon: ``,
        lang: "السعودية",
        translation: "Saudia",
    },
    {
        icon: ``,
        lang: "مصر",
        translation: "Egypt",
    },
    {
        icon: ``,
        lang: "الامارات",
        translation: "The UAE",
    },
]);

const showAlert = () => {
    alertMessage.value = "Coming Soon";
    alertVisible.value = true;
};

const hideAlert = () => {
    alertVisible.value = false;
};

const openCart = () => {
    Emitter.emit("openCart");
};

const updateDirection = () => store.dispatch('updateDirection');
const toggleDirection = () => store.dispatch('toggleDirection');

const displayLang = (lang) => {
    return locale.value === "ar" ? lang.lang : lang.translation;
};

const directionValue = computed(() => store.getters.directionValue);
const cartItemCount = computed(() => store.getters.cartItemCount);

const direction = computed(() => directionValue.value);

const directionClass = computed(() => {
    return directionValue.value === 'rtl' ? 'rtl-class' : 'ltr-class';
});

// const computedColStyle = computed(() => {
//     return locale.value === 'ar' ? 'margin-right: 0px;' : 'margin-left: 0';
// });

const computedParentStyle = computed(() => {
    return locale.value === 'ar' ? 'margin-right: 0;' : 'margin-left: -60px;';
});

const svgStyle = computed(() => {
    return {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'var(--btnColor)',
        height: '100%',
        width: '21%',
        borderTopLeftRadius: locale.value === 'ar' ? '10px' : '0',
        borderTopRightRadius: locale.value === 'ar' ? '0' : '10px',
        borderBottomLeftRadius: locale.value === 'ar' ? '10px' : '0',
        borderBottomRightRadius: locale.value === 'ar' ? '0' : '10px',
        padding: '10px',
        left: locale.value === 'ar' ? '0' : 'auto',
    };
});

const inputColStyle = computed(() => {
    return {
        'padding-right': locale.value === 'ar' ? '50px' : '0',
        'padding-left': locale.value === 'ar' ? '0' : '50px',
        // 'margin-right': locale.value === 'ar' ? '0' : '0',
    };
});

const firstColStyle = computed(() => {
    return {
        gap: '15px',
        'padding-right': locale.value === 'ar' ? '35px' : '50px',
        'padding-bottom': '50px',
        'padding-left': locale.value === 'ar' ? '0' : '50px',
    };
});

const helpIconStyle = computed(() => {
    return {
        gap: '5px',
        'margin-right': locale.value === 'ar' ? '28px' : '0',
        'margin-left': locale.value === 'ar' ? '0' : '28px',
    };
});

onMounted(() => {
    selectedLang.value = langs.value[0];
});
</script>



<style scoped>
.v-locale--is-ltr {
    direction: unset !important;
}

.v-application__wrap {
    min-height: 20dvh !important;
}

.v-container {
    max-width: none;
}

.numersStyle {
    background-color: var(--btnColor);
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    font-size: 30px;
    font-weight: 700;
}

.cart-icon {
    position: relative;
    cursor: pointer;
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    padding: 4px;
}

.custom-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 3px solid var(--mainColor);
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    font-family: 'Montserrat Arabic', sans-serif;
    width: 400px;
    height: 170px;
    border-radius: 15px;
}

.alert-content {
    text-align: center;
}

.alert-content p {
    margin-top: 10%;
    font-size: 30px;
    color: var(--mainColor);
    font-family: 'Modern Antiqua';
}

.alert-close {
    text-align: center;
    position: absolute;
    top: 5px;
    right: 7px;
    color: #036C46;
    border-radius: 50%;
    background-color: #e6dddd70;
    padding: 15px;
}

.alert-close:hover {
    cursor: pointer;
}

#search {
    display: flex;
    flex-direction: row-reverse;
}

.first-col a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 800;

}

.first-col .Lang-btn {
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 700;
}


.links a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;

}

.alt-burger-menu {
    display: none;
}

/* ============== */
.v-stepper-header,
.v-stepper .v-sheet {
    box-shadow: none;
}

.v-stepper.v-sheet {
    width: 70%;
    margin: auto;
}

/* ============= */
.v-sheet {
    background: none;
}

.v-divider {
    display: block;
    flex: 1 1 100%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    height: 4px;
    max-height: 0px;
    opacity: 1;
    transition: inherit;
    border-style: solid;
    color: var(--btnColor);

}

.v-stepper-item {
    color: #FFFFFF;
    opacity: 1;
    padding: 1rem;
    font-size: 24px;
    font-weight: 700;
}

.v-stepper.v-sheet {
    box-shadow: none;
}

.v-stepper-item__avatar.v-avatar {
    background: var(--btnColor);
    color: rgb(var(--v-theme-on-surface-variant));
    font-size: 1.75rem;
    margin-inline-end: 8px;
    width: 35px !important;
    height: 35px !important;
}

.v-stepper-header .v-divider {
    margin: 0 20px;
}


@media (max-width: 834px) {
    .alt-burger-menu {
        display: none;
    }

    #search {
        width: 90% !important;
        margin-right: -20px !important;
    }

    #search input::placeholder {
        font-size: 12px;
    }

    .nav-logo {
        width: 90%;
        margin-right: 30px !important;
        /* margin-top: 10px !important; */
    }

    .links {
        width: 700px;

    }

    .links a {
        font-size: 12px;
        margin-right: 2px;
    }

    .lang-column {
        display: none;
    }

    .v-col-8 {
        width: 900px;
    }

    .alt-burger-menu {
        display: none;
    }

    .darkgreen-nav {
        position: fixed !important;
        top: 79px !important;
        left: 12px !important;

    }

    .first-col {
        /* display: block ruby !important; */
        padding-bottom: 35px !important;
        /* position: absolute; */
        margin-right: -50px !important;
        margin-top: 10px !important;
    }

    .first-col div {
        /* margin-right: 10px !important; */
        margin-top: -4px !important;
    }

    .first-col svg {
        width: 22px !important;
    }

    .first-col a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 700;

    }

    .first-col .Lang-btn {
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
    }
}

@media (max-width: 375px) {
    .overlay {
        display: none !important;
    }

    .alt-burger-menu {
        display: block !important;
        position: absolute;
        right: 265px;
        top: 35px;
        margin-right: 80px !important;

    }

    .help svg {
        margin-left: -20px !important;
        width: 15px;

    }

    .input-col-container {
        padding-right: 40px !important;
        margin-right: 0 !important;
    }

    .lang {
        display: none;
    }

    .first-nav {
        width: 370px !important;
        padding-bottom: 60px;
    }

    .nav-logo {
        margin-right: 40px !important;
        width: 105px;
        margin-top: 12px;
    }

    #search {
        width: 200px !important;
        height: 20px !important;
        margin-right: 20px !important;
    }

    .links {
        justify-content: start !important;
        gap: 20px !important;
        margin-right: 10px !important;
    }

    .links a {
        margin-right: 0 !important;
    }

    .extra-link {
        display: none;

    }

    #search svg {
        position: absolute !important;
        height: 40px !important;
        top: 30px !important;
        width: 25% !important;

    }

    #search input {
        height: 40px !important;
        position: absolute;
        top: 10px !important;
    }

    #search input::placeholder {
        font-size: 8px;
    }

    .custom-alert {
        width: 300px
    }
}
</style>