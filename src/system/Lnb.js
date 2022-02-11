import styles from "./Workframe.module.css";

function Lnb ({menuList, onLnbClick}){
    return (
        <div>
            <aside className={styles.lnb}>
              <div className={styles.lnb_title_area}>
                <span className={styles.lnb_title}>트리메뉴 필요.</span>
              </div>
              <div className={styles.lnb_tree}>
                <ul>
                    {menuList.map((menuItem, index) => <li key={index} onClick={()=>onLnbClick(menuItem)}>{menuItem.name}</li>)}
                </ul>
              </div>
            </aside>
            <button type="button" name="메뉴 열기/닫기" className={styles.btn_lnb}>◀</button>            
        </div>
    );
}

export default Lnb;