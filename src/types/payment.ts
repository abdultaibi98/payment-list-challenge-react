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

export interface PaymentsPageProps {
  data?: PaymentData;
}
export interface Step1TableProps {
  payments: Payment[];
}

export interface FetchParams {
  search: string;
  currency: Currency | string;
  page: number;
  pageSize: number;
}
export interface GetPaymentDataProps {
  fetchParams: FetchParams;
  setError: Dispatch<SetStateAction<unknown | undefined>>;
}
