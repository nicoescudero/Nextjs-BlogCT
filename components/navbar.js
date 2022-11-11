import Link from 'next/link';
import style from '../styles/Home.module.css'
import Head from "next/head";

const Navbar = () => {
  return (
    <Head>
      <title>Blog</title>
      <nav className={style.navbar}>
      <label className={style.logo}>DEV Blog</label>
      <div className={style.options}>
        <Link href="/"><a className={style.btn_page}>Inicio</a></Link>
        <Link href="/projects"><a className={style.btn_page}>Proyectos</a></Link>
        <a href="https://github.com/nicoescudero" className={style.btn_page}>Github</a>
      </div>
      </nav>
    </Head>
  );
};

export default Navbar;