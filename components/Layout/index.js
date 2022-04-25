import Seo from '@components/Seo';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './Layout.module.css';

export default function Layout({ children, meta }) {
  return (
    <div>
      <Seo meta={meta} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
