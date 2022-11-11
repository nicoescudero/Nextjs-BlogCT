import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import style from '../../styles/Post.module.css'
import Navbar from '../../components/navbar'
import ButtonCoffee from '../../components/btn_coffee';

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>{post.title}</title>
        <Navbar/>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">Home</a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className={style.post} dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
      <ButtonCoffee/>
    </div>
  )
}

export default PostLayout