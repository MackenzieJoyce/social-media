import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });
  console.log(userInfo);
  const router = useRouter();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    console.log('Sign up entry was submitted!');

    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
      backHome();
    } catch (error) {
      console.log('Error on handleFormSubmit ' + error);
    }
  };

  const backHome = () => {
    router.push('/');
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className={styles.btnBox}>
          <Button variant="contained" color="info" type="submit">
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="info"
            onClick={() => router.push('/login')}
          >
            Login Instead
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
