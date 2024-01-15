<template>
  <div class="qty-container">
      <p>Qty.</p>
      <InputNumber v-model="localQty" showButtons buttonLayout="horizontal" min="0">
          <template #incrementbuttonicon>
              <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
              <span class="pi pi-minus" />
          </template>
      </InputNumber> 
  </div>
</template>

<script lang="ts" setup>
 import { defineProps, defineEmits, watch, ref } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  qty: Number,
});

const emits = defineEmits(['update']);

const localQty = ref(props.qty);

watch(localQty, async (newVal, oldVal) => {
  emits('update', newVal)
})

</script>
