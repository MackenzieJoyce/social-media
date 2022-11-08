import { useRouter } from "next/router";
import { useState } from "react";

const EditPost = ({ post }) => {
    const [formState, setFormState] = useState({ 
        content: post.content
    });
    const router = useRouter() 

    
    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleFormSubmit}>
                <h4>{post.username}</h4>
                <input type="text" name="content" value={formState.content} />
                <input type="submit">Finished</input>
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