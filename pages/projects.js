import Navbar from "../components/navbar";
import Footer from "../components/footer";
import style from '../styles/Projects.module.css';

export default function Projects (){
  return (
    <div>
      <Navbar/>
      <div className={style.main}>
        <div className={style.article}>
          <h3 className="text-sm font-bold uppercase text-blue-700">Title 1</h3>
          <p>Description</p>
        </div>
        <div className={style.article}>
          <h3 className="text-sm font-bold uppercase text-blue-700">Title 2</h3>
          <p>Description</p>
        </div>
        <div className={style.article}>
          <h3 className="text-sm font-bold uppercase text-blue-700">Title 3</h3>
          <p>Description</p>
        </div>
        <div className={style.article}>
          <h3 className="text-sm font-bold uppercase text-blue-700">Title 4</h3>
          <p>Description</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};