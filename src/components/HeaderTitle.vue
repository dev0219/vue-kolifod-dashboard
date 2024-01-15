<template>
  <div class="header-title">
   {{ title }}
    <div class="sub-title">
      {{ subtitle }}
    </div>
   
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  title: String, // Define the prop and its type
  subtitle: String
});

// Access the prop value
const title = props.title;
const subtitle = props.subtitle;
</script>
