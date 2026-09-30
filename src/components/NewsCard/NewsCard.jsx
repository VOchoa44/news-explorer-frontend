import { useState } from "react";
import "./NewsCard.css";
import bookmarkDefault from "../../images/bookmark-default.svg";
import bookmarkHover from "../../images/bookmark-hover.svg";
import bookmarkSave from "../../images/bookmark-save.svg";
import trashDefault from "../../images/trash-default.svg";
import trashHover from "../../images/trash-hover.svg";
import noImage from "../../images/no-image.png";

function NewsCard({
  article,
  isLoggedIn,
  isSavedNews,
  handleRemoveArticle,
  handleSaveArticle,
}) {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <li className="news-card">
      {article.query && <p className="news-card__keyword">{article.query}</p>}
      <img
        className="news-card__image"
        src={article.urlToImage || noImage}
        alt={article.title}
      />
      <div className="news-card__bookmark-container">
        <button
          type="button"
          className={`news-card__bookmark ${
            isSaved ? "news-card__bookmark--active" : ""
          }`}
          onClick={() => {
            if (isSavedNews) {
              handleRemoveArticle(article);
            } else if (isLoggedIn) {
              if (isSaved) {
                handleRemoveArticle(article);
              } else {
                handleSaveArticle(article);
              }

              setIsSaved(!isSaved);
            }
          }}
        >
          <img
            src={
              isSavedNews
                ? trashDefault
                : isSaved
                  ? bookmarkSave
                  : bookmarkDefault
            }
            alt={isSavedNews ? "remove saved article" : "bookmark button"}
            className="news-card__bookmark-default-image"
          />

          {!isSaved && (
            <img
              src={isSavedNews ? trashHover : bookmarkHover}
              alt=""
              className="news-card__bookmark-hover-image"
            />
          )}
        </button>
        {isSavedNews ? (
          <p className="news-card__bookmark-message news-card__bookmark-message--saved">
            Remove from saved
          </p>
        ) : (
          !isLoggedIn && (
            <p className="news-card__bookmark-message">
              Sign in to save articles
            </p>
          )
        )}
      </div>
      <p className="news-card__date">
        {new Date(article.publishedAt).toLocaleDateString("en-Us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <a
        className="news-card__title"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {article.title}
      </a>
      <p className="news-card__text">{article.description}</p>
      <p className="news-card__source">{article.source.name}</p>
    </li>
  );
}

export default NewsCard;
