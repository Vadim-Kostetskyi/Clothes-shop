import React, { FC, useCallback, useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import { Price } from 'types/types';

interface PriceSelectorProps {
  min: number;
  max: number;
  shouldReset: boolean;
  onChange: (min: number, max: number) => void;
}

const PriceSelector: FC<PriceSelectorProps> = ({
  min,
  max,
  onChange,
  shouldReset,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal]);

  useEffect(() => {
    console.log(shouldReset);

    if (shouldReset) {
      setMinVal(min);
      setMaxVal(max);
      onChange(min, max);
    }
  }, [shouldReset]);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  const changeValue = useCallback(
    (newValue: number, parameter: string) => {
      if (parameter === 'min') {
        const value = Math.min(newValue, maxVal - 1);
        setMinVal(value);
      } else {
        const value = Math.max(newValue, minVal + 1);
        setMaxVal(value);
      }
    },
    [minVal, maxVal],
  );

  const handleChange = useCallback(
    (parameter: string) => () => {
      if (parameter === 'min') {
        const value = minValRef.current ? +minValRef.current?.value : Price.min;
        changeValue(value, parameter);
      } else {
        const value = maxValRef.current ? +maxValRef.current?.value : Price.max;
        changeValue(value, parameter);
      }
    },
    [changeValue],
  );

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={handleChange('min')}
        className={styles.thumbMin}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={handleChange('max')}
        className={styles.thumbMax}
      />

      <div className={styles.slider}>
        <div className={styles.sliderTrack}></div>
        <div ref={range} className={styles.sliderRange}></div>
        <div className={styles.sliderLeftValue}>{minVal}$</div>
        <div className={styles.sliderRightValue}>{maxVal}$</div>
      </div>
    </div>
  );
};

export default PriceSelector;
