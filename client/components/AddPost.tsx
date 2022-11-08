import { useState } from 'react';
import styles from '../styles/Home.module.css'

const AddPost = () => {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    const handleAddPost = async (event:any) => {
        event.preventDefault();
    }

    return (
        <>
            <h2>Add Post</h2>
            <form onSubmit={handleAddPost} className={styles.form}>
                <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        required
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                        placeholder="Username" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        required
                        onChange={(event) => setContent(event.target.value)}
                        value={content}
                        placeholder="Enter a message"
                        rows="4" cols="50" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image" />
                </div>
                <input
                    type="submit"
                    value="Add Post"
                    className={styles.btn} />
            </form>
        </>
    )
}

export default AddPost