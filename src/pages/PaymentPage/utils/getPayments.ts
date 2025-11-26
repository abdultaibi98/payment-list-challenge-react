import { API_URL, PAGE_SIZE } from '../../../constants';
import { GetPaymentDataProps } from '../../../types/payment';

export async function getPaymentData({
  fetchParams,
  setError,
}: GetPaymentDataProps) {
  const searchSize = fetchParams.pageSize ? fetchParams.pageSize : PAGE_SIZE;
  try {
    const response = await fetch(
      `${API_URL}?search=${fetchParams.search}&currency=${fetchParams.currency}&page=${fetchParams.page}&pageSize=${searchSize}`
    );
    return { response, status: response.status };
  } catch (error: unknown) {
    setError(error);
    console.error(error);
  }
}
