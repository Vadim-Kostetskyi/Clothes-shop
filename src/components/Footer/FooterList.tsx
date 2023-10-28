import style from './Footer.module.css'

const FooterList = ({device, listVisible, openList}:{device: string, listVisible?: boolean[], openList?: Function}): JSX.Element => {
    
  return (
    <>
      <div className={device}>
        <div className={style.titleBox}>
          <h1 className={style.title}>Help</h1>
          {(listVisible && !listVisible[0]) ? (<button className={style.listButton} onClick={() => openList ? openList(0) : ''}>
          <svg className={style.listImg} viewBox="0 0 35 35">
            <path d="M22.919 11.065h-10.011v-10.011c0-0.509-0.413-0.922-0.922-0.922s-0.922 0.413-0.922 0.922v10.011h-10.011c-0.509 0-0.922 0.413-0.922 0.922s0.413 0.922 0.922 0.922h10.011v10.011c0 0.509 0.413 0.922 0.922 0.922s0.922-0.413 0.922-0.922v-10.011h10.011c0.509 0 0.922-0.413 0.922-0.922s-0.413-0.922-0.922-0.922z"></path>
            </svg>
          </button>): null}
          {(listVisible && listVisible[0]) ? (<button className={style.listButton} onClick={() => openList ? openList(0) : ''}>
            <svg className={style.listImg} viewBox="0 0 35 35">
              <path d="M22.919 12.909h-21.865c-0.509 0-0.922-0.413-0.922-0.922s0.413-0.922 0.922-0.922h21.865c0.509 0 0.922 0.413 0.922 0.922s-0.413 0.922-0.922 0.922z"></path>
            </svg>
          </button>) : null}
        </div>
        <ul className={(listVisible && listVisible[0]) ? style.listOpenHelp : style.list}>
          <li className={style.item}>Payment</li>
          <li className={style.item}>Delivery</li>
          <li className={style.item}>Returns</li>
          <li className={style.item}>Gift Card</li>
          <li className={style.item}>Guest purchase</li>
          <li className={style.item}>Electronic receipt</li>
        </ul>
      </div>
      <div className={device}>
        <div className={style.titleBox}>
          <h1 className={style.title}>Terms</h1>
            {(listVisible && !listVisible[1]) ? (<button className={style.listButton} onClick={() => openList ? openList(1) : ''}>
          <svg className={style.listImg} viewBox="0 0 35 35">
            <path d="M22.919 11.065h-10.011v-10.011c0-0.509-0.413-0.922-0.922-0.922s-0.922 0.413-0.922 0.922v10.011h-10.011c-0.509 0-0.922 0.413-0.922 0.922s0.413 0.922 0.922 0.922h10.011v10.011c0 0.509 0.413 0.922 0.922 0.922s0.922-0.413 0.922-0.922v-10.011h10.011c0.509 0 0.922-0.413 0.922-0.922s-0.413-0.922-0.922-0.922z"></path>
            </svg>
          </button>): null}
          {(listVisible && listVisible[1]) ? (<button className={style.listButton} onClick={() => openList ? openList(1) : ''}>
            <svg className={style.listImg} viewBox="0 0 35 35">
              <path d="M22.919 12.909h-21.865c-0.509 0-0.922-0.413-0.922-0.922s0.413-0.922 0.922-0.922h21.865c0.509 0 0.922 0.413 0.922 0.922s-0.413 0.922-0.922 0.922z"></path>
            </svg>
          </button>) : null}
        </div>
        <ul className={(listVisible && listVisible[1]) ? style.listOpen : style.list}>
          <li className={style.item}>Privacy policy</li>
          <li className={style.item}>Cookie settings</li>
          <li className={style.item}>Cookies policy</li>
          <li className={style.item}>Site Map</li>
        </ul>
      </div>
      <div className={device}>
        <div className={style.titleBox}>
          <h1 className={style.title}>We are NOVA</h1>
          {(listVisible && !listVisible[2]) ? (<button className={style.listButton} onClick={() => openList ? openList(2) : ''}>
          <svg className={style.listImg} viewBox="0 0 35 35">
            <path d="M22.919 11.065h-10.011v-10.011c0-0.509-0.413-0.922-0.922-0.922s-0.922 0.413-0.922 0.922v10.011h-10.011c-0.509 0-0.922 0.413-0.922 0.922s0.413 0.922 0.922 0.922h10.011v10.011c0 0.509 0.413 0.922 0.922 0.922s0.922-0.413 0.922-0.922v-10.011h10.011c0.509 0 0.922-0.413 0.922-0.922s-0.413-0.922-0.922-0.922z"></path>
            </svg>
          </button>): null}
          {(listVisible && listVisible[2]) ? (<button className={style.listButton} onClick={() => openList ? openList(2) : ''}>
            <svg className={style.listImg} viewBox="0 0 35 35">
              <path d="M22.919 12.909h-21.865c-0.509 0-0.922-0.413-0.922-0.922s0.413-0.922 0.922-0.922h21.865c0.509 0 0.922 0.413 0.922 0.922s-0.413 0.922-0.922 0.922z"></path>
            </svg>
          </button>) : null}
        </div>
        <ul className={(listVisible && listVisible[2]) ? style.listOpen : style.list} >
          <li className={style.item}>About Nova</li>
          <li className={style.item}>Join Life</li>
          <li className={style.item}>Work with us</li>
          <li className={style.item}>Press</li>
        </ul> 
      </div>
    </>
  );
};

export default FooterList