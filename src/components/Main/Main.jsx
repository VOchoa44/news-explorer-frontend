import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import nothingFoundIcon from "../../images/nothing-found-icon.svg";

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
      {hasSearched && !isLoading && !hasError && (
        <section className="main__search-results">
          {articles.length > 0 && (
            <h2 className="main__search-results-title">Search results</h2>
          )}
          <div className="main__search-results-content">
            {isLoading ? (
              <Preloader />
            ) : hasError ? (
              <p className="main__search-results-message">
                Sorry, something went wrong during the request. Please try again
                later.
              </p>
            ) : hasSearched && articles.length === 0 ? (
              <div className="main__search-results-nothing-found">
                <img
                  className="main__search-results-nothing-found-icon"
                  src={nothingFoundIcon}
                  alt="nothing found icon"
                />
                <p className="main__search-results-message">Nothing Found</p>
                <p className="main__search-results-nothing-found-description">
                  Sorry, but nothing matched your search terms
                </p>
              </div>
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
      )}
      <section className="main__about">
        <About />
      </section>
    </main>
  );
}

export default Main;
