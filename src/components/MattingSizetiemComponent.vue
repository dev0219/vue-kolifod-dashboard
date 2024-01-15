<template>
   <div class="matting-size-item">
        <InputText :id="props.id"/>
        <label :for="props.id">{{ props.title }}</label>
    </div>
</template>

<script lang="ts" setup>

import {defineProps} from "vue";
const props = defineProps({
  id: String,
  title: String
});

</script>
