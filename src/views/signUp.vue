<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          v-model="Name"
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          v-model="Email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="Password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          v-model="PasswordCheck"
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>
<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      Name: "",
      Email: "",
      Password: "",
      PasswordCheck: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await authorizationAPI.signup({
          name: this.Name,
          email: this.Email,
          password: this.Password,
          passwordCheck: this.PasswordCheck,
        });
        this.$router.push("/signin");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法sign up，請稍後再試",
        });
      }
    },
  },
};
</script>
