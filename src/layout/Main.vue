<template>
  <div class="min-vh-90">
    <Header />
    <router-view></router-view>
  </div>
  <Footer />
  <div class="position-fixed bottom-0 end-0 translate-middle shadow rounded-circle">
    <a href="https://lin.ee/Z3ZDysc" target="_blank">
      <img
        alt="line-icon"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1626623376875.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NuP2MaN06dU7ch7RwcJiLLtZpPlZF4hhDP0sClx4s744nLXLN2tZX29nc23ye3VTPPizT7EFwFjNXSbyAMwC3IRA27gpDVOnQm%2BHNrNp3LCaV%2FQj6ucwSxJeUfWv5f4mmC78%2BkkQ%2BaBUXPSz9JFvTY41quOnMY0eot1xxFB0vDxSsPIrgnct1tfPyvPnmoglDJE19ttvpQlcjYCnF2GXibvUvPXes5sIInCZD7p0N070GUUsNTdoym7xLoMekKRcDudIK8TBSNs9MotM0cMDh8j9XXYFoCt5wlghXnMCNqIlCKLcI4EuXdfzyto%2BbLVVHIKPMfzJe9hMNtVxVilYcA%3D%3D"
      />
    </a>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'clientSideMainLayout',
  components: {
    Header,
    Footer,
  },
};
</script>
