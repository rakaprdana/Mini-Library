import { Navbar } from "../components/Fragments/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = ({ isAuthenticated }) => {
  // Terima prop isAuthenticated dari PrivateRoute
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Username dan password harus diisi.");
      return;
    }

    try {
      const response = await fetch("http://localhost/php/auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Gagal melakukan permintaan ke server.");
      }

      const data = await response.json();


      if (data.success) {
        // Set isAuthenticated menjadi true jika login berhasil
        localStorage.setItem('isAuthenticated', true);
        navigate("/dashboard-skripsi");
      } else {
        alert(data.message || "Gagal melakukan login.");
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan saat melakukan login. Silakan periksa konsol untuk detail kesalahan.');
    }
  };

  // Jika pengguna sudah terautentikasi, alihkan mereka ke halaman dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard-skripsi" />;
  }


  return (
    <div
      className="min-h-screen bg-cover bg-bottom flex flex-col"
      style={{ backgroundImage: `url(/img/bg-2.jpg)` }}
    >
      <Navbar />

      <div className="flex flex-grow justify-center items-center ">
        <form
          className="justify-center items-center shadow rounded-lg bg-amber-400 px-6 flex flex-col w-full md:w-1/4 m-auto"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col justify-center items-center text-slate-200 text-2xl 2xl:text-3xl font-poppins font-bold my-6">
            {/* <h2>Login</h2> */}
            <img src="/img/logo-2.png" alt="" className="w-64 h-30" />
            <h1 className="text-4xl">Welcome</h1>
          </div>
          <div className="w-full p-2 justify-start flex flex-col">
            <div className=" flex flex-row">
              <span
                className="z-highest bg-blue-800 w-10 h-10 px-2 flex justify-center items-center text-2xl text-white"
                mode="render"
                block=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 26 26"
                  className=" iconify iconify--wpf"
                >
                  <path
                    d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="rounded-r-lg outline-none  w-full pl-1"
                id="username"
                name="username"
                required={false}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Menangani perubahan nilai input
              />
            </div>
            <div className="my-4 flex flex-row">
              <span
                className="z-highest bg-blue-800  w-10 h-10 px-2 flex justify-center items-center text-2xl text-white"
                mode="render"
                block=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  className="iconify iconify--carbon"
                >
                  <path
                    d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z"
                    fill="currentColor"
                  ></path>
                  <circle cx="22" cy="10" r="2" fill="currentColor"></circle>
                </svg>
              </span>
              <input
                type="password"
                className="h-10 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
                id="password"
                name="password"
                placeholder="***"
                required={false}
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Menangani perubahan nilai input
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                value="button"
                className="px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 my-4 md:w-2/4 2xl:w-1/3"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
