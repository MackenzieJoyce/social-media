import { useRouter } from "next/router";
import { useState } from "react";

const EditPost = ({ post }) => {
    const [formState, setFormState] = useState({ 
        username: post.username,
        content: post.content
    });
    const router = useRouter() 

    
    return (
        <div>
            <h1>Edit Post</h1>
            <form>
                <input type="text" name="username" value={formState.username} />
                <input type="text" name="content" value={formState.content} />
                <button type="submit">Finished</button>
            </form>
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