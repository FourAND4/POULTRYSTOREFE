// import module
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import pages
import Test from "./pages/test";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Presensi from "./pages/presensi";
import Dashboard from "./pages/dashboard";
import Trip from "./pages/trip";
import TambahTrip from "./pages/tambahTrip";
import Aktifitas from "./pages/aktifitas";
import TambahAktifitas from "./pages/tambahAktifitas";
import Karyawan from "./pages/karyawan";
import TambahKaryawan from "./pages/tambahKaryawan";
import Gaji from "./pages/gaji";
import TambahGaji from "./pages/tambahGaji";
import Mobil from "./pages/mobil";
import TambahMobil from "./pages/tambahMobil";
import Mitra from "./pages/mitra";
import TambahMitra from "./pages/tambahMitra";
import Bayaran from "./pages/bayaran.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Test /> },
  { path: "/test", element: <Test /> },
  { path: "/test/:id", element: <Test /> },
  { path: "/login", element: <Login /> },
  { path: "/presensi", element: <Presensi /> },
  { path: "/profile", element: <Profile /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/trip", element: <Trip /> },
  { path: "/trip/tambah", element: <TambahTrip /> },
  { path: "/trip/:id", element: <TambahTrip /> },
  { path: "/aktifitas", element: <Aktifitas /> },
  { path: "/aktifitas/tambah", element: <TambahAktifitas /> },
  { path: "/aktifitas/:id", element: <TambahAktifitas /> },
  { path: "/karyawan", element: <Karyawan /> },
  { path: "/karyawan/tambah", element: <TambahKaryawan /> },
  { path: "/karyawan/:id", element: <TambahKaryawan /> },
  { path: "/karyawan/:id/gaji", element: <Bayaran using={'month'} /> },
  { path: "/karyawan/:user/gaji/tambah", element: <TambahGaji /> },
  { path: "/gaji", element: <Gaji /> },
  { path: "/gaji/:id", element: <Bayaran using={'id'} /> },
  { path: "/gaji/:user/edit/:id", element: <TambahGaji /> },
  { path: "/mobil", element: <Mobil /> },
  { path: "/mobil/tambah", element: <TambahMobil /> },
  { path: "/mobil/:id", element: <TambahMobil /> },
  { path: "/mitra", element: <Mitra /> },
  { path: "/mitra/tambah", element: <TambahMitra /> },
  { path: "/mitra/:id", element: <TambahMitra /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
