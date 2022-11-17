import Navbar from "../components/navbar";
import Footer from "../components/footer";
import style from '../styles/Projects.module.css';
import Image from "next/image";
import github from '../public/github.png';
import siteweb from '../public/internet.png';

export default function Projects (){
  return (
    <div>
      <Navbar/>
      <div className={style.main}>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">API-REST TS</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/TS-Singleton-API-REST"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>API-REST construida con typescript y el patron singleton.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>TYPESCRIPT</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
          <h3 className="text-sm font-bold uppercase text-blue-700">Generador de codigo QR</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/qr-code-generator"><Image src={github} alt="github"/></a>
              </div>
              <div className={style.link}>
                <a href="https://qr-code-gntor.herokuapp.com/"><Image src={siteweb} alt="SiteWeb"/></a>
              </div>
            </div>
          </div>
          <p>Generador de codigo QR construido con NodeJS y plantillas ejs.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>CSS</label>
          <label className={style.technology}>EJS</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
          <h3 className="text-sm font-bold uppercase text-blue-700">API-REST de Notas</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/Api-Notes"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>API-REST con autenticacion de usuarios y operaciones CRUD de las notas.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>MONGOOSE</label>
          <label className={style.technology}>EXPRESS</label>
          <label className={style.technology}>JWT</label>
          <label className={style.technology}>EXPRESS-VALIDATOR</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">Acortador de URL</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/Url-Shortener"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>Acortador de URL con NodeJS.</p>
          <div className={style.listtech}>
            <label className={style.technology}>NODEJS</label>
            <label className={style.technology}>EXPRESS</label>
            <label className={style.technology}>EXPRESS-VALIDATOR</label>
            <label className={style.technology}>MONGOOSE</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">API-REST de BLOG</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/Blog_Api"><Image src={github} alt="github"/></a>
              </div>
              <div className={style.link}>
                <a href="https://blogapi-production-ba40.up.railway.app/"><Image src={siteweb} alt="SiteWeb"/></a>
              </div>
            </div>
          </div>
          <p>API-REST que permite crear usuarios y tambien generar Posts.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>EXPRESS</label>
          <label className={style.technology}>MONGOOSE</label>
          <label className={style.technology}>JWT</label>
          <label className={style.technology}>SWAGGER</label>
          <label className={style.technology}>MOCHA</label>
          <label className={style.technology}>TEST UNITARIOS</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">Blog con React</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/Blog-React"><Image src={github} alt="github"/></a>
              </div>
              <div className={style.link}>
                <a href="https://app.netlify.com/sites/blog-dev-ne"><Image src={siteweb} alt="SiteWeb"/></a>
              </div>
            </div>
          </div>
          <p>Este blog esta construido con REACT, funciona con la api de blogs.</p>
          <div className={style.listtech}>
          <label className={style.technology}>REACT</label>
          <label className={style.technology}>CSS</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">API de Mercado</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/Api_Market"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>API-REST de mercado; permite hacer operaciones CRUD con usuarios y productos.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>EXPRESS</label>
          <label className={style.technology}>MONGOOSE</label>
          <label className={style.technology}>JWT</label>
          <label className={style.technology}>PASSPORT</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">Aplicación de Mercado</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/React-Market-App"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>Aplicación de Mercado construida con REACT.</p>
          <div className={style.listtech}>
          <label className={style.technology}>REACT</label>
          <label className={style.technology}>CSS</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">Aplicación de Notas</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/NotesNR"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>Esta aplicación permite realizar operaciones CRUD con las notas.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>REACT</label>
          <label className={style.technology}>CSS</label>
          <label className={style.technology}>EXPRESS</label>
          <label className={style.technology}>MONGOOSE</label>
          <label className={style.technology}>WEBPACK</label>
          <label className={style.technology}>BABEL</label>
          </div>
        </div>
        <div className={style.article}>
          <div className={style.title}>
            <h3 className="text-sm font-bold uppercase text-blue-700">GraphQL de Productos</h3>
            <div className={style.title}>
              <div className={style.link}>
                <a href="https://github.com/nicoescudero/Graphql-Api"><Image src={github} alt="github"/></a>
              </div>
            </div>
          </div>
          <p>Proyecto con GraphQL para realizar operaciones CRUD con Productos.</p>
          <div className={style.listtech}>
          <label className={style.technology}>NODEJS</label>
          <label className={style.technology}>EXPRESS-GRAPHQL</label>
          <label className={style.technology}>MONGOOSE</label>
          <label className={style.technology}>GRAPHQL</label>
          </div>
        </div>
      </div>
      <Footer footer={style.footer}/>
    </div>
  );
};