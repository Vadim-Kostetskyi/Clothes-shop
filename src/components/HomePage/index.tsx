import CategoryCards from "components/CategoryCards";
import styles from './index.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapperCategoryCards}>
    <CategoryCards />
    </div>
  )
}

export default HomePage;