import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Header({ onAddEntryClick }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    const userLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (userLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInUser");
    }
    navigate("/login");
  };

  return (
    <header className="flex-wrap justify-center items-center mb-6">
      <h1 className="text-6xl font-extrabold text-yellow-700">My Diary</h1>
      <br />
      <button
        className="bg-yellow-900 text-yellow-300 px-5 py-2 rounded-lg hover:bg-yellow-200 transition-colors"
        onClick={onAddEntryClick}
      >
        Add Entry
      </button>
      <button
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors ml-4"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </header>
  );
}

Header.propTypes = {
  onAddEntryClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default Header;
