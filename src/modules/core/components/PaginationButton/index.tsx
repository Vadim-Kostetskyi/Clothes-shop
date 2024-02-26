import React, { FC } from 'react';
import ArrowLeft from 'assets/svgs/ArrowLeft';
import ArrowRight from 'assets/svgs/ArrowRight';
import ArrowLeftGrey from 'assets/svgs/ArrowLeftGrey';
import ArrowRightGrey from 'assets/svgs/ArrowRightGrey';

import styles from './index.module.scss';

interface PaginationButtonProps {
  isPrevious?: boolean;
  isDisabled?: boolean;
  handleClick: () => void;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  isPrevious,
  isDisabled,
  handleClick,
}) => {
  return (
    <button
      className={`${styles.paginationButton} ${
        isDisabled ? styles.paginationDisabled : ''
      }`}
      onClick={handleClick}
    >
      <div className={styles.pagination__icon}>
        {isDisabled ? (
          isPrevious ? (
            <ArrowLeftGrey />
          ) : (
            <ArrowRightGrey />
          )
        ) : isPrevious ? (
          <ArrowLeft />
        ) : (
          <ArrowRight />
        )}
      </div>
    </button>
  );
};

export default PaginationButton;
