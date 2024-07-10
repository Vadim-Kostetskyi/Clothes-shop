import React, { useState } from 'react';
import { SelectOptionProps } from '../PreferencesModal/listOfCountries';
import styles from './index.module.scss';
import LocationBag from 'assets/svgs/LocationBag';

import ArrowTop from 'assets/svgs/ArrowTop';
import ArrowBottom from 'assets/svgs/ArrowBottom';

interface LocationSelectorProps {
  options: SelectOptionProps[];
  value?: SelectOptionProps;
  isMobile?: boolean;
  onChange: (value: SelectOptionProps) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  options,
  value,
  isMobile,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelectLocation = (option: SelectOptionProps) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className={styles.selectorContainer}
      style={{ maxHeight: isMobile ? '220px' : '194px' }}
    >
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.selectedOption}>
          <div className={styles.icon}>
            <LocationBag />
          </div>
          {value?.label}
        </div>
        <button className={styles.arrowBtn}>
          {isOpen ? <ArrowTop /> : <ArrowBottom />}
        </button>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.searchInputBox}>
            <input
              type="text"
              placeholder="Search your location"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <ul className={styles.optionsList}>
            {filteredOptions.map(option => (
              <li
                key={option.value}
                onClick={() => handleSelectLocation(option)}
                className={styles.option}
              >
                <div className={styles.icon}>
                  <LocationBag />
                </div>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
