<template>
  <div class="cart-amount">
      <p class="unit">{{ props.unit }}</p><p class="amount"> {{ props.amount }} </p> 
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; 
const props = defineProps({
  unit: String,
  amount: String
});

</script>
