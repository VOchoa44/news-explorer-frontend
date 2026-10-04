import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.svg";
import logoutIconWhite from "../../images/logout-white.svg";
import menuIcon from "../../images/menu.svg";
import menuLoginIcon from "../../images/menu-login.svg";
import closeIcon from "../../images/close.svg";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  username,
  handleLogoutClick,
  handleLoginClick,
  isMobileOpen,
  setIsMobileOpen,
  isSavedNews,
}) {
  return (
    <nav className={`navigation ${isLoggedIn ? "navigation--logged-in" : ""}`}>
      <button
        type="button"
        className="navigation__menu"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <img
          className="navigation__menu-icon"
          src={
            isMobileOpen ? closeIcon : isSavedNews ? menuLoginIcon : menuIcon
          }
          alt="Menu"
        />
      </button>
      {isLoggedIn ? (
        <>
          <NavLink to="/" className="navigation__link">
            Home
          </NavLink>

          <NavLink to="/saved-news" className="navigation__saved">
            Saved articles
          </NavLink>
          <button
            type="button"
            className="navigation__logout"
            onClick={handleLogoutClick}
          >
            <span className="navigation__username">{username}</span>
            <img
              className="navigation__logout-icon"
              src={isSavedNews ? logoutIcon : logoutIconWhite}
              alt="Log out"
            />
          </button>
        </>
      ) : (
        <>
          <NavLink to="/" className="navigation__link">
            Home
          </NavLink>

          <button
            type="button"
            className="navigation__signin"
            onClick={handleLoginClick}
          >
            Sign In
          </button>
        </>
      )}
      {isMobileOpen && (
        <div className="navigation__mobile-menu">
          <NavLink to="/" className="navigation__mobile-link">
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className="navigation__mobile-link navigation__mobile-saved"
            >
              Saved articles
            </NavLink>
          )}

          {!isLoggedIn && (
            <button
              type="button"
              className="navigation__mobile-signin"
              onClick={handleLoginClick}
            >
              Sign In
            </button>
          )}

          {isLoggedIn && (
            <button
              type="button"
              className="navigation__mobile-signout"
              onClick={handleLogoutClick}
            >
              <span className="navigation__mobile-username">{username}</span>
              <img
                className="navigation__mobile-logout-icon"
                src={
                  isSavedNews && !isMobileOpen ? logoutIcon : logoutIconWhite
                }
                alt="Log out"
              />
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
