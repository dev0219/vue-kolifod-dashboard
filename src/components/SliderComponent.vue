<template>
  <div class="default-matting-opt" v-show="props.advancedOptionVisible">
      <p class="individual-matting-header-title">Matting Size</p>
      <input type="range" id="slider" v-model="sliderValue" @input="updateTooltip" @mouseenter="showTooltip" @mouseleave="hideTooltip" max="100" min="0">
      <div id="tooltip" v-show="tooltipVisible" :style="{ left: tooltipLeft + 'px' }">{{ sliderValue }}</div>
      <div class="triangle triangle-top" v-show="tooltipVisible" :style="{ 'margin-left': tooltipLeft + 'px' }"></div>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps, defineEmits, watch, ref } from 'vue'; // Import the defineProps function from Vue

const props = defineProps({
  sliderValue: Number,
  tooltipLeft: Number,
  advancedOptionVisible: Boolean,
  tooltipVisible: Boolean
});



// const emits = defineEmits(['update']);

const sliderValue = ref(props.sliderValue);
const tooltipLeft = ref(props.tooltipLeft);
const tooltipVisible = ref(props.tooltipVisible);

function updateTooltip() {
  tooltipVisible.value = true;
  updateTooltipPosition();
}

function showTooltip() {
  tooltipVisible.value = true;
  updateTooltipPosition();
}

function hideTooltip() {
  tooltipVisible.value = false;
  updateTooltipPosition();
}

function updateTooltipPosition() {
  const slider = document.getElementById('slider');
  const tooltip = document.getElementById('tooltip');
  const thumbSize = 16; // Adjust this value based on your slider's thumb size
  
  if (slider && tooltip) {
    const denominator = slider.max - slider.min;
    
    if (denominator !== 0) {
      const thumbPosition = (sliderValue.value / denominator) * (slider.offsetWidth - thumbSize);
      tooltipLeft.value = thumbPosition + slider.offsetLeft - (slider.offsetWidth / 2) + thumbSize / 2;
      console.log(thumbPosition);
    } else {
      console.error("Denominator is zero. Check the slider's min and max values.");
    }
  } else {
    console.error("Slider or tooltip element not found.");
  }
}

</script>
