import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "react-modal";
import { BerandaPage } from "./Pages/beranda.jsx";
import { HomePageSkripsi } from "./Pages/homeSkripsi.jsx";
import { HomePagePKL } from "./Pages/homePKL.jsx";
import { DetailSkripsi } from "./Pages/detailSkripsi.jsx";
import { DetailPKL } from "./Pages/detailPKL.jsx";
import { LoginPage } from "./Pages/login.jsx";
import { InputPKL } from "./Pages/inputPKL.jsx";
import { InputSkripsi } from "./Pages/inputSkripsi.jsx";
import { DashboardSkripsiPage } from "./Pages/dashboardSkripsi.jsx";
import { DashboardPKLPage } from "./Pages/dashboardPKL.jsx";

// Menentukan elemen utama aplikasi untuk react-modal
Modal.setAppElement("#root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <BerandaPage />,
  },
  {
    path: "/home-skripsi",
    element: <HomePageSkripsi />,
  },
  {
    path: "/home-pkl",
    element: <HomePagePKL />,
  },
  {
    path: "/detail-skripsi",
    element: <DetailSkripsi />,
  },
  {
    path:"/detail-pkl",
    element:<DetailPKL />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/input-pkl",
    element: <InputPKL />,
  },
  {
    path: "/input-skripsi",
    element: <InputSkripsi />,
  },
  {
    path: "/dashboard-skripsi",
    element: <DashboardSkripsiPage />,
  },
  {
    path: "/dashboard-pkl",
    element: <DashboardPKLPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
