import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

function Main({
  articles,
  isLoggedIn,
  isLoading,
  hasSearched,
  hasError,
  displayedArticles,
  handleShowMore,
  handleSaveArticle,
  handleRemoveArticle,
}) {
  return (
    <main className="main">
      <section className="main__search-results">
        <h2 className="main__search-results-title">Search results</h2>
        <div className="main__search-results-content">
          {isLoading ? (
            <Preloader />
          ) : hasError ? (
            <p className="main__search-results-message">
              Sorry, something went wrong during the request. Please try again
              later.
            </p>
          ) : hasSearched && articles.length === 0 ? (
            <p className="main__search-results-message">Nothing Found</p>
          ) : (
            hasSearched && (
              <NewsCardList
                articles={articles.slice(0, displayedArticles)}
                isLoggedIn={isLoggedIn}
                handleSaveArticle={handleSaveArticle}
                handleRemoveArticle={handleRemoveArticle}
              />
            )
          )}
          {!isLoading && displayedArticles < articles.length && (
            <button
              type="button"
              className="main__search-results-button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}
        </div>
      </section>
      <section className="main__about">
        <About />
      </section>
    </main>
  );
}

export default Main;
