import React from 'react';
import { PaymentsPage } from './PaymentsPage.view';
import { usePaymentPage } from './PaymentPageHook';
import { I18N } from '../../constants/i18n';

export const PaymentPageController: React.FC = () => {
  const { data, error } = usePaymentPage();

  if (error) return <>{I18N.INTERNAL_SERVER_ERROR}</>;

  try {
    return <PaymentsPage {...data} />;
  } catch (err: unknown) {
    return (
      <>
        {I18N.SOMETHING_WENT_WRONG} {err}
      </>
    );
  }
};
