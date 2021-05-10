/* eslint-disable prettier/prettier */
import { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('Filho renderizou')
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export default function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // Component did mount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  console.log('renderinzou');

  return (
    <div>
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>


      {useMemo(() => {
        return posts.length > 0 && (
          posts.map((post) => <Post key={post.id} post={post} />)
        )
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
    </div>
  );
}
