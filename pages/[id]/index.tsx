import { useRouter } from "next/router";

const Post = ({ post }) => {
    const router = useRouter();

    const handleDeletePost = async () => {
        const postid = router.query.id;
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postid}`, {
                method: 'DELETE'
            });
            alert('Post deleted!');
            router.push('/');
        } catch (error) {
            console.log("Error in DELETE");
        }
    };


    return (
        <>
            {/* Create modal */}
            <h4>{post.username}</h4>
            <p>{post.content}</p>
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