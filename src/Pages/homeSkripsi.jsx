import { Navbar } from "../components/Fragments/Navbar";
import { useState, useEffect } from "react";
// import dataSkripsi from "../assets/dataSkripsi.json";
import { SearchBar } from "../components/Elements/SearchBar";
import { UniversityInfo } from "../components/Elements/UniversityInfo";
import { TableSkripsi } from "../components/Fragments/TableSkripsi";

export const HomePageSkripsi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [numToShow, setNumToShow] = useState(15);

  // useEffect untuk mengambil data dari database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/php/home/search-skripsi.php?search=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSubmit = () => {
    // Lakukan pencarian ketika tombol "Cari" diklik
    handleSearch(clickedButton);
    setSearchTerm(searchTerm);
  };

  const handleClick = async (result) => {
    localStorage.setItem("selectedItem", JSON.stringify(result));
    window.location.href = `/detail-skripsi?search=${encodeURIComponent(result.nim)}`;
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(/img/rektor.jpg)` }}
    >
      <Navbar />
      <div className="flex justify-between items-center pt-1 px-2 w-full">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
        <UniversityInfo />
      </div>
      {/* table */}
      <div className="w-full  flex flex-grow justify-center">
        <TableSkripsi searchResults={searchResults} handleClick={handleClick} />
      </div>
    </div>
  );
};
