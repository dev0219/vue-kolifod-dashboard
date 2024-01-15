<template>
  <div class="account-card-container">
    <div class="card-body">
      <img alt="user" :src="require(`@/assets/images/${src}`)" />
     <div class="card-side" >
       <div class="card-header-title">
        {{ title }}
       </div>
       <div class="card-menu-title"  v-for="menu in menus" v-bind:key="menu">
         {{ menu }}
       </div>
     </div>
     <div/>
    </div>     
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  title: String, // Define the prop and its type
  src: String,
  menus: Array
});

// Access the prop value
const title = props.title;
const src = props.src;
const menus = props.menus;
console.log("--- menyu")
console.log(typeof menus)
</script>
