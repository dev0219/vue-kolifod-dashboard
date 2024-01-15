<template>
  <div class="login-home">
    <div>
      <HeaderTitle title="Account Registration" />
      <InputTextComponent title="First Name *" id="firstname"/>
      <InputTextComponent title="Last Name *" id="lastname"/>
      <InputTextComponent title="Email Address *" id="email"/>
      <InputPasswordComponent title="Password *" id="password"/>
      <InputPasswordComponent title="Verify Password *" id="verifypassword"/>
      <ButtonComponent label="register" class="button-2" severity="success"/>
      <ContactToEmail email="test.email.com" />
    </div>    
  </div>
</template>

<script lang="ts" setup>
import HeaderTitle from "@/components/HeaderTitle.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import InputPasswordComponent from "@/components/InputPasswordComponent.vue";
import ContactToEmail from "@/components/ContactToEmail.vue";
</script>