import styles from './index.module.css';
import logo from '../../assets/images/logo.png'

const Header = () => (
    <div className={styles.headerWrapper}>
        <img src={logo} className={styles.logo} alt="Logo" />
    </div>
)

export default Header;