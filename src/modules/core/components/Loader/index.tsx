import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import styles from './index.module.scss';

const Loader = (): JSX.Element => (
  <div className={styles.loaderWrapper}>
    <SyncLoader />
  </div>
);

export default Loader;
