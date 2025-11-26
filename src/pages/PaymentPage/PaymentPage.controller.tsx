import React from 'react';
import { PaymentsPage } from './PaymentsPage.view';
import { usePaymentPage } from './PaymentPageHook';
import { I18N } from '../../constants/i18n';

export const PaymentPageController: React.FC = () => {
  const { paymentResponse, error, loading } = usePaymentPage();

  if (loading) return <>Loading…</>;
  if (error) return <>{I18N.INTERNAL_SERVER_ERROR}</>;
  if (!paymentResponse || !paymentResponse.payments.length)
    return <>{I18N.NO_PAYMENTS_FOUND}</>;

  try {
    return <PaymentsPage data={paymentResponse} />;
  } catch (err: unknown) {
    return (
      <>
        {I18N.SOMETHING_WENT_WRONG} {err}
      </>
    );
  }
};
