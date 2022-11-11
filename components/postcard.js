import Link from 'next/link'
import { format, parseISO } from 'date-fns';
import style from '../styles/Home.module.css';

export default function PostCard(post) {
  return (
    <div className={style.card} >
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
      <p>{post.description}</p>
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}