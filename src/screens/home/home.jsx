import { useState, useEffect } from "react";

import { Footer, Header } from "../../components/";
import { Posts } from "./components/posts/posts";
import { fetchData } from "../../utils/axios-caseiro";
import { ENDPOINTS } from "../../constants/endpoints";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

import "./home.css";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  const navigate = useNavigate();

  function handleClickAddPost() {
    navigate(ROUTES.CREATE_POST);
  }

  function handleClickAddStory() {
    navigate(ROUTES.CREATE_STORY);
  }

  useEffect(() => {
    async function getPosts() {
      const res = await fetchData(ENDPOINTS.POSTS);
      const res2 = await fetchData(ENDPOINTS.STORIES);

      if (res?.length) {
        setPosts(res);
      }

      if (res2?.length) {
        setStories(res2);
      }
    }

    if (!posts?.length) {
      getPosts();
    }
  }, [posts]);

  return (
    <div className="container home">
      <Header title="PROGRESSO PESSOAL" />

      <main className="posts__main">
        <header>
          <button onClick={handleClickAddStory}>+</button>
          {!stories.length && <>Adicione um story</>}
        </header>

        {posts?.length ? (
          <Posts posts={posts} />
        ) : (
          <h2 className="error"> Não há posts no momento</h2>
        )}
        <button onClick={handleClickAddPost} className="posts__add">
          +
        </button>
      </main>

      <Footer />
    </div>
  );
}
