import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const AddPost = () => {
  const [formState, setFormState] = useState({
    username: '',
    content: ''
  });
  console.log(formState);
  const router = useRouter();

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    console.log('Post entry was submitted!');

    try {
      const res = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
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
      <h2>Create Post</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            required
            onChange={handleChange}
            placeholder="Enter a message"
            rows="4"
            cols="50"
          />
        </div>
        {/* <div className={styles.formGroup}>
                <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image" />
                </div> */}
        <div className={styles.btnBox}>
          <Button variant="contained" color="info" type="submit">
            Add Post
          </Button>
          <Button
            variant="outlined"
            color="info"
            type="submit"
            onClick={backHome}
          >
            Nevermind
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddPost;
