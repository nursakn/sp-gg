export type Currency = 'usd' | 'eur' | 'rub' | 'kzt';
export type CurrencyPair = `${Currency}-${Currency}`;
export type CurrencyRates = Record<CurrencyPair, number>;

export const CURRENCIES: Currency[] = ['usd', 'eur', 'rub', 'kzt'] as const;

export function formatCurrencyPair(from: Currency, to: Currency): CurrencyPair {
  return `${from}-${to}` as const;
}
