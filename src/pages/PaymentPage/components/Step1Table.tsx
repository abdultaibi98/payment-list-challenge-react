import React from 'react';
import { formatDate } from '../utils/formatDate';
import { Payment, Step1TableProps } from '../../../types/payment';
import {
  Table,
  TableHeader,
  TableRow,
  StatusBadge,
  TableCell,
} from '../../../components/components';
import { I18N } from '../../../constants/i18n';

export const Step1Table: React.FC<Step1TableProps> = ({ payments }) => {
  return (
    <Table className="min-w-full border border-gray-300">
      <TableRow>
        <TableHeader className="border px-4 py-2 text-left">
          {I18N.TABLE_HEADER_PAYMENT_ID}
        </TableHeader>
        <TableHeader className="border px-4 py-2 text-left">
          {I18N.TABLE_HEADER_DATE}
        </TableHeader>
        <TableHeader className="border px-4 py-2 text-left">
          {I18N.TABLE_HEADER_AMOUNT}
        </TableHeader>
        <TableHeader className="border px-4 py-2 text-left">
          {I18N.TABLE_HEADER_CUSTOMER}
        </TableHeader>
        <TableHeader className="border px-4 py-2 text-left">
          {I18N.TABLE_HEADER_CURRENCY}
        </TableHeader>
        <TableHeader className="border px-4 py-2 text-left">
          {I18N.TABLE_HEADER_STATUS}
        </TableHeader>
      </TableRow>
      {payments.map((p: Payment) => (
        <TableRow key={p.id} className="hover:bg-gray-50">
          <TableCell className="border px-4 py-2">
            {p.id ? p.id : I18N.EMPTY_CUSTOMER}
          </TableCell>
          <TableCell className="border px-4 py-2">
            {p.date && formatDate(p.date)}
          </TableCell>
          {p.amount && (
            <TableCell className="border px-4 py-2">
              {p.amount.toFixed(2)}
            </TableCell>
          )}
          <TableCell className="border px-4 py-2">
            {p.customerName ? p.customerName : I18N.EMPTY_CUSTOMER}
          </TableCell>
          <TableCell className="border px-4 py-2">
            {p.currency ? p.currency : I18N.EMPTY_CURRENCY}
          </TableCell>
          <TableCell className="border px-4 py-2">
            <StatusBadge status={p.status}>{p.status}</StatusBadge>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
};
