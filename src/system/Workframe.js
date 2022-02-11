import styles from "./Workframe.module.css";
import { useEffect, useState } from "react";
import Lnb from "./Lnb";

function Workframe() {

  const [menuList, setMenuList] = useState([]);
  const [mdiList, setMdiList] = useState([]);

  const getMenus = () => {
    const dataMenu = [
                      {"mid":"MDC0201", "name":"메뉴1", isOpen:false}
                      ,{"mid":"MDC0202", "name":"메뉴2", isOpen:false}
    ];

    setMenuList(dataMenu);

  };

  const onLnbClick = (menuItem) => {
    console.log("menu clicked", menuItem);

    const isSameMid = (element) => element.mid ===  menuItem.mid;

    let idx = mdiList.findIndex(isSameMid);
    console.log("findIdx:", idx);
    if(idx < 0){
      setMdiList(currentArray => [...currentArray, menuItem]);
      console.log("mdiList", mdiList);
    }else{
      console.log("The menu already exists.");
    }
  };

  useEffect(()=>{
    getMenus();
  } ,[]);


  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.btn_header_all}>ALL</button>
        &nbsp;<strong>DEVKIT</strong>
      </div>
      <div className={styles.container}>
        
        <Lnb menuList={menuList} onLnbClick={onLnbClick}/>

        <section className={styles.content}>
          <ul className={styles.tab1}>
            {mdiList.map((menuItem, index) =>  
              <li key={index} className="" >
                <a href="#" title={menuItem.name}><span>{menuItem.name}</span><button type="button" title="닫기"></button></a>
              </li>                
            )}
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

  /*
            <li className="">
              <a href="#" title="MDI 메뉴 Off"><span>MDI 메뉴 Off</span><button type="button" title="닫기"></button></a>
            </li>            
            <li className={styles.on2}>
              <a href="#" title="MDI 메뉴 On"><span>MDI 메뉴 On</span><button type="button" title="닫기"></button></a>
            </li>  
  */
}


  export default Workframe;
  