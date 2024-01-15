<template>
  <div class="dropdown-container">
      <label>Subject</label>
      <Dropdown v-model="selectedSubject" :options="props.subjectSelections" optionLabel="name" placeholder="Select one..." class="custom-dropdown" />
  </div>
</template>

<script lang="ts" setup>
 import { defineProps, ref } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  selectedSubject: String,
  subjectSelections: Array
});
const selectedSubject = ref(props.selectedSubject);
</script>
