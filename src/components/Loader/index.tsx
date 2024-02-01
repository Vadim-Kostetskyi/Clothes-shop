import React from 'react';

import styles from './index.module.scss';

const LoaderItem = (): JSX.Element => (
  <span className={styles.loaderItemWrapper}>
    <span className={styles.loader} />
    <span className={styles.loaderColor} />
  </span>
);

const Loader = (): JSX.Element => (
  <div className={styles.loaderWrapper}>
    <LoaderItem />
    <LoaderItem />
    <LoaderItem />
  </div>
);

export default Loader;
