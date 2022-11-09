import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';

const Home = ({ posts }) => {
  return (
      <>
        <h2>Existing Posts</h2>
        <div className={styles.postFeed}>
          {posts.map((post: any) => {
            return (
              <div key={post._id} className={styles.card}>
                <div>
                  <h4>{post.username}</h4>

                  <p>{post.content}</p>
                </div>

                <div className={styles.btnBox}>
                  <Link href={`/${post._id}/edit`}>
                    <Button variant="contained" color="info">
                      Edit
                    </Button>
                  </Link>

                  <Link href={`/${post._id}`}>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const { data } = await res.json();

  return { posts: data };
};

export default Home;
