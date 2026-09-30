import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  isLoggedIn,
  isSavedNews,
  handleRemoveArticle,
  handleSaveArticle,
}) {
  return (
    <ul className="news-card-list">
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          article={article}
          isLoggedIn={isLoggedIn}
          isSavedNews={isSavedNews}
          handleRemoveArticle={handleRemoveArticle}
          handleSaveArticle={handleSaveArticle}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
