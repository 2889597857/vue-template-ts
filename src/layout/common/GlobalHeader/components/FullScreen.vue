<template>
  <button @click="toggle">123</button>
</template>
<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

const { isFullscreen: _isFullscreen, toggle } = useFullscreen();
</script>
