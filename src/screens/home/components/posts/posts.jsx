import { Post } from "../post/post";

import "./posts.css"

export function Posts({ posts }) {
  return <ul className="posts">
    {posts.map(post => <Post {...post} key={post.id} />)}
  </ul>
}