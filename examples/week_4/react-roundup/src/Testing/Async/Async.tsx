import React, { useEffect, useState } from "react";

function Async() {
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Posts!</h1>
      <ul>
        {posts.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Async;
