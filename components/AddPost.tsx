import styles from '../styles/Home.module.css'

const AddPost = () => {

    const addPost = async (event:any) => {
        event.preventDefault();

        // Validate the form 

        // Get the form data 
    }

    return (
        <>
            <h2>Add Post</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="content">Content</label>
                    <textarea id="content" placeholder="Enter a message" rows="4" cols="50" />
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="image">Image</label>
                    <input type="file" id="image" />
                </div>
                <input type="submit" value="Add Post" className={styles.btn} onClick={addPost} />
            </form>
        </>
    )
}

export default AddPost