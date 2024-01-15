<template>
  <div class="contact-to-email">
    <p>Do you have any question? Contact us at</p>
    <span>{{ email }}</span>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  email: String, // Define the prop and its type
});

// Access the prop value
const email = props.email;
</script>
