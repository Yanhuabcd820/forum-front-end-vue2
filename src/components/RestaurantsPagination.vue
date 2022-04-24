<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{ name: 'RESTAURANTS', query: { categoryId, page: prev } }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li
        :class="['page-item', { active: currentPage === page }]"
        v-for="page in totalPage"
        :key="page"
      >
        <router-link
          class="page-link"
          :to="{ name: 'RESTAURANTS', query: { categoryId, page } }"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li
        :class="['page-item', { disabled: currentPage === totalPage.length }]"
      >
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{ name: 'RESTAURANTS', query: { categoryId, page: next } }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "RestaurantsPagination",
  props: {
    categoryId: {
      type: [Number, String],
      default: "",
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Array,
      require: true,
    },
    prev: {
      type: Number,
      require: true,
    },
    next: {
      type: Number,
      require: true,
    },
  },
};
</script>
