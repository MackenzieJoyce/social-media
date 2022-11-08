import { data } from "../data";
import PostMap from "./PostMap";

const ExistingPosts = () => {    
    return (
        <>
            <h2>Existing Posts</h2>
            <PostMap data={data} />
        </>
    );
}

export default ExistingPosts