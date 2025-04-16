<script setup lang="ts">
import { CURRENCIES, type Currency } from '@/entities/currency/model';

const currency = defineModel<Currency>('currency', { required: true });
const value = defineModel<number>('value', { required: true });
</script>

<template>
  <div class="wrapper">
    <input type="number" class="input" v-model="value" />
    <div class="divider" />
    <select class="select" v-model="currency">
      <option v-for="currency in CURRENCIES" :key="currency" :value="currency">
        {{ currency.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  padding: 1px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  border-radius: 6px;
  transition: border-color 0.2s ease;
}

.wrapper:focus-within {
  border-color: var(--color-border-hover);
}

.divider {
  position: absolute;
  left: 50%;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background-color: var(--color-border);
}

.input {
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  height: 40px;
  width: 100px;
  outline: none;
  padding-left: 8px;
}

.select {
  padding-left: 8px;
  flex: 1;
  background-color: var(--color-background);
  border: none;
  color: var(--color-text);
  outline: none;
  width: 100px;
}
</style>
