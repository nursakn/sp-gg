import type { CurrencyRates } from '@/entities/currency/model';

export const currencyApi = {
  async fetchRates(): Promise<CurrencyRates> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/currency`);

    if (!response.ok) {
      throw new Error('Failed to fetch currency rates');
    }

    return response.json();
  },
};
