import CategoryCards from "components/CategoryCards";
import Header from "components/Header";
import Swiper from "components/Swiper";
import styles from './index.module.scss';

const HomePage = () => {
  return (
    <>
    <div className={styles.wrapperHomePage}>
      <Header />
      <div className={styles.wrapperCategoryCards}>
        <CategoryCards />
      </div>
    </div>
    <Swiper />
    </>
  )
}

export default HomePage;