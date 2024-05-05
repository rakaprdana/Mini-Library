import { useState, useEffect } from "react";
import { HomeIcon } from "../assets/Icon/HomeIcon";
import { ProfileIcon } from "../assets/Icon/ProfileIcon";
import SearchIcon from "../assets/Icon/SearchIcon";
import { LogoutIcon } from "../assets/Icon/LogoutIcon";
import { Link, useNavigate } from "react-router-dom";
import BarChart from "../components/Fragments/BarChartComponent";
import PieChart from "../components/Fragments/PieChartComponent";
import PopupSec from "../components/Fragments/Popupsec";

export const DashboardSkripsiPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [numToShow, setNumToShow] = useState(15);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [barChartRendered, setBarChartRendered] = useState(false); //Bar Chart
  const [pieChartRendered, setPieChartRendered] = useState(false); //Pie Chart
  const [pieChartSkripsi, setPieChartSkripsi] = useState({});
  const [judulSkripsi, setJudulSkripsi] = useState({});
  const [totalData, setTotalData] = useState(null);
  const navigate = useNavigate();

  // popup sec
  const handleOpenModal = (option) => {
    setIsOpen(true);
    setModalOption(option);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChoose1 = () => {
    if (modalOption === "Input Data") {
      window.location.href = "/input-skripsi";
    } else if (modalOption === "Search Data") {
      window.location.href = "/home-skripsi";
    } else {
      window.location.href = "/dashboard-skripsi";
    }
  };

  const handleChoose2 = () => {
    if (modalOption === "Input Data") {
      window.location.href = "/input-pkl";
    } else if (modalOption === "Search Data") {
      window.location.href = "/home-pkl";
    } else {
      window.location.href = "/dashboard-pkl";
    }
  };

  /*Handle Logout Start */
  const handleLogout = () => {
    // Clear authentication status
    localStorage.removeItem("isAuthenticated");
    // Redirect to login page
    navigate("/");
  };

  useEffect(() => {
    // Check authentication status here and navigate if not authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);
  /*Handle Logout Start */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/php/home/search-skripsi.php?search=${encodeURIComponent(
            searchTerm
          )}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  //Menghitung jumlah data yang masuk
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/php/Dashboard/count/countSkripsi.php");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTotalData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  //Menampilkan sebuah Piechart menggunakan UseEffect
  useEffect(() => {
    fetch("http://localhost/php/Dashboard/PieChart/PieChartSkripsi.php")
      .then((response) => response.json())
      .then((data) => {
        setPieChartSkripsi(data);
        setPieChartRendered(true);
      });
  }, []);
  // Mengelompokkan jumlah judul skripsi berdasarkan nama
  const groupedDataPie = Object.entries(pieChartSkripsi).map(
    ([nama, jumlah]) => ({
      nama,
      jumlah,
    })
  );

  //Menampilkan sebuah Barchart menggunakan UseEffect
  useEffect(() => {
    fetch("http://localhost/php/Dashboard/BarChart/BarChartSkripsi.php")
      .then((response) => response.json())
      .then((data) => {
        setJudulSkripsi(data);
        setBarChartRendered(true);
      });
  }, []);
  // Mengelompokkan jumlah judul skripsi berdasarkan nama
  const groupedDataBar = Object.entries(judulSkripsi).map(([nama, jumlah]) => ({
    nama,
    jumlah,
  }));
  return (
    <div className="flex w-full min-h-screen">
      <div className="bg-sky-700 w-1/5 flex flex-col">
        {/* Logo */}
        <div className="w-full flex justify-center ">
          <img src="/img/logo-2.png" alt="" />
        </div>
        {/* Link */}
        <div className="flex flex-col flex-grow justify-between">
          <div className="flex justify-center items-center h-1/2">
            <ul>
              <li
                className="flex justify-center items-center bg-slate-200 text-sky-800 font-semibold hover:bg-slate-300 rounded-lg my-2 2xl:text-xl cursor-pointer md:py-2 md:px-10 2xl:py-4 2xl:px-20"
                onClick={() => handleOpenModal("Dashboard")}
              >
                <HomeIcon />
                Dashboard
              </li>
              <li
                className="flex justify-center items-center bg-slate-200 text-sky-800 font-semibold hover:bg-slate-300 rounded-lg my-2 2xl:text-xl cursor-pointer md:py-2 md:px-10 2xl:py-4 2xl:px-20"
                onClick={() => handleOpenModal("Input Data")}
              >
                <ProfileIcon />
                Input Data
              </li>
              <li
                className="flex justify-center items-center bg-slate-200 text-sky-800 font-semibold hover:bg-slate-300 rounded-lg my-2 2xl:text-xl cursor-pointer md:py-2 md:px-10 2xl:py-4 2xl:px-20"
                onClick={() => handleOpenModal("Search Data")}
              >
                <SearchIcon />
                Search Data
              </li>
            </ul>
          </div>
          {/* logout Start*/}
          <div className=" flex justify-center items-end  h-1/2 pb-4">
            <button
              className="flex items-center 2xl:text-xl cursor-pointer text-slate-200 font-poppins font-medium"
              onClick={handleLogout}
            >
              <LogoutIcon />
              logout
            </button>
          </div>
          {/* logout Start*/}
        </div>
      </div>
      <div
        className=" w-4/5 flex flex-col bg-center bg-contain"
        style={{ backgroundImage: `url('/img/batik-3.jpg')` }}
      >
        <div className="bg-white w-full flex justify-between items-center px-4 shadow-2xl">
          <div className="flex justify-center items-center">
            <img
              src="img/unkris.png"
              alt="Logo"
              className="h-12 md:h-14 2xl:h-14"
            />
            <div className="flex flex-col">
              <p className="border-b-2 border-gray-800 font-poppins font-bold md:text-3xl">
                UNKRIS
              </p>
              <p className="font-poppins font-bold sm:text-sm">
                Universitas Krisnadwipayana
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="w-full flex justify-between">
            <div className="md:w-3/4">
              <h1 className="bg-sky-800 rounded-lg md:w-2/6 text-center py-2 text-slate-200 font-poppins font-bold md:text-xl 2xl:text-3xl uppercase md:ml-2 2xl:ml-6 md:my-3 2xl:my-5">
                Dashboard Skripsi
              </h1>
            </div>
            {/* Count Call Start */}
            <div
              className="bg-white w-2/6 mx-6 my-2 rounded-lg flex justify-center items-center"
              style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="bg-amber-400 h-4/5 w-full md:mx-2 rounded-lg flex justify-center items-center">
                {totalData !== null ? (
                  <p className=" text-white font-poppins md:text-base 2xl:text-3xl font-bold">
                    Data yang masuk:{" "}
                    <span className="bg-white px-6 py-2 text-slate-800 mx-5 rounded-xl 2xl:text-2xl">
                      {totalData}
                    </span>
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            {/* Count Call End */}
          </div>
          <div className="flex">
            {/* Pie Chart Start */}
            <div className="w-3/5">
              {pieChartRendered && (
                <div
                  className="bg-slate-100 h-full md:mx-2 2xl:mx-6 px-4 py-10 rounded-lg"
                  style={{
                    width: "auto",
                    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <PieChart data={groupedDataPie} />
                </div>
              )}
            </div>
            {/* Pie Chart End */}
            {/* Table Start */}
            <div
              className="bg-slate-100 rounded-lg md:w-2/5 md:mx-2 2xl:mx-6"
              style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex flex-col">
                {/* Search Start */}
                <div className="md:w-3/5 2xl:w-3/4 md:h-10 mx-2 my-2 flex items-center">
                  <input
                    className="appearance-none border-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full md:py-2 pl-12 text-gray-800 2xl:text-2xl leading-tight focus:outline-none focus:ring-sky-800 focus:border-sky-800 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {/* Gambar X */}
                <div
                  className="absolute md:right-44 2xl:right-48 mt-4 flex items-center"
                  onClick={() => setSearchTerm("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-2 mr-1 md:h-5 2xl:h-7 md:w-5 2xl:w-7 text-gray-800 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* Gambar ? */}
                <div className="absolute right-50 mx-2 md:mt-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 2xl:h-8 md:w-6 2xl:w-8 ml-2 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                {/* Search End */}
                <div className="h-1/3 mx-2 my-3 bg-slate-200 pb-5 rounded-lg">
                  <div className="bg-sky-800 w-full rounded-t-lg text-sm 2xl:text-xl flex justify-around items-center font-poppins font-semibold text-slate-200 py-1">
                    <h4 className="w-1/2 flex justify-center">NIM</h4>
                    <h4 className="w-1/2 flex justify-center">Nama</h4>
                  </div>
                  <div className="overflow-y-auto max-h-[calc(45vh)] rounded-b-lg">
                    {searchResults.map((result) => (
                      <div
                        key={result.nim}
                        className="w-full flex justify-around items-center md:py-1 text-sm 2xl:text-xl border-b-2 border-gray-300"
                      >
                        <div className="text-center w-2/4 ">
                          <p>{result.nim}</p>
                        </div>
                        <div className="text-start md:pl-20 2xl:pl-28 w-2/4 py-2 group relative ">
                          <p className="truncate">{result.nama}</p>
                          <div className=" opacity-0 invisible bg-gray-800 text-white md:text-xs 2xl:text-xl rounded py-1 px-4 whitespace-nowrap absolute left-1/2 transform md:-translate-x-2/3 2xl:-translate-x-1/2 transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                            {result.nama}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table End */}
          {/* Bar Chart Start */}
          <div className="my-4">
            <h1 className="bg-sky-800 rounded-lg md:w-2/12 text-center py-2 text-slate-200 font-poppins font-bold md:text-xl 2xl:text-3xl uppercase md:ml-2 2xl:ml-8 md:my-3 2xl:my-5">
              Judul Skripsi
            </h1>
            {barChartRendered && (
              <div
                className="bg-white rounded-lg px-6 md:py-10 2xl:py-24 md:mx-2 2xl:mx-6"
                style={{
                  width: "auto",
                  boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)",
                }}
              >
                <BarChart data={groupedDataBar} />
              </div>
            )}
          </div>
          {/* Bar Chart End */}
        </div>
        {/* Kondisional rendering untuk menampilkan popup */}
        {isOpen && (
          <PopupSec
            isOpen={isOpen}
            onClose={handleCloseModal}
            onClick1={handleChoose1}
            onClick2={handleChoose2}
            children1={
              modalOption === "Input Data"
                ? "Input Data Skripsi"
                : modalOption === "Search Data"
                ? "Search Skripsi"
                : "Dashboard Skripsi"
            }
            children2={
              modalOption === "Input Data"
                ? "Input Data PKL"
                : modalOption === "Search Data"
                ? "Search PKL"
                : "Dashboard PKL"
            }
          />
        )}
      </div>
    </div>
  );
};
