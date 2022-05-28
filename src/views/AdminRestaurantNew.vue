<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <!-- <h1>餐廳表單</h1> -->

    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :isProcessing="isProcessing"
    />
  </div>
</template>
<script>
/* eslint-disable */
// import AdminRestaurantForm from "../components/AdminRestaurantForm";
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.create({ formData });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "ADMIN-RESTAURANTS" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>
