import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import ThemeToggleButton from '@components/ThemeToggleButton';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header
      className={cn(
        styles.header,
        router.asPath !== '/' ? styles.headerNotHomePage : styles.headerHomePage
      )}
    >
      {router.asPath !== '/' && (
        <Link href="/">
          <a className={styles.allPostsLink}>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>All Posts</span>
          </a>
        </Link>
      )}
      <ThemeToggleButton />
    </header>
  );
}
