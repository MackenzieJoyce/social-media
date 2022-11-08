import Link from 'next/link';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Git Talking</h1>
        <p>A social platform for the not-so-social coder</p>
      </div>
      <Link href="/add-post">
        <Button variant="contained" color="info">
          Create Post
        </Button>

        {/* Create Post */}
      </Link>
    </div>
  );
};

export default Header;
