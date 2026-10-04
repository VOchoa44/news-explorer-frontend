const handleServiceResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};

const getNews = (keyword) => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const from = date.toISOString().split("T")[0];
  const to = new Date().toISOString().split("T")[0];
  const newsApiBaseUrl = import.meta.env.PROD
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
  const url = `${newsApiBaseUrl}?q=${keyword}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&pageSize=100&from=${from}&to=${to}`;
  return fetch(url).then(handleServiceResponse);
};

export default getNews;
