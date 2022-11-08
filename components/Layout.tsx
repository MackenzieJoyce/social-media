import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
      <html className={styles.container}>
      <Head>
        <title>Git Talking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>{children}</main>
    </html>
  );
};

export default Layout;
