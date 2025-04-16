<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppHeader } from '@/widgets/header';
</script>

<template>
  <div class="app">
    <AppHeader />
    <RouterView />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
