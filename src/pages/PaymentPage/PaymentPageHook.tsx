import { useEffect, useState } from 'react';
import { getPaymentData } from './utils/getPayments';
import { getPageNumber } from './utils/getPageNumber';
import {
  FetchParams,
  usePaymentPageProps,
  Currency,
  PaymentJson,
  Payment,
} from '../../types/payment';

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
  const [pageNumber, setPageNumber] = useState<number | undefined>();

  async function onSearchClick() {
    const search = inputSearch ? inputSearch : '';
    setFetchParams({
      search: search,
      currency: selectedCurrency,
      page: 1,
    });
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

  // async function onPreviousClick() {}

  async function loadPaymentData() {
    const fetchedPaymentData = await getPaymentData({
      fetchParams: fetchParams,
      setError,
    });
    setStatus(fetchedPaymentData?.status);
    if (!fetchedPaymentData?.response) {
      setPayments(undefined);
      return;
    }

    const json: PaymentJson = await fetchedPaymentData.response.json();
    console.log('json: ', json);

    getPageNumber({
      inputSearch,
      selectedCurrency,
      pageNumber,
      setError,
      setStatus,
      setPageNumber,
    });
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
      status,
      pageNumber,
    },
    error,
  };
}
