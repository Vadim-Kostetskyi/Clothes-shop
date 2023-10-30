import { useState } from 'react'
import { Instagram, Facebook, Twitter, Pinterest } from 'assets/SVG/Footer/SocialSvg'
import { Earth, Phone } from 'assets/SVG/Footer/InfoSvg'
import FooterList from './FooterList'
import style from './Footer.module.scss'

const Footer = (): JSX.Element => { 
    const [listVisible, setListVisible] = useState([false, false, false]);
    
  const openList = (number: number) => {
        setListVisible((prev) => prev.map((value, index) => (index === number ? !value : value)))
    }
    
    return ( 
        <footer className={style.footer}>
            <div className={style.shadowBorder}></div>
            <div className={style.box}>
                <FooterList device={style.columnDesktop} />
                <div className={style.info}>
                    <div className={style.social}> 
                        <Facebook className={style.imgSocial} />
                        <Instagram className={style.imgSocial} />
                        <Twitter className={style.imgSocial} />
                        <Pinterest className={style.imgSocial} />
                    </div>
                    <div className={style.infoBox}>
                        <Earth className={style.img} />
                        <p className={style.language}>Ukraine | English</p>
                    </div>
                    <div className={style.infoBox} style={{marginBottom: 8}}>
                        <Phone className={style.img} />
                        <p className={style.number}>Call 900 456 003</p>
                        <p className={style.active}>Online</p>
                    </div>
                    <p className={style.workDays}>From Mondays to Fridays from 09:00 to 19:00</p>
                <FooterList device={style.columnMobile} listVisible={listVisible} openList={openList} />
                </div>
            </div>
            <p className={style.copyright}>© 2023 by NOVA. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
