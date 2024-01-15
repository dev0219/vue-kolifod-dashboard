<template>
  <div>
    <router-view class="" v-slot="{ Component }">
      <transition name="scale-slide">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style lang="scss" src="@/assets/scss/dashboard.scss"></style>

<script lang="ts" setup>
import Footer from "@/components/Footer.vue";
// import { ref } from "vue";
// import { useRouter } from "vue-router";

// type RoutePage = { title: string; route: string };

// const activePage = ref({
//   title: "Dashboard",
//   route: "dashboard",
// });

// const pageList = [
//   {
//     title: "Dashboard",
//     route: "dashboard",
//   },
//   {
//     title: "contact me",
//     route: "contact",
//   },
// ];

// const router = useRouter();

// router.afterEach((to) => {
//   activePage.value = pageList.find(
//     (page) => page.route == to.name
//   ) as RoutePage;
// });

// function changePage(page: RoutePage): void {
//   // activePage.value = page;

//   router.replace({ name: page.route });
// }
</script>
