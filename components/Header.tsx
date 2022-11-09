import Link from 'next/link';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Git Talking</h1>
        <p>A social platform for the not-so-social coder</p>
      </Link>
      <Link href="/add-post">
        <Button variant="contained" color="info">
          Create Post
        </Button>
      </Link>
      <Link href="/signup">
        <Button variant="contained" color="info">
          Sign Up
        </Button>
      </Link>
    </header>
  );
};

export default Header;
