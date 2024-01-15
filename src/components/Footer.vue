<template>
  <div class="custom-footer">
    <!-- Your footer content goes here -->
    <div class="footer-content">
      <!-- Content within the footer -->
      <p>This is the footer content.</p>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/footer.scss"></style>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

type RoutePage = { title: string; route: string };

const activePage = ref({
  title: "Dashboard",
  route: "dashboard",
});

const pageList = [
  {
    title: "Dashboard",
    route: "dashboard",
  },
  {
    title: "contact me",
    route: "contact",
  },
];

const router = useRouter();

router.afterEach((to) => {
  activePage.value = pageList.find(
    (page) => page.route == to.name
  ) as RoutePage;
});

function changePage(page: RoutePage): void {
  // activePage.value = page;

  router.replace({ name: page.route });
}
</script>
