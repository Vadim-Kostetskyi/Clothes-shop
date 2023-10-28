import CategoryCards from "components/CategoryCards";
import Header from "components/Header";
import styles from './index.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapperHomePage}>
      <Header />
      <div className={styles.wrapperCategoryCards}>
        <CategoryCards />
      </div>
    </div>
  )
}

export default HomePage;