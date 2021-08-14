<template>
  <swiper
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    class="home-swiper"
  >
    <swiper-slide v-for="item in covers" :key="item.id">
      <div
        class="swiper-content"
        :style="{
          backgroundImage: `url(${item.url})`,
        }"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-1">
              <div class="slider-text">
                <h2 class="mb-3">{{ item.content.title }}</h2>
                <h5 class="mb-4" v-html="item.content.text"></h5>
                <router-link to="products" class="btn btn-primary text-white px-4"
                  >前往購物</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <!-- </a> -->
      </div>
    </swiper-slide>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      covers: [
        {
          id: 1,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1626620821803.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MwCbbuSMJiGyC8UWMMVXtzoTMfkYxpEoQiysFaZwn3mOmQkbbL01qgB%2BDOUC23q4pk7gkbhM9VN0hPCvTfbn%2B712G8DHjRUL5BlmfvYSV1bMVPZTsJ%2BCjpf0o8HonUlH66dngO%2Fwr8%2B7Trs%2FBUgDnTGy4F8b4X3lyO0NfWqEXN7gjh%2F07l3JjTjZn%2BqQMuZGYlbYQgj8KC%2FAfm3eWOyrqpzcpkZUNBKCmoy1L6ZhI%2FZ7Y19VdqfZQzl4DxZoujazOzLhBT%2BsW3%2FGTGo3YwlPxA%2FKENfkZ6RDx3l00OV2gEuLT8hRAM9YoiixtBEnoaIRXioyPReFpmNW5Qz61ZpUlw%3D%3D',
          content: {
            title: '限時購買免運',
            text: '常溫商品滿NT$ 699<br>冷凍商品滿NT$ 1799',
          },
        },
        {
          id: 2,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1626620830889.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pQXR9sM553gCkOWY09aN0Zxp3PXeUj%2F4mEW3xoBdU4k7acGRFmp9TJzW1KQ2zXG2kgsqv6ak200hYEWAPKXJdazvC8dw9ngXmHqfwcC48JVRtyd77PUpPNFfuZO0BUboH4q%2BKJzQ55%2BT1fTHZMeXjGD2YQqxTCXmgrTKTvwSJP9tlgY7uGQoH8zGLwjzQXeykX2NV5aupApg3DjeeoL%2Bx0dvnMUhVjEIOk9vil5RGM1Njks9ySqb5C805SByhM7QlbR5AN%2B0cNwDZFyg8uFctXDDNy%2FWXk1n1eSs3J0f9DVAY5EWWphRUMEkHSZHirurJJ72YafjZ9PaQL%2B%2BksR5YA%3D%3D',
          content: {
            title: '生食產品新上市',
            text: '低溫高壓滅菌<br>寶貝健康從天然食物',
          },
        },
        {
          id: 3,
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1626620833294.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cGh5aYch6twsYmDg133PVI7oH2cwpW3BxUxEP2YsagLeALFAsJeVkkNGSzt16f9QSdR92Q9aM8aGIj%2BdFAAJPeeZsTE5nT9WtU0WqgF1F0CQ3VssH%2F5DUudRZeNOmNpHPnNMX%2BdhVEI3AB8YRGWnXmnijL8umUmevJGBAcGdRz2fIZwuDMOfpqLjUiUDk6JWOdskmNfN4xrqOvob1iZ0taVVIExDylSNsh%2BaC1iKpW%2Bnyn%2FD4y5oKQiJ9BVuDKIW%2FZQHe%2Ft%2BenhmqhDVsVuw68xDu7xewx%2B%2BuyfFvauxUCVMbGkmpoYqhPxR8gcR%2FyxZPsZAqa3zI%2FVeWaHuYZUbaw%3D%3D',
          content: {
            title: '零食產品新上市',
            text: '雞胸肉原肉乾<br>頂級豬肉原肉乾',
          },
        },
      ],
    };
  },
};
</script>
