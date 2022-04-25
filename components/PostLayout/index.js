import { format, parseISO } from 'date-fns';
import { RichText } from '@graphcms/rich-text-react-renderer';
import styles from './PostLayout.module.css';

export default function PostLayout({ post }) {
  return (
    <article className={styles.postContainer}>
      <div className={styles.postHeading}>
        <h1>{post.title}</h1>
        <span>
          Daniel Dolehide |{' '}
          {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
      <RichText content={post.content.raw} />
    </article>
  );
}
