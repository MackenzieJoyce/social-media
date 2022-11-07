const PostMap = ({ data }) => {
    return (
        <div>
            {data.map((post:any) => (
                <div key={post.id}>
                    <h4>{post.username}</h4>
                    <p>{post.content}</p>
                    <img></img>
                </div>
            ))}
        </div>
    )
}

export default PostMap