import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import FullArrowLeft from 'assets/svgs/FullArrowLeft';
import styles from './index.module.scss';

interface GoBackProps {
  className?: string;
}

const GoBack: FC<GoBackProps> = ({ className }) => {
  const navigate = useNavigate();
  const onBacktrack = () => navigate(-1);

  return (
    <button className={className} onClick={onBacktrack}>
      <FullArrowLeft className={styles.arrow} />
    </button>
  );
};

export default GoBack;
