<template>
  <div class="account-home">
      <HeaderTitle title="Your Account" />
      <AccountCardComponent title="Your Order" src="order.png" :menus="menu1" />
      <AccountCardComponent title="Your Account" src="account.png" :menus="menu2" />  
  </div>
</template>

<script lang="ts" setup>
import HeaderTitle from "@/components/HeaderTitle.vue";
import AccountCardComponent from "@/components/AccountCardComponent.vue";
const menu1 = ['track order'];
const menu2 = ['chnage delivery addresses', 'chnage registration data'];
</script>