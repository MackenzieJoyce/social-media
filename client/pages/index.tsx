import Head from 'next/head'
import Header from '../components/Header'
import ExistingPosts from '../components/ExistingPosts'
import AddPost from '../components/AddPost'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <AddPost />
      <ExistingPosts />
    </div>
  )
}
