export const saveArticle = (article) => {
  return new Promise((resolve) => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    const savedArticle = {
      _id: "65f7371e7bce9e7d331b11a0",
      url: article.url,
      urlToImage: article.urlToImage,
      title: article.title,
      publishedAt: article.publishedAt,
      description: article.description,
      source: article.source,
      query: article.query,
    };

    const updatedArticles = [savedArticle, ...savedArticles];

    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));

    resolve(savedArticle);
  });
};

export const getItems = () => {
  return new Promise((resolve) => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    resolve(savedArticles);
  });
};

export const deleteArticle = (article) => {
  return new Promise((resolve) => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    const updatedArticles = savedArticles.filter(
      (savedArticle) => savedArticle.url !== article.url,
    );

    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));

    resolve(article);
  });
};
