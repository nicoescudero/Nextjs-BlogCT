import Link from 'next/link';
import style from '../styles/Navbar.module.css';
import Head from "next/head";

const Navbar = () => {
  return (
    <Head>
      <title>Blog</title>
      <nav className={style.navbar}>
      <label className={style.logo}>Nico CodeDev</label>
      <div className={style.options} for="check">
        <Link href="/"><a className={style.btn_page}>Inicio</a></Link>
        <Link href="/projects"><a className={style.btn_page}>Proyectos</a></Link>
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