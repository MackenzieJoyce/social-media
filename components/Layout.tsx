import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
      <>
      <Head>
        <title>Git Talking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;
