import { useRouter } from 'next/router';
import { useState } from 'react';

const EditPost = ({ post }:any) => {
  const [formState, setFormState] = useState({
    content: post.content
  });
  const router = useRouter();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/posts/${post._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      alert(post.username + '\'s post was updated!');
      router.push('/');
    } catch (error) {
      console.log('Error on handleFormSubmit ' + error);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleFormSubmit}>
        <h4>{post.username}</h4>
        <textarea
          id="content"
          name="content"
          required
          onChange={handleChange}
          value={formState.content}
          placeholder="Enter a message"
          rows={4}
          cols={50}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

EditPost.getInitialProps = async (ctx: any) => {
  const { id } = ctx.query;
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const { data } = await res.json();
  return { post: data };
};

export default EditPost;
