<template>
  <div class="container py-5">
    <form
      @submit.stop.prevent="currentUserSubmit"
      @goto-UserEdit="gotoUserEdit"
    >
      <div class="form-group">
        <label for="name">Name{{ currentUser.name }}</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="currentUser.name"
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
        <img :src="currentUser.image" alt="" width="100" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
const DummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "UserEdit",
  data() {
    return {
      currentUser: {},
    };
  },
  created() {
    this.fetchCurrentUser();
  },
  methods: {
    fetchCurrentUser() {
      const { currentUser } = DummyUser;
      const { name, image } = currentUser;
      this.currentUser = {
        name,
        image:
          image || "https://via.placeholder.com/350x220/DFDFDF?text=No+Image",
      };

      // this.currentUser = {
      //   ...this.CurrentUser,
      // };
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
    currentUserSubmit(e) {
      const form = e.target; // <form></form>
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
