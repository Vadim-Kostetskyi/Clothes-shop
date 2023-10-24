import CategoryCards from "components/CategoryCards";
import Header from "components/Header";
import styles from './index.module.css';

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