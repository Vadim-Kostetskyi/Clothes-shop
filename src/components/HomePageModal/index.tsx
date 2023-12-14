import React, {
  useCallback,
  useEffect,
  useState,
  FormEvent,
  useMemo,
} from 'react';
import { SingleValue } from 'react-select';
import Selector, { SelectOption } from 'components/Selector';
import { countries } from './listOfCountries';
import LanguageSelect from 'components/LanguageSelect';
import Copyright from 'components/copyright';
import { Language } from 'types';
import styles from './index.module.scss';

const HomePageModal = (): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = useState<
    SelectOption | undefined
  >();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    Language.English,
  );
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    try {
      const serializedState = localStorage.getItem('isShowModalWindow');
      if (serializedState) {
        setShowModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

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
    [],
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
        setShowModal(false);
        if (checkboxChecked) {
          localStorage.setItem('isShowModalWindow', 'no');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      {showModal ? (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div className={styles.modalBox}>
              <div className={styles.locationWrapper}>
                <p className={styles.locationText}>Select your location</p>
                <div className={selectorWrapperClassName}>
                  <Selector
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  />
                </div>
              </div>
              <div className={styles.languageWrapper}>
                <p className={styles.languageText}>Select your language</p>
                <div className={styles.languageWrapper}>
                  <LanguageSelect
                    getButtonClassName={languageButtonClassName}
                    handleLanguageChange={handleLanguageChange}
                  />
                </div>
                <div className={styles.assentWrapper}>
                  <form
                    className={styles.agreement}
                    onSubmit={saveCountryLanguage}
                  >
                    <label>
                      <input
                        type="checkbox"
                        name="check"
                        className={styles.checkbox}
                      />
                      <span className={styles.agreementText}>
                        Remember my selection
                      </span>
                    </label>
                    <button className={styles.assentButton} type="submit">
                      GO!
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <Copyright />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HomePageModal;
