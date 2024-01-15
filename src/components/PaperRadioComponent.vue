<template>
  <div class="paper-radio-action">
      <input type="radio" v-model="ingredient" :id="radioName" :name="val" :value="val" />
      <label :for="radioName">{{ radioName }}</label>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps, defineEmits, watch, ref} from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  val: String, // Define the prop and its type
  radioName: String,
  ingredient: String
});

const emits = defineEmits(['updateRadio']);

const ingredient = ref(props.ingredient);
console.log("----ingredient ", ingredient)
// Access the prop value
const val = props.val;
const radioName = props.radioName;
watch(ingredient, async (newVal, oldVal) => {
  emits('updateRadio', newVal)
  console.log("-0-", ingredient.value)
  console.log(val)
})

</script>
