const AddPost = () => {
    return (
        <>
            <h2>Add Post</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" />
                <label htmlFor="content">Content</label>
                <textarea placeholder="Content" rows="4" cols="50" />
                <label htmlFor="image">Image</label>
                <input type="file" />
            </form>
        </>
    )
}

export default AddPost