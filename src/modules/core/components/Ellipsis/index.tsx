import React from 'react';
import { ELLIPSIS, PageNumbers } from 'utils/constants';

import styles from './index.module.scss';

const Ellipsis = (): React.JSX.Element => (
  <li key={ELLIPSIS} className={styles.ellipsis}>
    {PageNumbers.ELLIPSIS}
  </li>
);

export default Ellipsis;
