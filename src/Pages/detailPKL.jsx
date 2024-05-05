import { useState, useEffect } from "react";
import { Navbar } from "../components/Fragments/Navbar";
import { DwnldPKL } from "../components/Elements/DwnldPKL";

export const DetailPKL = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [source, setSource] = useState("");
  const [fileData, setFileData] = useState([]);
  // useEffect untuk mengambil data dari database
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
  
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost/php/detail/detailpkl.php?search=${encodeURIComponent(searchParam)}`);
        const data = await response.json();
    
        if (Array.isArray(data) && data.length > 0) {
          setSelectedItem(data[0]);
        } else {
          console.error('Data not found');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    // Ambil data file dari local storage
    const storedData = JSON.parse(localStorage.getItem("selectedItem"));
    if (storedData) {
      setFileData(storedData);
    }
  }, []);
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(/img/rektor.jpg)` }}
    >
      <Navbar />
      <div className="w-full flex flex-grow justify-center items-center">
        <div className="bg-gray-200 w-full mx-1 md:mx-2 lg:mx-0 lg:w-4/5 2xl:w-3/5 rounded-t-lg rounded-b-md">
          {selectedItem && (
            <div
              className="w-full bg-amber-500 flex justify-center items-center py-2 font-poppins font-semibold text-slate-200 rounded-t-md"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              <p className="md:mx-1">Lemari : {selectedItem?.nomorLemari} ,</p>
              <p className="md:mx-1">Laci no : {selectedItem?.nomorLaci}</p>
            </div>
          )}
          <div className="flex justify-center md:justify-normal w-full md:pl-10 py-1 ">
            <h1 className=" font-poppins font-semibold md:text-lg lg:text-xl">
              Informasi Identitas
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-b-8 border-t-8 border-gray-400">
            <div className="w-full px-2  lg:w-4/5 lg:px-0 py-2 ">
              {selectedItem && (
                <>
                  {/* NIM Start */}
                  <div className="flex py-1 md:py-2">
                    <div className="w-2/5 md:w-2/4  ">
                      <p className="flex justify-between font-poppins font-semibold text-xs md:text-sm 2xl:text-base">
                        <span>NIM</span>
                        <span>:</span>
                      </p>
                    </div>
                    <div className="w-3/5 md:w-2/4 flex justify-end ">
                      <div className="w-5/6 md:w-3/5 2xl:w-2/4 ">
                        <p className="font-poppins font-semibold text-xs md:text-sm ">
                          {selectedItem.nim}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* NIM End */}
                  {/* Nama Mhs Start */}
                  <div className="flex py-1 md:py-2">
                    <div className="w-2/5 md:w-2/4">
                      <p className="flex justify-between font-poppins font-semibold text-xs md:text-sm 2xl:text-base">
                        <span>Nama Mahasiswa</span>
                        <span>:</span>
                      </p>
                    </div>
                    <div className="w-3/5 md:w-2/4 flex justify-end ">
                      <div className="w-5/6 md:w-3/5 2xl:w-2/4 ">
                        <p className="font-poppins font-semibold text-xs md:text-sm ">
                          {selectedItem.nama}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Nama Mhs End */}
                  {/* Dospem Start */}
                  <div className="flex py-1 md:py-2">
                    <div className="w-2/5 md:w-2/4 ">
                      <p className="flex justify-between font-poppins font-semibold text-xs md:text-sm 2xl:text-base">
                        <span>Dosen Pembimbing</span>
                        <span>:</span>
                      </p>
                    </div>
                    <div className="w-3/5 md:w-2/4 flex justify-end ">
                      <div className="w-5/6 md:w-3/5 2xl:w-2/4 ">
                        <ol className="list-decimal font-poppins font-semibold text-xs md:text-sm ">
                          {Object.keys(selectedItem).map((key) => {
                            if (key.startsWith("dosenPembimbing")) {
                              return <li key={key}>{selectedItem[key]}</li>;
                            }
                            return null;
                          })}
                        </ol>
                      </div>
                    </div>
                  </div>
                  {/* Dospem End */}
                  {/* Dosen Penguji Start */}
                  <div className="flex py-1 md:py-2">
                    <div className="w-2/5 md:w-2/4 ">
                      <p className="flex justify-between font-poppins font-semibold text-xs md:text-sm 2xl:text-base">
                        <span>Dosen Penguji</span>
                        <span>:</span>
                      </p>
                    </div>
                    <div className="w-3/5 md:w-2/4 flex justify-end ">
                      <div className="w-5/6 md:w-3/5 2xl:w-1/2 ">
                        <ol className="list-decimal font-poppins font-semibold text-xs md:text-sm">
                          {Object.keys(selectedItem).map((key) => {
                            if (key.startsWith("dosenPenguji")) {
                              return <li key={key}>{selectedItem[key]}</li>;
                            }
                            return null;
                          })}
                        </ol>
                      </div>
                    </div>
                  </div>
                  {/* Dosen Penguji End */}
                </>
              )}
            </div>
            <div className="flex justify-center md:justify-normal w-full md:pl-10 py-1 ">
              <h1 className=" font-poppins font-semibold md:text-lg lg:text-xl">
                Informasi Laporan PKL
              </h1>
            </div>
          </div>
          <div className="flex justify-evenly my-2 md:my-6 2xl:my-10">
            <DwnldPKL selectedItem={selectedItem} source={source} />
          </div>
        </div>
      </div>
      <footer className="py-1 md:py-2 2xl:py-4 text-xs md:text-sm lg:text-base bg-customBlue text-center text-slate-200">
        <p className="">
          <span className="font-bold">©</span> Copyright MiniLib Teams. All Rights
          Reverved
        </p>
        <p className="">
          Designed by{" "}
          <span className="underline underline-offset-2">
          MiniLib Teams 2023
          </span>
        </p>
      </footer>
    </div>
  );
};
