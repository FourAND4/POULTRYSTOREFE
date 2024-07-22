import DashboardLayout from "../layout/dashboardLayout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState({
    cars: 0,
    employees: 0,
    absentToday: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from an API or other source
    // This is just a placeholder example
    setData({
      cars: 10,
      employees: 50,
      absentToday: 5,
    });
  }, []);

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <DashboardLayout title="Dashboard" tabActive="dashboard">
      <div className="row">
        <div className="col-md-4">
          <div className="card" onClick={() => navigateTo('/mobil')}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="icon bg-info text-white rounded-circle">
                  <i className="fas fa-car"></i>
                </div>
                <div className="ml-3">
                  <h5 className="card-title">Jumlah Mobil</h5>
                  <p className="card-text">{data.cars}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" onClick={() => navigateTo('/karyawan')}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="icon bg-success text-white rounded-circle">
                  <i className="fas fa-users"></i>
                </div>
                <div className="ml-3">
                  <h5 className="card-title">Jumlah Karyawan</h5>
                  <p className="card-text">{data.employees}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" onClick={() => navigateTo('/presensi')}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="icon bg-danger text-white rounded-circle">
                  <i className="fas fa-user-times"></i>
                </div>
                <div className="ml-3">
                  <h5 className="card-title">Karyawan Absen Hari Ini</h5>
                  <p className="card-text">{data.absentToday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};