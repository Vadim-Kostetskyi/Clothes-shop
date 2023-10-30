import MenuItem from './MenuItem';
import logo from '../../assets/images/logo.png'
import styles from './index.module.scss';

const Header = (): JSX.Element => {
    const menuItem = ['Women', 'Men', 'Kids' ]
    return (
        <div>
            <div className={styles.headerWrapper}>
                <nav>
                    {menuItem.map(el => {
                        return (
                            <a href="#">{el}</a>
                        )
                    })}
                </nav>
                <img src={logo} className={styles.logo} alt="Logo" /> {/* home page */}
                <div>
                    <input type="text" className={styles.input} />
                    <button className={styles.btn}>
                        <svg className={styles.menuIcon}>
                            <path d="M20.25 3.72h-4.481v-1.438c0-1.241-1.010-2.25-2.25-2.25h-2.992c-1.241 0-2.25 1.009-2.25 2.25v1.438h-4.528c-0.828 0-1.5 0.672-1.5 1.5v17.249c0 0.829 0.672 1.5 1.5 1.5h16.5c0.829 0 1.5-0.671 1.5-1.5v-17.249c0-0.828-0.671-1.5-1.5-1.5v0zM9.778 2.281c0-0.414 0.336-0.75 0.75-0.75h2.992c0.414 0 0.75 0.336 0.75 0.75v1.438h-4.492v-1.438zM20.25 22.469h-16.5v-17.249h4.528v1.543s-0.020 0.749 0.745 0.749c0.844 0 0.755-0.749 0.755-0.749v-1.543h4.492v1.543s-0.050 0.753 0.747 0.753c0.75 0 0.753-0.753 0.753-0.753v-1.543h4.48v17.249z"></path>
                        </svg>
                    </button>
                    <button className={styles.btn}>
                        <svg className={styles.menuIcon}>
                            <path d="M20.25 3.72h-4.481v-1.438c0-1.241-1.010-2.25-2.25-2.25h-2.992c-1.241 0-2.25 1.009-2.25 2.25v1.438h-4.528c-0.828 0-1.5 0.672-1.5 1.5v17.249c0 0.829 0.672 1.5 1.5 1.5h16.5c0.829 0 1.5-0.671 1.5-1.5v-17.249c0-0.828-0.671-1.5-1.5-1.5v0zM9.778 2.281c0-0.414 0.336-0.75 0.75-0.75h2.992c0.414 0 0.75 0.336 0.75 0.75v1.438h-4.492v-1.438zM20.25 22.469h-16.5v-17.249h4.528v1.543s-0.020 0.749 0.745 0.749c0.844 0 0.755-0.749 0.755-0.749v-1.543h4.492v1.543s-0.050 0.753 0.747 0.753c0.75 0 0.753-0.753 0.753-0.753v-1.543h4.48v17.249z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;