<template>
  <div class="contact-container">
    <div>
      <HeaderTitle title="Get in touch" subtitle="with Killford Studios" />
      <div class="contact-description">
        Most of the information is available on our website, however if you can't find what you're looking for, have other
        inquiries or just want to send us some good vibes, don't be shy and reach out!
      </div>
      <InputTextComponent title="First Name *" id="firstname"/>
      <InputTextComponent title="Email *" id="email"/>
      <DropdownComponent :selectedSubject="selectedSubject" :subjectSelections="subjectSelections" />
      <TextareaElement rows="5" cols="30"/>      
      <ButtonComponent label="SEND" class="button-2" severity="success"/>
    </div>    
  </div>
</template>

<script lang="ts" setup>
import HeaderTitle from "@/components/HeaderTitle.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import ContactToEmail from "@/components/ContactToEmail.vue";
import DropdownComponent from "@/components/DropdownComponent.vue";
import {ref} from "vue";

const value = ref("");
const selectedSubject = ref();
const subjectSelections = ref([
    { name: 'Info', code: '1' },
    { name: 'Framing/Mounting', code: '2' },
    { name: 'Digital Capture', code: '3' },
    { name: 'Printing', code: '4' }
]);

</script>
