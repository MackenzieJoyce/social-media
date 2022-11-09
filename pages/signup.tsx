import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const SignUp = () => {
  // const { register, handleFormSubmit, errors } = useForm();
  // const onSubmit = (data) => console.log(data);

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  console.log(formState);
  const router = useRouter();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    console.log('Sign up entry was submitted!');
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            id="username"
            name="username"
            placeholder="Username"
            // ref={register({ required: true })}
          />
          {/* {errors.firstName && <p>This field is required</p>} */}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            id="password"
            name="password"
            placeholder="Password"
            // ref={register({ required: true })}
          />
          {/* {errors.password && <p>This field is required</p>} */}
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
