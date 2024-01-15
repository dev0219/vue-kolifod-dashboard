<template>
  <div class="file-drop" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop">
    <div class="drag-drop-tag">
      <img src="@/assets/images/drag.png" />
      <HeaderTitle title="Drag & Drop Your Image Here" />
      <div class="file-upload-terms">
         <p class="file-types">JPG/TIF, min</p><p class="file-size">700 x 700</p><p class="file-types">px, max</p><p class="file-size">50,000 x 50,000</p>
         <p class="file-types">px or</p><p class="file-size">1,000 </p><p class="file-types">MP, max </p><p class="file-size">2</p>
          <p class="file-types">GB. We save uploaded photos in your customer account for</p><p class="file-size">90</p><p class="file-types">days.</p>
          <p class="muda-texto">MUDAR TEXTO</p>
      </div>
    </div>
    <input type="file" ref="fileInput" @change="handleFileSelect" style="display: none" />
    <p>OR</p>
    <FileUploadComponent />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HeaderTitle from "@/components/HeaderTitle.vue";
import FileUploadComponent from "@/components/FileUploadComponent.vue";

const files = ref([] as File[]);

const handleDragOver = (event: DragEvent) => {
  event.dataTransfer!.dropEffect = 'copy';
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  handleFiles(event.dataTransfer!.files);
};

const handleFileSelect = () => {
  const input = ref.value as HTMLInputElement;
  if (input.files) {
    handleFiles(input.files);
  }
};

const handleFiles = (fileList: FileList) => {
  files.value = Array.from(fileList);
  console.log("--- files", files.value)
  // Handle the files as needed, e.g., upload to a server, process locally, etc.
};
</script>