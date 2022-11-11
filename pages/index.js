import Head from 'next/head'
import Image from 'next/image';
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostCard from '../components/postcard'
import Navbar from '../components/navbar'
import style from '../styles/Home.module.css'
import profile from '../public/profile.jpg';
import linkedin from '../public/linkedin.png';
import twitter from '../public/twitter.png';
import github from '../public/github.png';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div className={style.main}>
      <Head>
        <title>Blog</title>
        <Navbar/>
      </Head>
      <main className={style.container}>
        <div className={style.list}>
          <h2>Posts</h2>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
        <aside className={style.about}>
          <h3>Acerca de mi</h3>
          <div className={style.profile}>
            <Image src={profile} alt="profile" object-fit="contain"/>
          </div>
          <div className={style.social}>
            <div className={style.btn_social}>
              <a href="https://www.linkedin.com/in/nicolas-escudero/">
                <Image src={linkedin} alt="linkedin"/>
              </a>
            </div>
            <div className={style.btn_social}>
              <a href="https://twitter.com/NicoDev_Code">
                <Image src={twitter} alt="twitter"/>
              </a>
            </div>
            <div className={style.btn_social}>
              <a href="https://github.com/nicoescudero">
                <Image src={github} alt="github"/>
              </a>
            </div>
          </div>
        </aside>
      </main>
      <footer className={style.footer}>
        <p>Copyright © nicoescudero</p>
      </footer>
    </div>
  )
}