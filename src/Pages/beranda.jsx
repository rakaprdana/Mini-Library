import React from "react";
import { useState } from "react";
import { Navbar } from "../components/Fragments/Navbar";
import PopupModal from "../components/Fragments/Popup";
import Button from "../components/Elements/Button";
import { Description } from "../components/Fragments/Description";

export const BerandaPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleExploreClick = () => {
    setIsPopupOpen(true); // Set state untuk menampilkan popup saat tombol "Menjelajahi" diklik
  };

  const handleSkripsiClick = () => {
    // logika penanganan ketika tombol "Database Skripsi" diklik
    window.location.href = "/home-skripsi";
  };

  const handlePKLClick = () => {
    // logika penanganan ketika tombol "Database PKL" diklik
    window.location.href = "/home-pkl";
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(/img/books.jpg)` }}
    >
      <Navbar isBerandaPage={true} />
      <div className="flex-grow flex items-center justify-center">
        {/* deskripsi */}
        <Description handleExploreClick={handleExploreClick} />
        {isPopupOpen && (
          <PopupModal
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onSkripsiClick={handleSkripsiClick} // pastikan ini adalah fungsi yang benar
            onPKLClick={handlePKLClick} // pastikan ini adalah fungsi yang benar
            // Tambahkan event handler untuk memproses klik tombol di dalam popup
          />
        )}
      </div>
    </div>
  );
};
