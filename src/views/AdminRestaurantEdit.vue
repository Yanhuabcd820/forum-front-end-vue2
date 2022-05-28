<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
/* eslint-disable */
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchAdminRestaurantEdit(id);
  },

  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    // console.log(id);
    this.fetchAdminRestaurantEdit(id);
    next();
  },
  methods: {
    async fetchAdminRestaurantEdit(restaurantId) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });
        // console.log(restaurantId);
        // console.log(data);
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
        };
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },

    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "ADMIN-RESTAURANTS" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法修改餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>