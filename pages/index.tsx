import Head from 'next/head';
import Header from '../components/Header';
// import ExistingPosts from '../components/ExistingPosts';
import AddPost from '../components/AddPost';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
      <div className={styles.container}>
        <header>
          <Header />
        </header>

        <main>
          <AddPost />
          {/* <ExistingPosts /> */}
          <section>
            {posts.map((post: any) => {
              return (
                <div key={post.id} className={styles.card}>
                  <h4>{post.username}</h4>
                  <p>{post.content}</p>
                  {/* <img></img> */}
                </div>
              );
            })}
          </section>
        </main>
      </div>
  );
}

export default Home;