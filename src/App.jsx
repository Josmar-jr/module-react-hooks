/* eslint-disable prettier/prettier */
import { useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou')
  return (
    <div key={post.id}>
      <h1
        style={{ fontSize: '14px' }}
        onClick={() =>
          handleClick(post.title)}>{post.title}
      </h1>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

export default function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  // Component did mount
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));

  }, []);

  useEffect(() => {
    input.current.focus()
    console.log(input.current)
  }, [value])

  const handleClick = (value) => {
    setValue(value)
  }

  console.log('renderinzou');

  return (
    <div>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>


      {useMemo(() => {
        return posts.length > 0 && (
          posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />)
        )
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
    </div>
  );
}
