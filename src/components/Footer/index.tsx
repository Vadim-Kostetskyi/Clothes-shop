import { useState } from 'react'
import FooterList from './FooterList'
import InstagramImg from 'assets/SVG/Footer/Instagram'
import FacebookImg from 'assets/SVG/Footer/Facebook'
import TwitterImg from 'assets/SVG/Footer/Twitter'
import PinterestImg from 'assets/SVG/Footer/Pinterest'
import EarthImg from 'assets/SVG/Footer/Earth'
import PhoneImg from 'assets/SVG/Footer/Phone'
import styles from './Footer.module.scss'

const Footer = (): JSX.Element => { 
  const [listVisible, setListVisible] = useState([false, false, false]);
    
  const openList = (number: number) => {
        setListVisible((prev) => prev.map((value, index) => (index === number ? !value : value)))
    }
    
    return ( 
        <footer className={styles.footer}>
            <div className={styles.shadowBorder}></div>
            <div className={styles.box}>
                <FooterList className={styles.columnDesktop} />
                <div className={styles.info}>
            <div className={styles.social}> 
              <button className={styles.socialBtn}>
                <FacebookImg />
              </button>
              <button className={styles.socialBtn}>

                <InstagramImg />
                </button>
              <button className={styles.socialBtn}>
                
              <TwitterImg />
              </button>
              <button className={styles.socialBtn}>
                        <PinterestImg />
            </button>
            </div>
                    <button className={styles.infoBox}>
                        <EarthImg className={styles.img} />
                        <p className={styles.language}>Ukraine | English</p>
                    </button>
                    <button className={styles.infoBox} style={{marginBottom: 8}}>
                        <PhoneImg className={styles.img} />
                        <p className={styles.number}>Call 900 456 003</p>
                        <p className={styles.active}>Online</p>
                    </button>
                    <p className={styles.workDays}>From Mondays to Fridays from 09:00 to 19:00</p>
                <FooterList className={styles.columnMobile} listVisible={listVisible} openList={openList} />
                </div>
            </div>
            <p className={styles.copyright}>© 2023 by NOVA. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
