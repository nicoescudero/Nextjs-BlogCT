import Link from 'next/link';
import style from '../styles/Navbar.module.css';
import Head from "next/head";
import { useState } from "react";

const Navbar = () => {
  const [navActive,setNavActive] = useState(false);

  function Show(){
    if(screen.width === 850) setNavActive(true);
    setNavActive(false);
  };

  return (
    <Head>
      <title>Blog</title>
      <nav className={style.navbar}>
      <label className={style.logo}>DEV Blog</label>
      <div className={style.options} for="check">
        <Link href="/"><a className={style.btn_page}>Inicio</a></Link>
        <Link href="/projects"><a className={style.btn_page}>Proyectos</a></Link>
        <a href="https://github.com/nicoescudero" className={style.btn_page}>Github</a>
      </div>
      <input type="checkbox" id="check" name="check" className={style.check}/>
      <label className={style.check_btn}>
        <div></div>
        <div></div>
        <div></div>
      </label>
      </nav>
    </Head>
  );
};

export default Navbar;