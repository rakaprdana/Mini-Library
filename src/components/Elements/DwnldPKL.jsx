import React, { useState, useEffect } from "react";

export const DwnldPKL = (props) => {
  const { selectedItem } = props;
  const [fileTypesToShow, setFileTypesToShow] = useState([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    const fileTypes = isAuthenticated
      ? [
          { fileType: "fileSKPKL", text: "Laporan PKL" },
          { fileType: "fileAbstrak", text: "Abstrak" },
          { fileType: "fileLembarBimbingan", text: "Lembar Bimbingan" },
          { fileType: "fileLembarPersetujuan", text: "Lembar Persetujuan" },
        ]
      : [
          { fileType: "fileAbstrak", text: "Abstrak" },
        ];

    setFileTypesToShow(fileTypes);
  }, []);

  const downloadFile = async (fileType) => {
    try {
      const response = await fetch(`http://localhost/php/downloadPKL.php?search=${selectedItem.nim}&fileType=${fileType}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${selectedItem.nama}_${fileType}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error fetching or downloading file:', error);
    }
  };


  return (
    <div className="flex flex-wrap justify-center md:flex-row items-center w-4/5">
      {fileTypesToShow.map((fileTypeData) => (
        <div key={fileTypeData.fileType}>
          <p className="text-sm mt-2 text-center">{fileTypeData.text} :</p>
          <button
            onClick={() => downloadFile(fileTypeData.fileType)}
            className="px-4 py-2 mx-4 lg:mx-8 2xl:mx-10 bg-orange-500 rounded-md text-xs md:text-sm text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-orange-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] flex justify-center items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      ))}
    </div>
  );
};
