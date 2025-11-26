import { MAX_TABLE_SIZE } from '../../../constants/index';
import { PaymentJson, GetPageNumberProps } from '../../../types/payment';
import { getPaymentData } from './getPayments';

export async function getPageNumber({
  inputSearch,
  selectedCurrency,
  pageNumber,
  setError,
  setStatus,
  setPageNumber,
  next = false,
  prev = false,
}: GetPageNumberProps) {
  const fetchedPaymentData = await getPaymentData({
    fetchParams: {
      search: inputSearch,
      currency: selectedCurrency,
      page: MAX_TABLE_SIZE,
    },
    setError,
  });
  setStatus(fetchedPaymentData?.status);

  if (fetchedPaymentData?.response && pageNumber) {
    const json: PaymentJson = await fetchedPaymentData.response.json();
    if (next) {
      const totalPages = Math.ceil(json.total / MAX_TABLE_SIZE);
      setPageNumber(Math.min(pageNumber + 1, totalPages - 1));
    }
    if (prev) {
      setPageNumber(Math.max(pageNumber - 1, 0));
    }
    setPageNumber(1);
  }

  setPageNumber(0);
}
