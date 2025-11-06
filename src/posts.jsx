import { useState, useEffect } from "react";
import OutlinedCard from "./card.jsx"; // adjust the path as needed

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Posts by Lois</h1>
      {posts ? (
        posts.map((p) => (
          <OutlinedCard key={p.id} title={p.title} body={p.body} />
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default Posts;
