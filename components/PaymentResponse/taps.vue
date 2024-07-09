<template>
    <div class="taps my-8">
        <v-card color="basil">

            <v-tabs bg-color="transparent" color="basil" grow>
                <v-tab value="tap1" class="font-weight-bold TapBtn" style="color: #038E5C;"> <v-icon
                        icon="mdi-check"></v-icon> تم استلام طلبك
                </v-tab>
                <v-tab value="tap2" class="font-weight-bold TapBtn"> <v-icon icon="mdi-check"> </v-icon> تم الموافقة
                    وجاري الشحن </v-tab>
                <v-tab value="tap3" class="font-weight-bold TapBtn"> <v-icon icon="mdi-check"> </v-icon> تم الشحن
                </v-tab>
                <v-tab value="tap4" class="font-weight-bold TapBtn"> <v-icon icon="mdi-check"></v-icon> تم التسليم
                </v-tab>

            </v-tabs>


        </v-card>
    </div>

</template>
<style>
.TapBtn {
    font-size: 24px;
}

.v-tabs--density-default {
    --v-tabs-height: 100px !important;
}
</style>
