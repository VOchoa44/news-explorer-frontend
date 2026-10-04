// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SearchForm from "../SearchForm/SearchForm";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";
import getNews from "../../utils/NewsApi";
import { authorize, checkToken } from "../../utils/auth";
import { saveArticle, getItems, deleteArticle } from "../../utils/api";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token")),
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isRegistrationSuccessOpen, setIsRegistrationSuccessOpen] =
    useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [displayedArticles, setDisplayedArticles] = useState(3);
  const [username, setUsername] = useState("");
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkToken(token).then((data) => {
        setUsername(data.data.name);
        setIsLoggedIn(true);
      });
      getItems().then((articles) => {
        setSavedArticles(articles);
      });
    }
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleSubmit = (keyword) => {
    setHasError(false);
    setHasSearched(true);
    setIsLoading(true);

    const initialArticles =
      window.innerWidth <= 729 && window.innerWidth >= 490 ? 4 : 3;

    setDisplayedArticles(initialArticles);

    getNews(keyword)
      .then((data) => {
        const articlesWithQuery = data.articles.map((article) => ({
          ...article,
          query: keyword,
        }));
        setArticles(articlesWithQuery);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  const handleShowMore = () => {
    const cardsToAdd =
      window.innerWidth <= 768 && window.innerWidth >= 449 ? 4 : 3;

    setDisplayedArticles((current) => current + cardsToAdd);
  };

  const handleLogin = (values) => {
    authorize(values.email, values.password).then((data) => {
      localStorage.setItem("token", data.token);

      checkToken(data.token).then((userData) => {
        setUsername(userData.data.name);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      });
    });
  };

  const handleLoginClick = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleRegister = () => {
    setIsRegisterModalOpen(false);
    setIsRegistrationSuccessOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSaveArticle = (article) => {
    saveArticle(article).then((savedArticle) => {
      const updatedArticles = [savedArticle, ...savedArticles];
      setSavedArticles(updatedArticles);
    });
  };

  const handleRemoveArticle = (articleToRemove) => {
    deleteArticle(articleToRemove).then(() => {
      const updatedArticles = savedArticles.filter(
        (savedArticle) => savedArticle.url !== articleToRemove.url,
      );

      setSavedArticles(updatedArticles);
    });
  };

  const isSavedNews = location.pathname === "/saved-news";

  return (
    <div className="page">
      {isSavedNews ? (
        <Header
          isLoggedIn={isLoggedIn}
          username={username}
          handleLogoutClick={handleLogoutClick}
          isSavedNews={true}
          handleLoginClick={() => setIsLoginModalOpen(true)}
        />
      ) : (
        <div className="page__top">
          <Header
            isLoggedIn={isLoggedIn}
            username={username}
            handleLogoutClick={handleLogoutClick}
            isSavedNews={false}
            handleLoginClick={() => setIsLoginModalOpen(true)}
          />

          <section className="main__search">
            <h1 className="main__heading">
              <span className="main__span-accent">What's going on in</span> the
              world?
            </h1>

            <p className="main__description">
              Find the latest news on any topic and save them in your personal
              account
            </p>

            <SearchForm handleSubmit={handleSubmit} />
          </section>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Main
              handleSubmit={handleSubmit}
              articles={articles}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              hasSearched={hasSearched}
              hasError={hasError}
              displayedArticles={displayedArticles}
              handleShowMore={handleShowMore}
              handleSaveArticle={handleSaveArticle}
              handleRemoveArticle={handleRemoveArticle}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                savedArticles={savedArticles}
                handleRemoveArticle={handleRemoveArticle}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
        onRegisterClick={handleRegisterClick}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onLoginClick={handleLoginClick}
        onRegister={handleRegister}
      />

      <RegistrationSuccessModal
        isOpen={isRegistrationSuccessOpen}
        onClose={() => setIsRegistrationSuccessOpen(false)}
        onLoginClick={() => {
          setIsRegistrationSuccessOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;
