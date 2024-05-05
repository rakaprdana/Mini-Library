// Navbar.js
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import { useState } from "react";
import PopupModal from "./Popup";

export const Navbar = ({ isBerandaPage }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSkripsiClick = () => {
    // logika penanganan ketika tombol "Database Skripsi" diklik
    window.location.href = "/home-skripsi";
  };

  const handlePKLClick = () => {
    // logika penanganan ketika tombol "Database PKL" diklik
    window.location.href = "/home-pkl";
  };
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 bg-white ">
      <div className="flex justify-center items-center">
        <img src="img/logo-unkris-new.png" alt="Logo" className="h-10" />
        <img src="img/logo-2.png" alt="Logo" className="h-8 md:h-14" />
      </div>
      <ul className="flex space-x-4">
        {isBerandaPage ? (
          <li>
            <Link
              to="/login"
              className="bg-sky-700 py-1 px-8 rounded-full text-slate-200 hover:bg-sky-900"
            >
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link
              onClick={handleOpenPopup}
              className="bg-sky-700 md:py-2 md:px-6 2xl:px-8 rounded-lg text-slate-200 hover:bg-sky-900"
            >
              Select Search
            </Link>
          </li>
        )}
      </ul>
      {isPopupOpen && (
        <PopupModal
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onSkripsiClick={handleSkripsiClick} // pastikan ini adalah fungsi yang benar
          onPKLClick={handlePKLClick}
        />
      )}
    </nav>
  );
};
