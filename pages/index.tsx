// import Head from 'next/head';
import Header from '../components/Header';
// import ExistingPosts from '../components/ExistingPosts';
// import AddPost from './api/posts/add-post';
// import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';


const Home = ({ posts }) => {
  // const blue : string = 'color: #42a5f5';
  return (
    <>
      {/* Commented out while I make it a modal... File moved into pages/api/posts */}
      {/* <AddPost /> */}
      {/* <ExistingPosts /> */}
      <section>
        <h2>Existing Posts</h2>
        <div>
          {posts.map((post: any) => {
            return (
              <div key={post._id} className={styles.card}>
                <h4>{post.username}</h4>

                <p>{post.content}</p>

                <Link href={`/${post._id}`}>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </Link>

                <Link href={`/${post._id}/edit`}>
                <Button variant="contained" color='info'>Edit</Button>
                </Link>
                {/* <img></img> */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const { data } = await res.json();

  return { posts: data };
};

export default Home;
