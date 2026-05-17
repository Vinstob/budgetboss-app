import { CURRENCIES } from '../constants';

// Monedas sin decimales
const NO_DECIMAL_CURRENCIES = [
  'PYG', // Guaraní Paraguayo
  'JPY', // Yen Japonés
  'KRW', // Won Coreano
  'VND', // Dong Vietnamita
  'ISK', // Króna Islandesa
  'CLP', // Peso Chileno
  'TWD', // Dólar Taiwanés
  'PHP', // Peso Filipin
  'INR', // Rupia India
  'BHD', // Dinar Bahreiní
  'JOD', // Dinar Jordano
  'KWD', // Dinar Kuwaití
  'OMR', // Rial Omaní
  'TND', // Dinar Tunecino
  'UYW', // Unidad de Fomento Uruguaya
];

export const formatCurrency = (amount, currencyCode = 'USD') => {
  const currencyInfo = CURRENCIES.find(c => c.code === currencyCode);

  if (!currencyInfo) {
    return `$${amount.toFixed(2)}`;
  }

  // Determinar si usa decimales
  const useDecimals = !NO_DECIMAL_CURRENCIES.includes(currencyCode);

  // Formatear número
  let formattedNumber;
  if (useDecimals) {
    // Con decimales: 1000.50
    formattedNumber = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } else {
    // Sin decimales: 10.000
    formattedNumber = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount));
  }

  return `${currencyInfo.symbol} ${formattedNumber}`;
};

export const formatCurrencySymbol = (amount, currencyCode = 'USD') => {
  const currencyInfo = CURRENCIES.find(c => c.code === currencyCode);

  if (!currencyInfo) {
    return amount.toFixed(2);
  }

  const useDecimals = !NO_DECIMAL_CURRENCIES.includes(currencyCode);

  let formattedNumber;
  if (useDecimals) {
    formattedNumber = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } else {
    formattedNumber = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount));
  }

  return formattedNumber;
};
