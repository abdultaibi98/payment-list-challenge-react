import React from 'react';
import { formatDate } from '../utils/formatDate';
import { Payment, Step1TableProps } from '../../../types/payment';
import {
  Table,
  TableHeader,
  TableRow,
  StatusBadge,
  TableCell,
  TableHeaderWrapper,
  TableBodyWrapper,
} from '../../../components/components';
import { I18N } from '../../../constants/i18n';

export const TableComponent: React.FC<Step1TableProps> = ({ payments }) => {
  return (
    <Table className="min-w-full border border-gray-300">
      <TableHeaderWrapper>
        <TableRow>
          <TableHeader>{I18N.TABLE_HEADER_PAYMENT_ID}</TableHeader>
          <TableHeader>{I18N.TABLE_HEADER_DATE}</TableHeader>
          <TableHeader>{I18N.TABLE_HEADER_AMOUNT}</TableHeader>
          <TableHeader>{I18N.TABLE_HEADER_CUSTOMER}</TableHeader>
          <TableHeader>{I18N.TABLE_HEADER_CURRENCY}</TableHeader>
          <TableHeader>{I18N.TABLE_HEADER_STATUS}</TableHeader>
        </TableRow>
      </TableHeaderWrapper>
      <TableBodyWrapper>
        {payments.map((p: Payment) => (
          <TableRow key={p.id}>
            <TableCell>{p.id ? p.id : I18N.EMPTY_CUSTOMER}</TableCell>
            <TableCell>{p.date && formatDate(p.date)}</TableCell>
            {p.amount && <TableCell>{p.amount.toFixed(2)}</TableCell>}
            <TableCell>
              {p.customerName ? p.customerName : I18N.EMPTY_CUSTOMER}
            </TableCell>
            <TableCell>
              {p.currency ? p.currency : I18N.EMPTY_CURRENCY}
            </TableCell>
            <TableCell>
              <StatusBadge status={p.status}>{p.status}</StatusBadge>
            </TableCell>
          </TableRow>
        ))}
      </TableBodyWrapper>
    </Table>
  );
};
