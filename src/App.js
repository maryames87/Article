import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth/index";
import AddArticle from "./pages/AddArticle/index";
import Articles from "./pages/Articles/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { Contexts } from "./contexts";
import Article from "./pages/Article/index";
import { useEffect } from "react";

const App = () => {
  const { loader, setArticles } = useContext(Contexts);

  useEffect(() => {
    const locatedArticles = JSON.parse(localStorage.getItem("articles"));

    if (locatedArticles) {
      setArticles(locatedArticles);
    }
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      {loader && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/my-article" element={<Articles />} />
        <Route path="/card-article/:id" element={<Article />} />
      </Routes>
    </>
  );
};

export default App;
