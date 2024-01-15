<template>
  <div class="container-home">
    <HeaderTitle title="Home Page" />
    <ButtonComponent label="login" class="button-1" severity="success"/>
    <ButtonComponent label="register" class="button-1" severity="success"/>
    <ButtonComponent label="my account" class="button-1" severity="success"/>
    <ButtonComponent label="order print" class="button-1" severity="success"/>
  </div>
</template>

<script lang="ts" setup>
import HeaderTitle from "@/components/HeaderTitle.vue";
</script>
