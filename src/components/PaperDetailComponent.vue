<template>
  <div class="paper-canvas-detail">
      <div class="paper-canvas-picture">
          <img  :src="require(`@/assets/images/${url}`)"  />
      </div>
      <div class="paper-canvas-descripiton">
          {{ description }}
      </div>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  url: String, // Define the prop and its type
  description: String
});

const url = props.url;
const description = props.description;

</script>
