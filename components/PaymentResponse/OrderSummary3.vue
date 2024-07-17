<template>
  <div class="px-4 py-6" style="background-color: #f1f1f1; border-radius: 12px">
    <div class="mb-4">
      <p style="font-size: 24px">ملخص الطلب</p>
    </div>

    <hr class="my-4" style="border: 1px solid #ffffff" />
    <div class="textPart">
      <div class="d-flex justify-space-between mb-6">
        <p style="color: #939393; font-size: 20px">المجموع الفرعي (4 منتج )</p>
        <p style="font-size: 20px">26458.00 ر.س</p>
      </div>

      <div class="d-flex justify-space-between mb-6">
        <p style="color: #939393; font-size: 20px">رسوم الدفع عند الاستلام</p>
        <p style="font-size: 20px">10.00 ر.س</p>
      </div>

      <div
        class="d-flex justify-space-between text-red mb-4"
        style="font-size: 20px"
      >
        <p>نقاطك</p>
        <p>10.00 ر.س</p>
      </div>

      <div class="d-flex justify-space-between mb-6" style="color: #038e5c">
        <p style="font-size: 20px">الخصم</p>
        <p style="font-size: 20px">10.00 ر.س</p>
      </div>

      <div
        class="d-flex justify-space-between text-red mb-12"
        style="font-size: 20px"
      >
        <p>القيمة المضافة</p>
        <p>14.00 ر.س</p>
      </div>
    </div>

    <div
      class="d-flex justify-space-between px-4 py-4 mb-4"
      style="
        color: var(--mainColor);
        background-color: #c2d3e3;
        border-radius: 8px;
        height: 65px;
      "
    >
      <p>الاجمالي <span>(شاملا ً ضريبة القيمة المضافة)</span></p>
      <p>س.ر 26488.0</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const svgStyle = computed(() => {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "var(--btnColor)",
    height: "100%",
    width: "20%",
    borderTopLeftRadius: locale.value === "ar" ? "8px" : "0",
    borderTopRightRadius: locale.value === "ar" ? "0" : "8px",
    borderBottomLeftRadius: locale.value === "ar" ? "8px" : "0",
    borderBottomRightRadius: locale.value === "ar" ? "0" : "8px",
    padding: "20px",
    left: locale.value === "ar" ? "0" : "auto",
  };
});
</script>
<style scoped>
input::placeholder {
  color: #c5c5c5;
}
</style>
