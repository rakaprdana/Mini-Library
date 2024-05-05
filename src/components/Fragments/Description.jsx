import Button from "../Elements/Button";

export const Description = (props) => {
  const { handleExploreClick } = props;
  return (
    <div className="flex flex-col items-center justify-center mx-4 sm:mx-auto sm:w-2/4 lg:w-1/2">
      <div className="flex justify-start w-4/5">
        <h2
          className="font-poppins 2xl:ml-20 text-3xl text-slate-200 font-semibold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Mini ~ Library
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center bg-amber-400 rounded-tl-full  rounded-br-full py-4 md:w-full 2xl:w-3/4">
          <img
            src="/img/logo-1.png"
            alt=""
            className="w-20 h-20 ml-14 md:ml-0"
          />
          <h1
            className="text-white text-3xl md:text-5xl font-bold font-poppins"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0)" }}
          >
            JURNAL AKADEMIS
          </h1>
        </div>
      </div>
      <div className="w-4/5 my-4">
        <p
          className="font-medium text-center text-white font-poppins"
          style={{ textShadow: "6px 6px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Selamat datang di "Jurnal Akademis." Temukan dan jelajahi karya ilmiah
          mahasiswa prodi Informatika. Mari bersama-sama menjelajahi penelitian dan
          pengalaman kerja praktek yang menginspirasi.
        </p>
      </div>
      <div className="flex justify-center">
        <Button onClick={handleExploreClick} text="Menjelajahi" />
      </div>
    </div>
  );
};
