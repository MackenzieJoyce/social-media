import { useRouter } from "next/router";

const DeletePost = ({ post }) => {
    const router = useRouter();

    const handleDeletePost = async () => {
        const postid = router.query.id;
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${postid}`, {
                method: 'DELETE'
            });
            alert('Post deleted!');
            backHome();
        } catch (error) {
            console.log("Error in DELETE");
        }
    };

    const backHome = () => {
        router.push('/');
    };

    return (
        <>
            {/* Create modal */}
            <h4>{post.username}</h4>
            <p>{post.content}</p>
            <p>Are you sure?</p>
            <button onClick={handleDeletePost}>Yes</button>
            <button onClick={backHome}>No</button>
        </>
    );
};

// ctx = context object 
DeletePost.getInitialProps = async (ctx:any) => {
    const { id } = ctx.query;

    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    const { data } = await res.json();

    return { post: data };
}

export default DeletePost;