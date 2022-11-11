import Image from "next/image";
import style from '../styles/Home.module.css'
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <label className={style.logo}>DEV Blog</label>
      <div className={style.options}>
        <a href="" className={style.btn_page}>Home</a>
        <a href="https://www.linkedin.com/in/nicolas-escudero/" className={style.btn_page}>Projects</a>
        <a href="https://github.com/nicoescudero" className={style.btn_page}>Github</a>
      </div>
    </nav>
  );
};

export default Navbar;