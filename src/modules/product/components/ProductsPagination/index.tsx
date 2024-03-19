import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PageNumbers, DEFAULT_PAGES_AMOUNT } from 'utils/constants';
import { createPagesList } from 'helpers/create-pages-list.helper';
import PaginationButton from 'modules/core/components/PaginationButton';
import Ellipsis from 'modules/core/components/Ellipsis';

import styles from './index.module.scss';

export interface ProductsPaginationProps {
  pagesAmount: PageNumbers;
  activePage: PageNumbers;
  setActivePage: (activePage: PageNumbers) => void;
  getPageProducts: (pageNumber: PageNumbers) => void;
}

const ProductsPagination: FC<ProductsPaginationProps> = ({
  pagesAmount,
  activePage,
  setActivePage,
  getPageProducts,
}) => {
  const { t } = useTranslation();

  const pagesList = createPagesList(pagesAmount);

  const handleNumberClick = useCallback((pageNumber: PageNumbers) => {
    getPageProducts(pageNumber);
    setActivePage(pageNumber);
  }, []);

  const handleButtonClick = useCallback((increment: number) => {
    const nextPage = Number(activePage) + increment;
    getPageProducts(nextPage);
    setActivePage(nextPage);
  }, []);

  return (
    <div className={styles.pagination}>
      <PaginationButton
        isPrevious
        handleClick={() => handleButtonClick(-1)}
        isDisabled={activePage === PageNumbers.FIRST_PAGE}
      />
      <ul className={styles.pager}>
        <li className={styles.pageText}>{t('page')}</li>
        {Number(pagesAmount) <= DEFAULT_PAGES_AMOUNT ? (
          pagesList.map(pageNumber => {
            return (
              <li
                key={pageNumber}
                className={`${styles.pageButton} 
                                ${
                                  pageNumber === activePage
                                    ? styles.pageButtonActive
                                    : ''
                                }`}
                onClick={() => handleNumberClick(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })
        ) : (
          <>
            <li
              key={PageNumbers.FIRST_PAGE}
              className={`${styles.pageButton} 
                                ${
                                  PageNumbers.FIRST_PAGE === activePage
                                    ? styles.pageButtonActive
                                    : ''
                                }`}
              onClick={() => handleNumberClick(PageNumbers.FIRST_PAGE)}
            >
              {PageNumbers.FIRST_PAGE}
            </li>
            {Number(activePage) <= PageNumbers.THIRD_PAGE &&
              [PageNumbers.SECOND_PAGE, PageNumbers.THIRD_PAGE].map(
                pageNumber => (
                  <li
                    key={pageNumber}
                    className={`${styles.pageButton} 
                                        ${
                                          pageNumber === activePage
                                            ? styles.pageButtonActive
                                            : ''
                                        }`}
                    onClick={() => handleNumberClick(pageNumber)}
                  >
                    {pageNumber}
                  </li>
                ),
              )}
            {Number(activePage) === PageNumbers.THIRD_PAGE && (
              <li
                key={PageNumbers.FOURTH_PAGE}
                className={styles.pageButton}
                onClick={() => handleNumberClick(PageNumbers.FOURTH_PAGE)}
              >
                {PageNumbers.FOURTH_PAGE}
              </li>
            )}
            <Ellipsis />
            {Number(activePage) >= PageNumbers.FOURTH_PAGE &&
              Number(activePage) <= Number(pagesAmount) - 3 && (
                <>
                  {[
                    Number(activePage) - 1,
                    Number(activePage),
                    Number(activePage) + 1,
                  ].map(pageNumber => (
                    <li
                      key={pageNumber}
                      className={`${styles.pageButton} 
                                            ${
                                              pageNumber === activePage
                                                ? styles.pageButtonActive
                                                : ''
                                            }`}
                      onClick={() => handleNumberClick(pageNumber)}
                    >
                      {pageNumber}
                    </li>
                  ))}
                  <Ellipsis />
                </>
              )}
            {Number(activePage) === Number(pagesAmount) - 2 && (
              <li
                key={Number(pagesAmount) - 3}
                className={styles.pageButton}
                onClick={() => handleNumberClick(Number(pagesAmount) - 3)}
              >
                {Number(pagesAmount) - 3}
              </li>
            )}
            {Number(activePage) > Number(pagesAmount) - 3 &&
              [Number(pagesAmount) - 2, Number(pagesAmount) - 1].map(
                pageNumber => (
                  <li
                    key={pageNumber}
                    className={`${styles.pageButton} 
                                    ${
                                      pageNumber === activePage
                                        ? styles.pageButtonActive
                                        : ''
                                    }`}
                    onClick={() => handleNumberClick(pageNumber)}
                  >
                    {pageNumber}
                  </li>
                ),
              )}
            <li
              key={pagesAmount}
              className={`${styles.pageButton} 
                                ${
                                  pagesAmount === activePage
                                    ? styles.pageButtonActive
                                    : ''
                                }`}
              onClick={() => handleNumberClick(pagesAmount)}
            >
              {pagesAmount}
            </li>
          </>
        )}
      </ul>
      <PaginationButton
        handleClick={() => handleButtonClick(1)}
        isDisabled={activePage === pagesAmount}
      />
    </div>
  );
};

export default ProductsPagination;
