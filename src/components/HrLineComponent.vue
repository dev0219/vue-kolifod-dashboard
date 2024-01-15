<template>
  <div class="hr-line-container">
    <hr />
      <div>{{ title }}</div>
    <hr />
  </div>
</template>

<style lang="scss" src="@/assets/scss/footer.scss"></style>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  title: String, // Define the prop and its type
});

// Access the prop value
const title = props.title;
</script>
