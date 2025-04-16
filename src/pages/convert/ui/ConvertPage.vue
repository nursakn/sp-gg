<script setup lang="ts">
import { CurrencyConverter } from '@/widgets/converter';
</script>

<template>
  <main class="wrapper">
    <CurrencyConverter />
  </main>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
}
</style>
