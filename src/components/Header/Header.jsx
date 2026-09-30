import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header({
  isLoggedIn,
  username,
  handleLogoutClick,
  isSavedNews,
  handleLoginClick,
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header
      className={`header ${
        isSavedNews ? "header--saved-news" : ""
      } ${isMobileOpen ? "header--menu-open" : ""}`}
    >
      <NavLink to="/" className="header__logo">
        NewsExplorer
      </NavLink>

      <Navigation
        isLoggedIn={isLoggedIn}
        username={username}
        handleLogoutClick={handleLogoutClick}
        handleLoginClick={handleLoginClick}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isSavedNews={isSavedNews}
      />
    </header>
  );
}

export default Header;
