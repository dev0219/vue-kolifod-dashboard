<template>
  <div class="matting-color-item" :style="'background:'+props.color+';border: 1px solid gray;'">
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; 
const props = defineProps({
  color: String,
});

</script>
