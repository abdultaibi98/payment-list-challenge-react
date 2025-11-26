import { API_URL } from '../../../constants';
import { GetPaymentDataProps } from '../../../types/payment';

export async function getPaymentData({
  fetchParams,
  setError,
}: GetPaymentDataProps) {
  try {
    const response = await fetch(
      `${API_URL}?page=${fetchParams.pageSize}&pageSize=${fetchParams.pageSize}`
    );
    return response;
  } catch (error: unknown) {
    setError(error);
    console.error(error);
  }
}
