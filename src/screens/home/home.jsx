import { useState, useEffect } from "react";

import { Footer, Header } from "../../components/";
import { Posts } from "./components/posts/posts";
import { fetchData } from "../../utils/axios-caseiro";
import { ENDPOINTS } from "../../constants/endpoints";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  function handleClickAddPost() {
    navigate(ROUTES.CREATE_POST);
  }

  useEffect(() => {
    async function getPosts() {
      const res = await fetchData(ENDPOINTS.POSTS);

      if (res?.length) {
        setPosts(res);
      }
    }

    if (!posts?.length) {
      getPosts();
    }
  }, [posts]);

  return (
    <div className="container">
      <Header title="PROGRESSO PESSOAL" />

      <main className="posts__main">
        {posts?.length ? (
          <Posts posts={posts} />
        ) : (
          <h2> Não há posts no momento</h2>
        )}
        <button onClick={handleClickAddPost} className="posts__add">
          +
        </button>
      </main>

      <Footer />
    </div>
  );
}
