export const I18N = {
  // Search and filter labels
  SEARCH_PLACEHOLDER: 'Enter payment ID', //done
  SEARCH_LABEL: 'Search payments',
  CURRENCY_FILTER_LABEL: 'Filter by currency',

  // Filter options
  CURRENCIES_OPTION: 'Currencies', //done

  // Button text
  SEARCH_BUTTON: 'Search', //done
  CLEAR_FILTERS: 'Clear Filters',

  // Pagination
  PREVIOUS_BUTTON: '◀ Previous',
  NEXT_BUTTON: 'Next ▶',
  PAGE_LABEL: 'Page',

  // App title
  APP_TITLE: 'Checkout.com', //done

  // Page title
  PAGE_TITLE: 'All payments', //done

  // Table headers
  TABLE_HEADER_PAYMENT_ID: 'Payment ID', //done
  TABLE_HEADER_DATE: 'Date', //done
  TABLE_HEADER_AMOUNT: 'Amount', //done
  TABLE_HEADER_CUSTOMER: 'Customer', //done
  TABLE_HEADER_CURRENCY: 'Currency', //done
  TABLE_HEADER_STATUS: 'Status', //done

  // Messages
  NO_PAYMENTS_FOUND: 'No payments found.', // done
  PAYMENT_NOT_FOUND: 'Payment not found.', //done
  INTERNAL_SERVER_ERROR: 'Internal server error. Please try again later.', //done
  SOMETHING_WENT_WRONG: 'Something went wrong!', //done

  // Fallback values
  EMPTY_CUSTOMER: '—', //done
  EMPTY_CURRENCY: '—', //done
} as const;
