<template>
  <div>
        <div v-show="type == 'picture'" class="tab-header-configure">
            <img src="@/assets/images/configure.png" />
            <div class="tab-header-configure-title">
            <p>Picture</p>
            <span>Select and edit picture</span>
            </div>
        </div>
        <div v-show="type == 'paper'" class="tab-header-configure">
            <img src="@/assets/images/configure.png" />
            <div class="tab-header-configure-title">
            <p>Paper & Canvas</p>
            <span>Select the best option for you</span>
            </div>
        </div>
        <div v-show="type == 'matting'" class="tab-header-configure">
            <img src="@/assets/images/configure.png" />
            <div class="tab-header-configure-title">
            <p>Matting</p>
            <span>Select matting size</span>
            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  type: String
});

// Access the prop value
const type = props.type;

</script>
