import styles from '../styles/Home.module.css'

const PostMap = ({ data }) => {
    return (
        <>
            {data.map((post:any) => (
                <div key={post.id} className={styles.card}>
                    <h4>{post.username}</h4>
                    <p>{post.content}</p>
                    <img></img>
                </div>
            ))}
        </>
    )
}

export default PostMap