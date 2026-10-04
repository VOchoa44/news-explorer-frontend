import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ savedArticles, handleRemoveArticle }) {
  const queries = savedArticles.map((article) => article.query);
  const uniqueQueries = new Set(queries);
  const uniqueQueriesArray = [...uniqueQueries];
  const firstQuery = uniqueQueriesArray[0];
  const secondQuery = uniqueQueriesArray[1];
  const otherQueryCount = Math.max(uniqueQueries.size - 2, 0);

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <h3 className="saved-news__title">Saved Articles</h3>
        <h2 className="saved-news__heading">
          Vince, you have {savedArticles.length} saved articles
        </h2>
        <p className="saved-news__keywords">
          By keywords: {firstQuery}
          {secondQuery && `, ${secondQuery}`}
          {otherQueryCount > 0 && `, and ${otherQueryCount} other`}
        </p>
      </section>
      <section className="saved-news__articles">
        <NewsCardList
          articles={savedArticles}
          isLoggedIn={true}
          isSavedNews={true}
          handleRemoveArticle={handleRemoveArticle}
        />
      </section>
    </main>
  );
}

export default SavedNews;
