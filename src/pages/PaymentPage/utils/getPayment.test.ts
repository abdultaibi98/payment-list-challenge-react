import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { getPaymentData } from './getPayments';
import { API_URL, PAGE_SIZE } from '../../../constants';

global.fetch = vi.fn();

describe('getPaymentData', () => {
  const mockSetError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls fetch with correct URL using default PAGE_SIZE', async () => {
    const fetchParams = {
      search: 'test',
      currency: 'USD',
      page: 1,
    };

    await getPaymentData({
      fetchParams,
      setError: mockSetError,
    });

    const expectedUrl = `${API_URL}?search=test&currency=USD&page=1&pageSize=${PAGE_SIZE}`;

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('calls fetch with provided pageSize instead of default PAGE_SIZE', async () => {
    const fetchParams = {
      search: 'abc',
      currency: 'GBP',
      page: 2,
      pageSize: 10,
    };

    await getPaymentData({
      fetchParams,
      setError: mockSetError,
    });

    const expectedUrl = `${API_URL}?search=abc&currency=GBP&page=2&pageSize=10`;

    expect(fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('calls setError on fetch failure', async () => {
    const error = new Error('Fetch failed');
    (fetch as unknown as Mock).mockRejectedValueOnce(error);

    const fetchParams = {
      search: '',
      currency: '',
      page: 1,
    };

    await getPaymentData({
      fetchParams,
      setError: mockSetError,
    });

    expect(mockSetError).toHaveBeenCalledWith(error);
  });
});
