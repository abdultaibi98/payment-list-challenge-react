import React from 'react';

import { PaymentsPageProps } from '../../types/payment';
import { Step1Table } from './components/Step1Table';
import { TableWrapper } from '../../components/components';

export const PaymentsPage: React.FC<PaymentsPageProps> = ({ data }) => {
  return (
    <>
      {data && (
        <TableWrapper>
          <Step1Table payments={data.payments} />
        </TableWrapper>
      )}
    </>
  );
};
