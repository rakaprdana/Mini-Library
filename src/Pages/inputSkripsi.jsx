import { useState, useEffect } from "react";
import { Navbar } from "../components/Fragments/Navbar";
import { InputText } from "../components/Elements/InputText";
import { InputDosenPembimbing } from "../components/Elements/InputDosenPembimbing";
import { InputDosenPenguji } from "../components/Elements/InputDosenPenguji";
import { InputNumber } from "../components/Elements/InputNumber";
import { InputFile } from "../components/Elements/InputFile";
import { useNavigate } from "react-router-dom";

export const InputSkripsi = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    judulSkripsi: "",
    dosenPembimbing1: "",
    dosenPembimbing2: "",
    dosenPenguji1: "",
    dosenPenguji2: "",
    dosenPenguji3: "",
    dosenPenguji4: "",
    dosenPenguji5: "",
    fileAbstrak: null,
    fileJurnal: null,
    fileSKTA: null,
    fileLembarBimbingan: null,
    fileLembarPersetujuan: null,
    fileLembarPengesahan: null,
    nomorLemari: "",
    nomorLaci: "",
  });

  const [showPopup, setShowPopup] = useState(false); // State untuk menampilkan popup
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    const formDataToSend = new FormData();
  
    // Mengisi formDataToSend dengan data dari state
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
  
    // Kirim data ke backend
    fetch('http://localhost/php/inputskripsi.php', {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const closePopup = () => {
    setShowPopup(false); // Fungsi untuk menutup popup
  };

  /*Authentication start */
  useEffect(() => {
    // Check authentication status here and navigate if not authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/');
    }
  }, []); 
  /*Authentication end */
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(/img/bg-1.jpg)` }}
    >
      <Navbar />
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-gray-200 w-full my-2 sm:my-0 mx-1 md:mx-2 lg:mx-0 lg:w-4/5 2xl:w-3/4 rounded-t-lg rounded-b-md">
          <div className="bg-sky-800 w-full flex justify-center items-center font-poppins font-bold text-lg text-slate-200 py-1 md:py-2 rounded-t-md">
            <h2>Daftar Data SKRIPSI</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="sm:flex ">
                <div className="w-full sm:w-3/6 flex flex-col justify-center items-center mt-2 sm:mt-0 md:my-2">
                  {/* Input Nama */}
                  <InputText
                    label="Nama Mahasiswa"
                    placeholder="Nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                  />
                  {/* Input NIM */}
                  <InputText
                    label="NIM Mahasiswa"
                    placeholder="NIM"
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                  />
                  {/* Input Judul Skripsi */}
                  <InputText
                    label="Judul Skripsi"
                    placeholder="Judul"
                    name="judulSkripsi"
                    value={formData.judulSkripsi}
                    onChange={handleChange}
                  />
                  {/* Input Dosen Pembimbing */}
                  <InputDosenPembimbing
                    label="Dosen Pembimbing"
                    placeholders={["Pembimbing 1", "Pembimbing 2"]}
                    names={["dosenPembimbing1", "dosenPembimbing2"]}
                    values={[
                      formData.dosenPembimbing1,
                      formData.dosenPembimbing2,
                    ]}
                    onChange={handleChange}
                  />
                  <div className="flex w-4/5 mt-1 sm:mt-0">
                    <InputNumber
                      label="Nomor Lemari:"
                      name="nomorLemari"
                      value={formData.nomorLemari}
                      onChange={handleChange}
                    />
                    <InputNumber
                      label="Nomor Laci:"
                      name="nomorLaci"
                      value={formData.nomorLaci}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Kanan */}
                <div className="flex flex-col justify-center items-center w-full sm:w-3/6 md:border-l-2 md:border-gray-700 mt-2 sm:mt-0 md:my-2">
                  {/* Input Dosen Penguji */}
                  <InputDosenPenguji
                    label="Dosen Penguji"
                    placeholders={[
                      "Penguji 1",
                      "Penguji 2",
                      "Penguji 3",
                      "Penguji 4",
                      "Penguji 5",
                    ]}
                    names={[
                      "dosenPenguji1",
                      "dosenPenguji2",
                      "dosenPenguji3",
                      "dosenPenguji4",
                      "dosenPenguji5",
                    ]}
                    values={[
                      formData.dosenPenguji1,
                      formData.dosenPenguji2,
                      formData.dosenPenguji3,
                      formData.dosenPenguji4,
                      formData.dosenPenguji5,
                    ]}
                    onChange={handleChange}
                  />
                  {/* Input File */}
                  <div className="flex flex-wrap 2xl:flex-nowrap justify-between lg:justify-evenly 2xl:my-2  w-4/5">
                    <InputFile
                      p="File Abstrak"
                      label="Upload File"
                      name="fileAbstrak"
                      id="fileAbstrak"
                      value={formData.fileAbstrak}
                      onChange={handleFileChange}
                    />
                    <InputFile
                      p="File Jurnal"
                      label="Upload File"
                      name="fileJurnal"
                      id="fileJurnal"
                      value={formData.fileJurnal}
                      onChange={handleFileChange}
                    />
                    <InputFile
                      p="File SKTA"
                      label="Upload File"
                      name="fileSKTA"
                      id="fileSKTAFile"
                      value={formData.fileSKTA}
                      onChange={handleFileChange}
                    />
                    <InputFile
                      p="File Bimbingan"
                      label="Upload File"
                      name="fileLembarBimbingan"
                      id="fileLembarBimbinganFile"
                      value={formData.fileLembarBimbingan}
                      onChange={handleFileChange}
                    />
                    <InputFile
                      p="File Persetujuan"
                      label="Upload File"
                      name="fileLembarPersetujuan"
                      id="fileLembarPersetujuanFile"
                      value={formData.fileLembarPersetujuan}
                      onChange={handleFileChange}
                    />
                    <InputFile
                      p="File Pengesahan"
                      label="Upload File"
                      name="fileLembarPengesahan"
                      id="fileLembarPengesahanFile"
                      value={formData.fileLembarPengesahan}
                      onChange={handleFileChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-600 py-1 px-4 2xl:py-2 md:px-8 my-2 sm:my-0 rounded-md text-sm text-slate-200 font-poppins font-semibold hover:bg-teal-800 duration-300"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-slate-200 rounded-md ">
            <div className="flex flex-col justify-center items-center py-4 px-6">
              <img
                src="/img/success.png"
                alt=""
                className="w-20 h-20 sm:w-32 sm:h-32"
              />
              <h2 className="sm:text-2xl font-poppins font-semibold">
                Success!
              </h2>
              <p className="mt-6">
                Selamat Data Skripsi Anda Sudah Terdaftar🤗
              </p>
            </div>
            <div className="border-t-2 border-gray-300 flex justify-center py-2">
              <button onClick={closePopup} className="w-full">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
