import { useEffect, useState } from 'react';
import { getPaymentData } from './utils/getPayments';
import {
  FetchParams,
  usePaymentPageProps,
  Currency,
  PaymentJson,
  Payment,
} from '../../types/payment';
import { MAX_TABLE_SIZE, PAGE_SIZE } from '../../constants/index';

export function usePaymentPage(): usePaymentPageProps {
  const [fetchParams, setFetchParams] = useState<FetchParams>({
    search: '',
    currency: '',
    page: 1,
  });
  const [payments, setPayments] = useState<Payment[] | undefined>();
  const [error, setError] = useState<unknown | undefined>();
  const [status, setStatus] = useState<number | undefined>();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | string>(
    ''
  );
  const [inputSearch, setInputSearch] = useState<string | undefined>();
  const [total, setTotal] = useState<number>(0);
  const pageNumber = fetchParams.page;

  async function onSearchClick() {
    const search = inputSearch ? inputSearch : '';
    setFetchParams({
      search: search,
      currency: selectedCurrency,
      page: 1,
    });
  }

  function onNextPage() {
    const totalPages = Math.ceil(total / MAX_TABLE_SIZE);
    if (pageNumber && pageNumber < totalPages) {
      setFetchParams((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  }

  function onPreviousPage() {
    if (pageNumber && pageNumber > 1) {
      setFetchParams((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  }

  async function onClearClick() {
    setInputSearch('');
    setSelectedCurrency('');
    setFetchParams({
      search: '',
      currency: '',
      page: 1,
    });
  }

  async function fetchTotalPaymentsCount() {
    const result = await getPaymentData({
      fetchParams: {
        search: fetchParams.search,
        currency: fetchParams.currency,
        page: 1,
        pageSize: PAGE_SIZE,
      },
      setError,
    });

    if (!result?.response) return;

    const json: PaymentJson = await result.response.json();
    setTotal(json.total);
  }

  async function loadPaymentData() {
    await fetchTotalPaymentsCount();

    const result = await getPaymentData({
      fetchParams: {
        ...fetchParams,
        pageSize: MAX_TABLE_SIZE,
      },
      setError,
    });

    setStatus(result?.status);

    if (!result?.response) {
      setPayments([]);
      return;
    }

    const json: PaymentJson = await result.response.json();
    setPayments(json.payments);
  }

  useEffect(() => {
    loadPaymentData();
  }, [fetchParams]);

  return {
    data: {
      payments,
      onSearchClick,
      onClearClick,
      inputSearch,
      setInputSearch,
      selectedCurrency,
      setSelectedCurrency,
      onNextPage,
      onPreviousPage,
      status,
      pageNumber,
      total,
    },
    error,
  };
}
