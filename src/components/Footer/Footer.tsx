import { useState } from 'react'
import FooterList from './FooterList'
import style from './Footer.module.css'

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
                        <svg
                            className={style.imgSocial}
                            viewBox="2.5 2 27 27"
                        >
                            <path d="M16.001 2.669c-7.363 0-13.332 5.969-13.332 13.332 0 6.653 4.875 12.168 11.249 13.172v-9.317h-3.387v-3.855h3.387v-2.937c0-3.344 1.991-5.188 5.035-5.188 1.459 0 2.987 0.26 2.987 0.26v3.279h-1.685c-1.653 0-2.171 1.029-2.171 2.084v2.5h3.695l-0.591 3.855h-3.104v9.317c6.375-0.999 11.249-6.515 11.249-13.169 0-7.363-5.969-13.332-13.332-13.332z"></path>
                        </svg>
                        <svg
                            className={style.imgSocial}
                            viewBox="0 0 32 32"
                        >
                            <path d="M21.588 11.295c0-0.505-0.409-0.914-0.914-0.914s-0.914 0.409-0.914 0.914c0 0.505 0.409 0.914 0.914 0.914s0.914-0.409 0.914-0.914z"></path>
                            <path fill="#212121" d="M16.003 11.073c-2.721 0-4.932 2.207-4.932 4.932s2.207 4.932 4.932 4.932c2.725 0 4.932-2.207 4.932-4.932s-2.207-4.932-4.932-4.932zM16.003 19.203c-1.768 0-3.202-1.433-3.202-3.202s1.433-3.202 3.202-3.202c1.769 0 3.202 1.433 3.202 3.202s-1.433 3.202-3.202 3.202z"></path>
                            <path d="M15.982 0.176c-8.73 0-15.806 7.077-15.806 15.806s7.077 15.806 15.806 15.806c8.73 0 15.806-7.077 15.806-15.806s-7.077-15.806-15.806-15.806zM24.763 19.578c0 2.864-2.321 5.185-5.185 5.185h-7.192c-2.864 0-5.185-2.321-5.185-5.185v-7.192c0-1.074 0.326-2.071 0.886-2.899 0.932-1.379 2.51-2.286 4.3-2.286h7.193c1.79 0 3.368 0.907 4.3 2.286 0.559 0.828 0.885 1.825 0.885 2.899v7.192z"></path>
                        </svg>
                        <svg
                            className={style.imgSocial}
                            viewBox="2 2 28 28"
                        >
                            <path d="M16 2c-7.731 0-14 6.269-14 14s6.269 14 14 14 14-6.269 14-14-6.269-14-14-14zM22.728 12.553c0.009 0.147 0.009 0.3 0.009 0.45 0 4.588-3.494 9.872-9.878 9.872-1.969 0-3.794-0.572-5.331-1.556 0.281 0.031 0.55 0.044 0.837 0.044 1.625 0 3.119-0.55 4.309-1.481-1.525-0.031-2.806-1.031-3.244-2.406 0.534 0.078 1.016 0.078 1.566-0.063-1.596-0.333-2.778-1.728-2.778-3.399 0-0.002 0-0.005 0-0.007v0-0.044c0.459 0.259 1 0.419 1.566 0.441-0.937-0.631-1.546-1.688-1.547-2.887v-0c0-0.647 0.169-1.238 0.472-1.75 1.719 2.105 4.264 3.479 7.132 3.627l0.024 0.001c-0.491-2.359 1.272-4.269 3.391-4.269 1 0 1.9 0.419 2.534 1.094 0.784-0.147 1.534-0.441 2.203-0.834-0.259 0.803-0.803 1.481-1.525 1.909 0.7-0.075 1.375-0.269 2-0.541-0.472 0.694-1.063 1.309-1.741 1.8z"></path>
                        </svg>
                        <svg
                            className={style.imgSocial}
                            viewBox="0 0 32 32"
                        >
                            <path fill="#212121" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"></path>
                            <path fill="#fdfdfd" d="M15.996 6.4c-5.307 0-9.596 4.296-9.596 9.596 0 4.067 2.527 7.543 6.097 8.941-0.087-0.758-0.158-1.927 0.032-2.756 0.174-0.75 1.121-4.77 1.121-4.77s-0.284-0.577-0.284-1.422c0-1.335 0.774-2.33 1.738-2.33 0.821 0 1.216 0.616 1.216 1.351 0 0.821-0.521 2.053-0.798 3.199-0.229 0.956 0.482 1.738 1.422 1.738 1.706 0 3.017-1.801 3.017-4.391 0-2.298-1.651-3.902-4.012-3.902-2.733 0-4.336 2.046-4.336 4.162 0 0.821 0.316 1.706 0.711 2.188 0.079 0.095 0.087 0.182 0.063 0.276-0.071 0.3-0.237 0.956-0.269 1.090-0.040 0.174-0.142 0.213-0.324 0.126-1.185-0.569-1.927-2.322-1.927-3.728 0-3.025 2.196-5.805 6.342-5.805 3.325 0 5.916 2.369 5.916 5.544 0 3.309-2.085 5.971-4.976 5.971-0.971 0-1.888-0.506-2.196-1.106 0 0-0.482 1.832-0.6 2.283-0.213 0.837-0.798 1.88-1.193 2.519 0.9 0.276 1.848 0.427 2.843 0.427 5.3 0 9.596-4.297 9.596-9.596-0.008-5.308-4.304-9.604-9.604-9.604z"></path>
                        </svg>
                    </div>
                    <div className={style.infoBox}>
                        <svg
                            className={style.img}
                            viewBox="0 0 29.8 29.8"
                        >
                            <path d="M16 2c-7.731 0-14 6.269-14 14s6.269 14 14 14 14-6.269 14-14-6.269-14-14-14zM16 9c-0.922 0-1.822-0.081-2.694-0.234 0.819-3.287 2.050-5.016 2.694-5.016s1.875 1.728 2.694 5.016c-0.872 0.15-1.772 0.234-2.694 0.234zM20.397 8.363c-0.425-1.741-0.994-3.206-1.659-4.294 1.988 0.456 3.791 1.397 5.281 2.691-1.103 0.681-2.322 1.222-3.622 1.603zM11.603 8.363c-1.3-0.381-2.516-0.925-3.619-1.603 1.491-1.294 3.291-2.231 5.278-2.688-0.666 1.084-1.231 2.55-1.659 4.291zM21.234 15.125c-0.041-1.797-0.209-3.497-0.481-5.044 1.641-0.469 3.166-1.166 4.525-2.056 1.669 1.938 2.734 4.397 2.928 7.1h-6.972zM3.794 15.125c0.194-2.7 1.256-5.159 2.922-7.097 1.359 0.891 2.888 1.581 4.531 2.050-0.272 1.55-0.441 3.25-0.481 5.047h-6.972zM12.516 15.125c0.041-1.741 0.2-3.294 0.434-4.647 0.988 0.175 2.003 0.272 3.050 0.272 1.044 0 2.063-0.094 3.050-0.269 0.234 1.353 0.391 2.906 0.434 4.644h-6.969zM25.278 23.975c-1.359-0.891-2.884-1.587-4.525-2.056 0.272-1.55 0.441-3.25 0.481-5.044h6.972c-0.194 2.703-1.259 5.162-2.928 7.1zM12.95 21.522c-0.234-1.353-0.391-2.906-0.434-4.647h6.966c-0.041 1.738-0.197 3.291-0.434 4.644-0.984-0.175-2.003-0.269-3.047-0.269s-2.063 0.097-3.050 0.272zM6.719 23.972c-1.666-1.938-2.731-4.397-2.922-7.097h6.972c0.041 1.797 0.209 3.497 0.481 5.047-1.644 0.469-3.172 1.159-4.531 2.050zM16 28.25c-0.644 0-1.875-1.728-2.694-5.016 0.872-0.15 1.772-0.234 2.694-0.234s1.822 0.084 2.694 0.234c-0.819 3.288-2.050 5.016-2.694 5.016zM18.738 27.931c0.666-1.087 1.234-2.553 1.659-4.294 1.303 0.381 2.519 0.922 3.622 1.6-1.491 1.297-3.294 2.238-5.281 2.694zM13.262 27.931c-1.988-0.456-3.787-1.394-5.278-2.688 1.1-0.681 2.316-1.222 3.619-1.603 0.428 1.738 0.994 3.203 1.659 4.291z"></path>
                        </svg>
                        <p className={style.language}>Ukraine | English</p>
                    </div>
                    <div className={style.infoBox} style={{marginBottom: 8}}>
                        <svg
                            className={style.img}
                            width="200"
                            height="200"
                            viewBox="0 0 32 32"
                            >
                            <path d="M26.326 12.219c-0.318-1.631-1.108-3.115-2.283-4.29s-2.659-1.965-4.29-2.283c-0.701-0.137-1.38 0.321-1.516 1.021s0.32 1.38 1.021 1.516c2.303 0.449 4.081 2.228 4.531 4.531 0.12 0.617 0.661 1.045 1.267 1.045 0.082 0 0.165-0.008 0.249-0.024 0.701-0.137 1.158-0.816 1.021-1.516z"></path>
                            <path d="M31.964 12.308c-0.352-3.131-1.773-6.082-4.003-8.308s-5.182-3.644-8.313-3.992c-0.71-0.079-1.349 0.432-1.427 1.142s0.432 1.349 1.142 1.428c5.31 0.59 9.435 4.71 10.032 10.019 0.074 0.66 0.634 1.148 1.283 1.148 0.048 0 0.097-0.003 0.146-0.008 0.709-0.080 1.22-0.72 1.14-1.429z"></path>
                            <path d="M27.037 19.535c-0.004-0-0.008-0.001-0.012-0.002-1.251-0.165-2.484-0.472-3.664-0.912-1.494-0.562-3.194-0.199-4.329 0.923-0.002 0.002-0.003 0.003-0.005 0.005l-1.072 1.072c-2.665-1.683-4.922-3.94-6.605-6.605l1.072-1.072c0.002-0.002 0.003-0.003 0.005-0.005 1.123-1.135 1.485-2.835 0.924-4.326-0.441-1.182-0.748-2.416-0.913-3.667-0-0.004-0.001-0.008-0.002-0.012-0.287-2.030-2.049-3.546-4.097-3.529h-4.212c-0.121 0-0.244 0.006-0.366 0.017-2.254 0.204-3.921 2.203-3.718 4.456 0.001 0.007 0.001 0.013 0.002 0.020 0.48 4.522 2.041 8.93 4.512 12.747 2.243 3.529 5.294 6.579 8.823 8.823 3.799 2.463 8.187 4.023 12.688 4.512 0.008 0.001 0.016 0.002 0.024 0.002 0.123 0.011 0.247 0.017 0.37 0.017 0.005 0 0.010 0 0.015 0 2.263-0.009 4.096-1.858 4.087-4.115v-4.202c0.043-2.076-1.472-3.857-3.529-4.148zM27.981 23.668v4.222c0.003 0.837-0.675 1.521-1.512 1.525-0.045-0-0.089-0.002-0.133-0.005-4.099-0.448-8.093-1.87-11.552-4.113-0.003-0.002-0.007-0.004-0.010-0.006-3.214-2.043-5.993-4.821-8.035-8.035-0.002-0.003-0.004-0.006-0.006-0.010-2.252-3.476-3.674-7.49-4.113-11.608-0.070-0.83 0.546-1.565 1.376-1.64 0.045-0.004 0.090-0.006 0.134-0.006h4.216c0.009-0 0.018-0 0.028-0 0.751 0 1.395 0.557 1.503 1.301 0.191 1.441 0.545 2.863 1.054 4.228 0.207 0.552 0.074 1.179-0.339 1.599l-1.782 1.782c-0.411 0.411-0.497 1.047-0.21 1.553 2.115 3.719 5.199 6.803 8.918 8.918 0.506 0.288 1.142 0.202 1.553-0.21l1.782-1.782c0.42-0.414 1.048-0.547 1.603-0.338 1.362 0.508 2.784 0.863 4.226 1.053 0.761 0.11 1.32 0.771 1.301 1.54-0 0.011-0 0.021-0 0.032z"></path>
                        </svg>
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
