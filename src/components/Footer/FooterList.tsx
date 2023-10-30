import { MenuContext } from './MenuList';
import style from './Footer.module.scss'

const FooterList = ({device, listVisible, openList}:{device: string, listVisible?: boolean[], openList?: Function}): JSX.Element => {
  const { m1, m2, m3 } = MenuContext();
  m1.map(el => console.log(el.id)
  )
  
  return (
    <>
      <div className={device}>
        <div className={style.titleBox}>
          <h3 className={style.title}>Help</h3>
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
        <nav className={(listVisible && listVisible[0]) ? style.listOpenHelp : style.list}>
          {m1.map(el => {
            return (
            <a href="#" className={style.link} key={el.id}>{el.label}</a>
          )})}
        </nav>
      </div>
      <div className={device}>
        <div className={style.titleBox}>
          <h3 className={style.title}>Terms</h3>
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
        <nav className={(listVisible && listVisible[1]) ? style.listOpen : style.list}>
          {m2.map(el => {
            return (
            <a href="#" className={style.link} key={el.id}>{el.label}</a>
          )})}
        </nav>
      </div>
      <div className={device}>
        <div className={style.titleBox}>
          <h3 className={style.title}>We are NOVA</h3>
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
        <nav className={(listVisible && listVisible[2]) ? style.listOpen : style.list} >
          {m3.map(el => {
            return (
            <a href="#" className={style.link} key={el.id}>{el.label}</a>
          )})}
        </nav> 
      </div>
    </>
  );
};

export default FooterList