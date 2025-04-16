import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Currency, CurrencyRates } from '@/entities/currency/model';
import { currencyApi } from '@/shared/api/currency';
import { formatCurrencyPair } from '@/entities/currency/model';

export function useCurrencyConversion() {
  const currency1 = ref<Currency>('usd');
  const value1 = ref<number>(1);
  const currency2 = ref<Currency>('rub');
  const value2 = ref<number>(1);

  const currencyRates = ref<CurrencyRates>();
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const getExchangeRate = (from: Currency, to: Currency): number => {
    if (!currencyRates.value) return 1;
    return currencyRates.value[formatCurrencyPair(from, to)] ?? 1;
  };

  async function fetchRates() {
    try {
      isLoading.value = true;
      currencyRates.value = await currencyApi.fetchRates();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error occurred';
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  }

  function updateCurrencyValue(value: number, fromCurrency: Currency, toCurrency: Currency, valueRef: Ref<number>, otherValueRef: Ref<number>) {
    if (!value) {
      valueRef.value = 0;
      return;
    }

    valueRef.value = value;

    if (value <= 0) {
      otherValueRef.value = 0;
      return;
    }

    otherValueRef.value = value * getExchangeRate(fromCurrency, toCurrency);
  }

  function updateFirstCurrency(value: number) {
    updateCurrencyValue(value, currency1.value, currency2.value, value1, value2);
  }

  function updateSecondCurrency(value: number) {
    updateCurrencyValue(value, currency2.value, currency1.value, value2, value1);
  }


  return {
    currency1,
    value1,
    currency2,
    value2,
    isLoading,
    error,
    fetchRates,
    updateFirstCurrency,
    updateSecondCurrency,
  };
}
