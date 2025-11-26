export const I18N = {
  // App title
  APP_TITLE: 'Checkout.com',

  // Page title
  PAGE_TITLE: 'All payments',

  // Search and filter labels
  SEARCH_PLACEHOLDER: 'Enter payment ID',
  SEARCH_LABEL: 'Search payments',
  CURRENCY_FILTER_LABEL: 'Filter by currency',

  // Filter options
  CURRENCIES_OPTION: 'Currencies',

  // Button text
  SEARCH_BUTTON: 'Search',
  CLEAR_FILTERS: 'Clear Filters',

  // Table headers
  TABLE_HEADER_PAYMENT_ID: 'Payment ID', //done
  TABLE_HEADER_DATE: 'Date', //done
  TABLE_HEADER_AMOUNT: 'Amount', //done
  TABLE_HEADER_CUSTOMER: 'Customer', //done
  TABLE_HEADER_CURRENCY: 'Currency', //done
  TABLE_HEADER_STATUS: 'Status', //done

  // Pagination
  PREVIOUS_BUTTON: '◀ Previous',
  NEXT_BUTTON: 'Next ▶',
  PAGE_LABEL: 'Page',

  // Messages
  NO_PAYMENTS_FOUND: 'No payments found.', // done
  PAYMENT_NOT_FOUND: 'Payment not found.',
  INTERNAL_SERVER_ERROR: 'Internal server error. Please try again later.', //done
  SOMETHING_WENT_WRONG: 'Something went wrong!', //done

  // Fallback values
  EMPTY_CUSTOMER: '—', //done
  EMPTY_CURRENCY: '—', //done
} as const;
