<template>
  <div class="input-text-component">
      <label :for="id">{{ title }}</label>
      <Password  v-model="value" :id="id" toggleMask/>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue
import { ref } from 'vue';

const value = ref(null);

const props = defineProps({
  title: String, // Define the prop and its type
  id: String
});

// Access the prop value
const title = props.title;
const id = props.id;
</script>
