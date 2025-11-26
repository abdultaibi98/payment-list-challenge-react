import React from 'react';

import { PaymentsPageProps, Currency } from '../../types/payment';
import { TableComponent } from './components/TableComponent';
import {
  TableWrapper,
  Container,
  Title,
  SearchInput,
  SearchButton,
  ClearButton,
  FilterRow,
  ErrorBox,
  Select,
  PaginationRow,
  PaginationButton,
} from '../../components/components';
import { I18N } from '../../constants/i18n';
import { CURRENCIES, MAX_TABLE_SIZE } from '../../constants/index';

export const PaymentsPage: React.FC<PaymentsPageProps> = ({
  payments,
  onSearchClick,
  inputSearch,
  setInputSearch,
  onClearClick,
  selectedCurrency,
  setSelectedCurrency,
  status,
  pageNumber,
  onNextPage,
  onPreviousPage,
  total,
}) => {
  return (
    <Container>
      <Title>{I18N.PAGE_TITLE}</Title>
      <FilterRow>
        <SearchInput
          placeholder={I18N.SEARCH_PLACEHOLDER}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Select
          aria-label={I18N.CURRENCY_FILTER_LABEL}
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value as Currency)}
        >
          <option value="">{I18N.CURRENCY_FILTER_LABEL}</option>
          {CURRENCIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
        <SearchButton onClick={onSearchClick}>
          {I18N.SEARCH_BUTTON}
        </SearchButton>
        {(inputSearch || selectedCurrency) && (
          <ClearButton onClick={onClearClick}>{I18N.CLEAR_FILTERS}</ClearButton>
        )}
      </FilterRow>
      {status === 200 && payments && (
        <>
          <TableWrapper>
            <TableComponent payments={payments} />
            <PaginationRow>
              <PaginationButton
                disabled={pageNumber === 1}
                onClick={onPreviousPage}
              >
                {I18N.PREVIOUS_BUTTON}
              </PaginationButton>
              {I18N.PAGE_LABEL} {pageNumber}
              <PaginationButton
                disabled={Boolean(
                  pageNumber && total && pageNumber * MAX_TABLE_SIZE >= total
                )}
                onClick={onNextPage}
              >
                {I18N.NEXT_BUTTON}
              </PaginationButton>
            </PaginationRow>
          </TableWrapper>
        </>
      )}
      {status === 404 && <ErrorBox>{I18N.PAYMENT_NOT_FOUND}</ErrorBox>}
      {status === 500 && <ErrorBox>{I18N.INTERNAL_SERVER_ERROR}</ErrorBox>}
    </Container>
  );
};
