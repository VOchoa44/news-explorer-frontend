import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSubmit }) {
  const [keyword, setKeyword] = useState("");
  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(keyword);
      }}
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        required
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
