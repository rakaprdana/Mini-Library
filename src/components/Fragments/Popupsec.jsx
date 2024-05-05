import React from "react";
import Modal from "react-modal";

const PopupSec = (props) => {
  const { isOpen, onClose, onClick1, onClick2, children1, children2 } = props;

  const handleClick1 = () => {
    onClick1(); // Panggil fungsi yang ditetapkan oleh prop saat tombol "Database Skripsi" diklik
    onClose(); // Tutup popup setelah pemrosesan klik tombol
  };

  const handleClick2 = () => {
    onClick2(); // Panggil fungsi yang ditetapkan oleh prop saat tombol "Database PKL" diklik
    onClose(); // Tutup popup setelah pemrosesan klik tombol
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Pilih Database"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-6"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Warna latar belakang overlay (transparan)
        },
        content: {
          backgroundColor: "white", // Warna latar belakang konten modal
        },
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-2">Hello Everyone.</h2>
        <img src="/img/icon-1.png" alt="" className="w-40 h-40" />
        <p className="mb-4 text-sm font-poppins font-semibold">
          Pilih opsi di bawah ini untuk mencari{" "}
          <span className="block">skripsi atau PKL sesuai kebutuhan Anda:</span>
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 ">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded"
          onClick={handleClick1}
        >
          {children1}
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded"
          onClick={handleClick2}
        >
          {children2}
        </button>
      </div>
    </Modal>
  );
};

export default PopupSec;
