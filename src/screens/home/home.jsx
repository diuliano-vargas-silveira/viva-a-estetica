import { useState, useEffect } from "react";

import { Footer, Header } from "../../components/";
import { Posts } from "./components/posts/posts";
import { fetchData } from "../../utils/axios-caseiro";
import { ENDPOINTS } from "../../constants/endpoints";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

import "./home.css";
import { Storie, StorieModal } from "./components/storie/storie";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [openStorie, setOpenStorie] = useState(false);
  const [selectedStorie, setSelectedStorie] = useState("");

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

  function handleStorieClick(storieImage) {
    setOpenStorie(true);
    setSelectedStorie(storieImage);
  }

  function handleStorieCloseClick() {
    setOpenStorie(false);
  }

  return (
    <div className="container home">
      <Header title="PROGRESSO PESSOAL" />

      <main className="posts__main">
        <header>
          <button onClick={handleClickAddStory}>+</button>
          {!stories.length && <>Adicione um story</>}
          <div className="flex gap">
            {stories.map((storie, index) => <Storie {...storie} key={index} onClick={() => handleStorieClick(storie.image)} />)}
          </div>
        </header>

        {openStorie && <StorieModal selectedStorie={selectedStorie} onClick={handleStorieCloseClick} />}

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
