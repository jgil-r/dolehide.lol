import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import styles from './PostList.module.css';

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts.map(({ id, publishedAt, slug, title, description }) => (
        <li key={id}>
          <Link href={`/posts/${slug}`}>
            <a className={styles.postLink}>{title}</a>
          </Link>
          <span className={styles.postDate}>
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
          </span>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
