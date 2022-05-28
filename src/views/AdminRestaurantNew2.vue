<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <!-- <h1>餐廳表單</h1> -->

    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>
<script>
/* eslint-disable */
// import AdminRestaurantForm from "../components/AdminRestaurantForm";
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  // data() {},
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
