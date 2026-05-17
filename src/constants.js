// Categorías de gastos
export const EXPENSE_CATEGORIES = [
  { id: 'food', name: 'Comida y Restaurantes', icon: '🍔', color: '#FF6B6B' },
  { id: 'transport', name: 'Transporte', icon: '🚗', color: '#4ECDC4' },
  { id: 'housing', name: 'Vivienda', icon: '🏠', color: '#45B7D1' },
  { id: 'health', name: 'Salud', icon: '💊', color: '#96CEB4' },
  { id: 'shopping', name: 'Compras', icon: '🛍️', color: '#FFEAA7' },
  { id: 'entertainment', name: 'Entretenimiento', icon: '🎬', color: '#DDA15E' },
  { id: 'education', name: 'Educación', icon: '📚', color: '#BC6C25' },
  { id: 'hobby', name: 'Hobby', icon: '🎮', color: '#B8E6D5' },
  { id: 'beauty', name: 'Belleza', icon: '💇', color: '#FFB4D2' },
  { id: 'family', name: 'Gastos Familiares', icon: '👨‍👩‍👧', color: '#C9ADA7' },
  { id: 'kids', name: 'Gastos de Hijos', icon: '🎓', color: '#9A8C98' },
  { id: 'work', name: 'Gastos de Trabajo', icon: '💼', color: '#6C757D' },
  { id: 'inventory', name: 'Inventario/Materiales', icon: '📦', color: '#495057' },
  { id: 'phone', name: 'Teléfono e Internet', icon: '📱', color: '#17A2B8' },
  { id: 'subscriptions', name: 'Suscripciones', icon: '💳', color: '#FFC300' },
  { id: 'insurance', name: 'Seguros', icon: '🏥', color: '#E74C3C' },
  { id: 'gifts', name: 'Regalos', icon: '🎁', color: '#9B59B6' },
  { id: 'maintenance', name: 'Mantenimiento/Reparaciones', icon: '🔧', color: '#34495E' },
  { id: 'other', name: 'Otros', icon: '📌', color: '#95A5A6' }
];

// Divisas principales (con Paraguay primero)
export const CURRENCIES = [
  { code: 'PYG', name: 'Guaraní Paraguayo', symbol: '₲', flag: '🇵🇾' },
  { code: 'USD', name: 'Dólar Estadounidense', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'ARS', name: 'Peso Argentino', symbol: '$', flag: '🇦🇷' },
  { code: 'MXN', name: 'Peso Mexicano', symbol: '$', flag: '🇲🇽' },
  { code: 'CLP', name: 'Peso Chileno', symbol: '$', flag: '🇨🇱' },
  { code: 'COP', name: 'Peso Colombiano', symbol: '$', flag: '🇨🇴' },
  { code: 'PEN', name: 'Sol Peruano', symbol: 'S/', flag: '🇵🇪' },
  { code: 'BRL', name: 'Real Brasileño', symbol: 'R$', flag: '🇧🇷' },
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Yen Japonés', symbol: '¥', flag: '🇯🇵' },
  { code: 'CAD', name: 'Dólar Canadiense', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Dólar Australiano', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CHF', name: 'Franco Suizo', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CNY', name: 'Yuan Chino', symbol: '¥', flag: '🇨🇳' },
  { code: 'INR', name: 'Rupia India', symbol: '₹', flag: '🇮🇳' },
  { code: 'SGD', name: 'Dólar Singapurense', symbol: 'S$', flag: '🇸🇬' },
  { code: 'HKD', name: 'Dólar de Hong Kong', symbol: 'HK$', flag: '🇭🇰' },
  { code: 'NZD', name: 'Dólar Neozelandés', symbol: 'NZ$', flag: '🇳🇿' },
  { code: 'SEK', name: 'Corona Sueca', symbol: 'kr', flag: '🇸🇪' },
  { code: 'NOK', name: 'Corona Noruega', symbol: 'kr', flag: '🇳🇴' },
  { code: 'DKK', name: 'Corona Danesa', symbol: 'kr', flag: '🇩🇰' },
  { code: 'PLN', name: 'Zloty Polaco', symbol: 'zł', flag: '🇵🇱' },
  { code: 'CZK', name: 'Corona Checa', symbol: 'Kč', flag: '🇨🇿' },
  { code: 'HUF', name: 'Florín Húngaro', symbol: 'Ft', flag: '🇭🇺' },
  { code: 'RON', name: 'Leu Rumano', symbol: 'lei', flag: '🇷🇴' },
  { code: 'BGN', name: 'Lev Búlgaro', symbol: 'лв', flag: '🇧🇬' },
  { code: 'HRK', name: 'Kuna Croata', symbol: 'kn', flag: '🇭🇷' },
  { code: 'RUB', name: 'Rublo Ruso', symbol: '₽', flag: '🇷🇺' },
  { code: 'TRY', name: 'Lira Turca', symbol: '₺', flag: '🇹🇷' },
  { code: 'ZAR', name: 'Rand Sudafricano', symbol: 'R', flag: '🇿🇦' },
  { code: 'AED', name: 'Dirham Emiratí', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'SAR', name: 'Riyal Saudí', symbol: '﷼', flag: '🇸🇦' },
];

// Tipos de planes
export const PLAN_TYPES = {
  FREE: 'free',
  PRO: 'pro'
};

// Características por plan
export const PLAN_FEATURES = {
  free: {
    name: 'Gratis',
    price: 0,
    expenses: true,
    history: true,
    basicStats: true,
    sync: true,
    categories: 5,
    budgets: false,
    advancedGraphs: false,
    customCategories: false,
    pdfReports: false,
    noAds: false,
    export: false
  },
  pro: {
    name: 'Pro',
    price: 4.99,
    expenses: true,
    history: true,
    basicStats: true,
    sync: true,
    categories: -1, // Ilimitado
    budgets: true,
    advancedGraphs: true,
    customCategories: true,
    pdfReports: true,
    noAds: true,
    export: true
  }
};
