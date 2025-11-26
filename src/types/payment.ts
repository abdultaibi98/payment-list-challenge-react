import { Dispatch, SetStateAction } from 'react';

export interface PaymentSearchQuery {
  search: string;
  currency: string;
  page: number;
  pageSize: number;
}

export interface PaymentData {
  page: number;
  pageSize: number;
  payments: Payment[];
}

export interface PaymentJson {
  page: number;
  pageSize: number;
  payments: Payment[];
  total: number;
}

export interface Payment {
  id?: string;
  customerName?: string;
  amount?: number;
  customerAddress?: string;
  currency?: Currency;
  status?: PaymentStatus;
  date?: string;
  description?: string;
}

export enum PaymentStatusEnum {
  Completed = 'completed',
  Failed = 'failed',
  Refunded = 'refunded',
  Pending = 'pending',
}

export type PaymentStatus =
  | PaymentStatusEnum.Completed
  | PaymentStatusEnum.Failed
  | PaymentStatusEnum.Pending
  | PaymentStatusEnum.Refunded;

export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD' | 'ZAR' | 'JPY';

export interface Step1TableProps {
  payments: Payment[];
}

export interface FetchParams {
  search: string | undefined;
  currency: Currency | string;
  page: number | number;
  pageSize?: number;
}
export interface GetPaymentDataProps {
  fetchParams: FetchParams;
  setError: Dispatch<SetStateAction<unknown | undefined>>;
}

export interface PaymentsPageProps {
  payments: Payment[] | undefined;
  onSearchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClearClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  inputSearch: string | undefined;
  setInputSearch: Dispatch<SetStateAction<string | undefined>>;
  selectedCurrency: Currency | string;
  setSelectedCurrency: Dispatch<SetStateAction<Currency | string>>;
  onNextPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPreviousPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  status: number | undefined;
  pageNumber: number | undefined;
  total: number | undefined;
}

export interface usePaymentPageProps {
  data: PaymentsPageProps;
  error: unknown;
}
