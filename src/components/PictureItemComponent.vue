<template>
  <div class="picture-item">
      <img :src="require(`@/assets/images/${url}`)" />
      <Badge v-show="iserror == 'true'" value="!" severity="danger"></Badge>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  url: String, // Define the prop and its type
  iserror: Boolean,
});

// Access the prop value
const url = props.url;
const iserror = props.iserror;
</script>
