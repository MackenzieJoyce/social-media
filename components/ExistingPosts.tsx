import { data } from "../data";

const ExistingPosts = () => {    
    return (
        <>
            <h2>Existing Posts</h2>
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

export default ExistingPosts