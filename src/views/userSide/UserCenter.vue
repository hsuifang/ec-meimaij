<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <h2 class="fs-6">鎂麥 / 會員中心</h2>
    </template>
  </PageTitle>
  <div class="container pt-0 pb-4 py-lg-5">
    <div class="row gx-lg-5">
      <div class="col-lg-3">
        <h3
          class="
            fs-6
            fw-bold
            d-none d-lg-block
            p-lg-3
            bg-light
            border-start border-primary border-4
          "
        >
          會員中心
        </h3>

        <ul class="ps-1 productType-select p-lg-4">
          <li
            class="mb-3"
            v-for="content in contentList"
            :key="content.pathname"
            @click.prevent="
              $router.push({ name: content.pathname });
              contentSelected = content.pathname;
            "
          >
            <a
              href="#"
              class="w-100 d-block"
              :class="{ 'text-primary': contentSelected === content.pathname }"
              @click.prevent
              >{{ content.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/layout/PageTitle.vue';

export default {
  name: 'userCenter',
  components: {
    PageTitle,
  },
  data() {
    return {
      contentSelected: 'orderList',
      contentList: [
        {
          title: '我的最愛',
          pathname: 'userFavorite',
        },
        {
          title: '購買紀錄',
          pathname: 'orderHistory',
        },
      ],
    };
  },
  computed: {
    routerContentSelected() {
      return this.$route.name;
    },
  },
  watch: {
    routerContentSelected(val) {
      this.contentSelected = val;
    },
  },
  mounted() {
    this.contentSelected = this.contentList.find(
      (content) => content.pathname === this.$route.name,
    )?.pathname;
  },
};
</script>
