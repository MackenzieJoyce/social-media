import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <Post />
    </>
  )
}
