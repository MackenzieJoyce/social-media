import { useRouter } from "next/router";

const EditPost = ({ post }) => {
    const router = useRouter()
    
    return (
        <div>
            <h1>Edit Post</h1>
        </div>
    )
}

EditPost.getInitialProps = async (ctx: any) => {
    const { id } = ctx.query;
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const { data } = await res.json();
    return { post: data };
}
    
export default EditPost