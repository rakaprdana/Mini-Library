import React from "react";

export const TableSkripsi = (props) => {
  const { searchResults, handleClick } = props;
  return (
    <div className="w-full mx-2 bg-slate-200 rounded-lg">
      <div className="bg-sky-800 rounded-t-md flex justify-around items-center text-xs md:text-base py-2 text-slate-200 font-poppins font-semibold">
        <h4 className="w-1/6 flex md:justify-center">NIM</h4>
        <h4 className="w-1/6 flex md:justify-center">Nama</h4>
        <h4 className="w-2/6 flex md:justify-center">Judul Skripsi</h4>
        <h4 className="w-2/6 flex md:justify-center">Dosen Pembimbing</h4>
        <h4 className="w-1/6 flex md:justify-center md:mr-6">Informasi</h4>
      </div>
      <div className="overflow-auto max-h-[calc(100vh-190px)]">
        {searchResults.map((result) => (
          <div
            key={result.nim}
            className="flex justify-around items-center text-xs md:text-base py-2 md:py-4 border-b-2 border-gray-300 mx-2"
          >
            <div className="md:w-1/6 flex justify-center items-center">
              <p>{result.nim}</p>
            </div>
            <div className="md:w-1/6 flex justify-center items-center ">
              <p className="">{result.nama}</p>
            </div>
            <div className="md:w-2/6 lg:text-justify ">
              <p className="">{result.judulSkripsi}</p>
            </div>
            <div className="md:w-2/6 flex justify-center">
              <p className="">{result.dosenPembimbing1}</p>
            </div>
            <div className="md:w-1/6 flex justify-center items-center ">
              <button
                className="bg-orange-500 py-1 px-2 md:py-2 md:px-4 rounded-md text-sm text-slate-200 font-poppins font-semibold hover:bg-orange-700 duration-300"
                onClick={() => handleClick(result)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
