import styles from "./Workframe.module.css";

function Workframe() {
    return (
      <div className={styles.wrap}>
        <div className={styles.header}>
          <button className={styles.btn_header_all}>ALL</button>
          &nbsp;<strong>DEVKIT</strong>
        </div>
        <div className={styles.container}>
          <div>
            <aside className={styles.lnb}>
              <div className={styles.lnb_title_area}>
                <span className={styles.lnb_title}>중메뉴</span>
              </div>
            </aside>
            <button type="button" name="메뉴 열기/닫기" className={styles.btn_lnb}>◀</button>
          </div>
  
          <section className={styles.content}>
            <ul className={styles.tab1}>
              <li className="">
                <a href="#" title="MDI 메뉴 Off"><span>MDI 메뉴 Off</span><button type="button" title="닫기"></button></a>
              </li>            
              <li className={styles.on2}>
                <a href="#" title="MDI 메뉴 On"><span>MDI 메뉴 On</span><button type="button" title="닫기"></button></a>
              </li>
            </ul>
            <section className={styles.contents_in}>
              <div>
                contents
              </div>
            </section>
            <button type="button" title="탭 전체닫기" className={styles.btn_tab_all_close}></button>
          </section>
        </div>
      </div>
    );
  }
  
  export default Workframe;
  