import Head from 'next/head';
import Header from '../components/Header';
// import ExistingPosts from '../components/ExistingPosts';
import AddPost from '../components/AddPost';
import styles from '../styles/Home.module.css';

const Home = ({ posts }) => {
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
};

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const { data } = await res.json();

  return { posts: data };
};

export default Home;
