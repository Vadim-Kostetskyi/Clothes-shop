import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import styles from './index.module.scss';

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loaderWrapper}>
      <SyncLoader
        color="#424851"
        cssOverride={{}}
        loading
        margin={3}
        size={10}
        speedMultiplier={0.9}
      />
    </div>
  );
};

export default Loader;
