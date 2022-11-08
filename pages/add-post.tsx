import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { log } from 'console';
    
const AddPost = () => {
    const [formState, setFormState] = useState({
        username: '',
        content: '',
    });
    console.log(formState);
    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event:any) => {
        event.preventDefault();

        try { 
            const res = await fetch('http://localhost:3000/api/posts', { 
                method: 'POST',
                body: JSON.stringify(formState),
                headers: { 
                    'Content-Type': 'application/json',
                },
            });
            const { data } = await res.json();
            console.log(data);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2>Create Post</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        required
                        onChange={handleChange}
                        // value={formState.username}
                        placeholder="Username" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        required
                        onChange={handleChange}
                        // value={formState.content}
                        placeholder="Enter a message"
                        rows="4" cols="50" />
                </div>
                {/* <div className={styles.formGroup}>
                <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image" />
                </div> */}
                <input
                    type="submit"
                    value="Submit"
                    className={styles.btn} />
            </form>
        </>
    )
}

export default AddPost