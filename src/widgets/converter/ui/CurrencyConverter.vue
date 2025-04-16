<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { CurrencyInput } from '@/shared/ui/CurrencyInput';
import { useCurrencyConversion } from '@/features/currency-conversion';

const {
  currency1,
  value1,
  currency2,
  value2,
  isLoading,
  error,
  fetchRates,
  updateFirstCurrency,
  updateSecondCurrency,
} = useCurrencyConversion();

onBeforeMount(fetchRates);
</script>

<template>
  <div class="container">
    <div v-if="isLoading">Loading currency rates...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else>
      <CurrencyInput
        v-model:currency="currency1"
        v-model:value="value1"
        @update:value="updateFirstCurrency"
      />
      <CurrencyInput
        v-model:currency="currency2"
        v-model:value="value2"
        @update:value="updateSecondCurrency"
      />
    </template>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.error {
  color: red;
}
</style>
