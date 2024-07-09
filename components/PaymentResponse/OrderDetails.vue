<template>
    <div>

        <h1>تفاصيل الطلب </h1>
        <v-row class="d-flex mt-4">
            <v-col cols="8">
                <div class="d-flex justify-space-around py-8 px-15" style="background: #F1F1F1; border-radius: 8px;">
                    <div class="d-flex">
                        <p>رقم الطلب : </p>
                        <p> 822215504145 </p>
                    </div>
                    <div class="d-flex">
                        <p>تاريخ الطلب : </p>
                        <p> 822215504145 </p>
                    </div>
                    <div class="d-flex">
                        <p>عدد الطلب : </p>
                        <p> 5 </p>
                    </div>
                </div>

            </v-col>
            <v-col cols="4" class="d-flex justify-center ">
                <v-btn class="font-weight-bold py-8 px-15"
                    style="border-radius: 8px; background-color: var(--mainColor); color: white">تفاصيل الطلب
                </v-btn>
            </v-col>
        </v-row>

    </div>

</template>
<style scoped>
.v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height) +px);
}
</style>