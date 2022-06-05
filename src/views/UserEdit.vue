<template>
  <div class="container py-5">
    <form @submit.stop.prevent="currentUserSubmit">
      <!-- @goto-UserEdit="gotoUserEdit" -->
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleCurrentUserImg"
        />
        <img :src="user.image" alt="" width="100" />
      </div>

      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "處裡中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  name: "UserEdit",
  data() {
    return {
      user: {},
      isCurrentUser: false,
      isProcessing: false,
    };
  },
  created() {
    this.setUser();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    setUser() {
      const { id } = this.$route.params;
      if (id !== this.currentUser.id) {
        this.$router.push("*");
      }
      this.user = this.currentUser;
    },
  
    handleCurrentUserImg(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.currentUser.image = imageURL;
      }
    },
    async currentUserSubmit(e) {
      try {
        this.isProcessing = true;
        const form = e.target; // <form></form>
        if (this.user.name === "") {
          this.isProcessing = false;
          Toast.fire({
            type: "warning",
            title: "請填寫姓名",
          });
          return;
        }
        const formData = new FormData(form);
        await userAPI.update({
          userId: this.user.id,
          formData,
        });
        this.$router.push({ name: "USER", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "無法增加追蹤",
        });
      }
    },
  },
};
</script>
