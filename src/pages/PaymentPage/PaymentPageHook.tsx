import { useEffect, useState } from 'react';
import { getPaymentData } from './utils/getPayments';
import { PaymentData } from '../../types/payment';

export function usePaymentPage() {
  const [paymentResponse, setPaymentResponse] = useState<PaymentData>();
  const [error, setError] = useState<unknown | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const fetchParams = {
    search: '',
    currency: '',
    page: 1,
    pageSize: 5,
  };

  useEffect(() => {
    async function loadPaymentData() {
      const response = await getPaymentData({
        fetchParams: fetchParams,
        setError,
      });
      setLoading(false);
      if (!response) return;
      const json = await response.json();
      setPaymentResponse(json);
    }
    loadPaymentData();
  }, []);

  return { paymentResponse, error, loading };
}
