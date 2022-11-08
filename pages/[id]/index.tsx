const Post = ({ post }) => {
    return (
        <>
            {/* Create modal */}
            <p>Are you sure?</p>
            <button onClick={handleDeletePost}>Yes</button>
            <button>No</button>
        </>
    );
};

// ctx = context object 
Post.getInitialProps = async (ctx:any) => {
    const { id } = ctx.query;

    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    const { data } = await res.json();

    return { post: data };
}

export default Post;