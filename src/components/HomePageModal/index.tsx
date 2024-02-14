import React, { useCallback, useState, FormEvent, useMemo, FC } from 'react';
import { SingleValue } from 'react-select';
import Selector, { SelectOption } from 'components/Selector';
import { countries } from './listOfCountries';
import LanguageSelect from 'components/LanguageSelect';
import Copyright from 'components/copyright';
import { Language } from 'types';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'libs/hooks/hooks';
import { selectViewportWidth } from 'redux/slices/viewport-width/viewport-width';
import { ViewportWidth } from 'utils/constants';

export interface HomePageModalProps {
  showModal: boolean;
  hideModal: () => void;
}

const HomePageModal: FC<HomePageModalProps> = ({ showModal, hideModal }) => {
  const [selectedCountry, setSelectedCountry] = useState<
    SelectOption | undefined
  >();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    Language.English,
  );
  const [showAlert, setShowAlert] = useState(false);

  const { t } = useTranslation();

  const selectorWrapperClassName = useMemo(
    () => (showAlert ? styles.selectorWrapperAlert : styles.selectorWrapper),
    [showAlert],
  );

  const handleCountryChange = useCallback(
    (newValue: SingleValue<SelectOption | undefined>) => {
      const country = newValue as SelectOption;
      setShowAlert(false);
      setSelectedCountry(country);
    },
    [setShowAlert, setSelectedCountry],
  );

  const handleLanguageChange = useCallback(
    (language: Language) => () => setSelectedLanguage(language),
    [setSelectedLanguage],
  );

  const languageButtonClassName = useCallback(
    (language: string) =>
      language === selectedLanguage ? styles.focus : styles.languageButton,
    [selectedLanguage],
  );

  const saveCountryLanguage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkboxChecked = (event.target as HTMLFormElement).check.checked;

    if (!showModal) return null;
    else if (selectedCountry) {
      try {
        const serializedCountry = JSON.stringify(selectedCountry.label);
        const serializedLanguage = JSON.stringify(selectedLanguage);
        localStorage.setItem('country', serializedCountry);
        localStorage.setItem('language', serializedLanguage);
        hideModal();
        if (checkboxChecked) {
          localStorage.setItem('shouldShowModal', 'false');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setShowAlert(true);
    }
  };

  const viewportWidth = useAppSelector(selectViewportWidth);

  const isMobile = viewportWidth <= ViewportWidth.MOBILE;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <div className={styles.locationWrapper}>
            <p className={styles.locationText}>
              {t('homePageModal.selectLocation')}
            </p>
            <div className={selectorWrapperClassName}>
              <Selector
                options={countries}
                value={selectedCountry}
                onChange={handleCountryChange}
                isMobile={isMobile}
              />
            </div>
          </div>
          <div className={styles.rightSectionWrapper}>
            <div className={styles.languageWrapper}>
              <p className={styles.languageText}>
                {' '}
                {t('homePageModal.selectLanguage')}
              </p>
              <LanguageSelect
                getButtonClassName={languageButtonClassName}
                handleLanguageChange={handleLanguageChange}
              />
            </div>
            <form className={styles.agreement} onSubmit={saveCountryLanguage}>
              <label className={styles.agreementLabel}>
                <input
                  type="checkbox"
                  name="check"
                  className={styles.checkbox}
                />
                <span className={styles.agreementText}>
                  {t('homePageModal.rememberSelection')}
                </span>
              </label>
              <button className={styles.assentButton} type="submit">
                {t('homePageModal.go')}!
              </button>
            </form>
          </div>
        </div>
        {!isMobile && <Copyright />}
      </div>
    </div>
  );
};

export default HomePageModal;
