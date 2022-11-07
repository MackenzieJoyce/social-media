const Post = () => {    
    return (
        <>
            {data.map((post) => (
                <div key={post.id}>
                    <h4>{post.username}</h4>
                    <p>{post.content}</p>
                    <img></img>
                </div>
            ))}
        </>
    );
}

export default Post