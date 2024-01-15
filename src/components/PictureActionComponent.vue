<template>
  <div class="picture-action-item">
      <div>
          <img :src="require(`@/assets/images/${src}`)" />
          <p>{{ title }}</p>
      </div>                            
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  title: String, // Define the prop and its type
  src: String,
});

// Access the prop value
const title = props.title;
const src = props.src;
</script>
