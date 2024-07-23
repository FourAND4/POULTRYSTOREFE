import DashboardLayout from "../layout/dashboardLayout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { car, employee, activity } from "../apis/expressServer.js";

export default function Dashboard() {
  const [data, setData] = useState({
    cars: 0,
    freeCars: [],
    employees: [],
    absentToday: 0,
    activities: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchCars();
    fetchEmployees();
    fetchActivities();
    // Fetch other data as needed
    setData((prevData) => ({
      ...prevData,
      absentToday: 5,
    }));
  }, []);

  const fetchCars = async () => {
    const cars = await car().getAll();
    if (!cars.error) {
      const freeCars = cars.data.filter(car => car.status === 'free');
      setData((prevData) => ({
        ...prevData,
        cars: cars.data.length,
        freeCars: freeCars,
      }));
    }
  };

  const fetchEmployees = async () => {
    const employees = await employee().getAll('free');
    if (!employees.error) {
      setData((prevData) => ({
        ...prevData,
        employees: employees.data,
      }));
    }
  };

  const fetchActivities = async () => {
    const dateFormatter = date => date.toLocaleDateString('fr-CA');
    const date = dateFormatter(new Date());
    const result = await activity().getAll(date);
    if (!result.error) {
      setData((prevData) => ({
        ...prevData,
        activities: result.data,
      }));
    }
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <DashboardLayout title="Dashboard" tabActive="dashboard">
      <div className="row">
        <div className="col-md-4 mb-4">
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
        <div className="col-md-4 mb-4">
          <div className="card" onClick={() => navigateTo('/karyawan')}>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="icon bg-success text-white rounded-circle">
                  <i className="fas fa-users"></i>
                </div>
                <div className="ml-3">
                  <h5 className="card-title">Jumlah Karyawan</h5>
                  <p className="card-text">{data.employees.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
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
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mobil yang bisa dipakai</h5>
              <ul className="list-group mt-3">
                {data.freeCars.map((car, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{car.merk}</strong> - {car.plat}
                  </li>
                ))}
              </ul>
              {data.freeCars.length === 0 && (
                <p className="mt-2">Tidak ada mobil yang free saat ini.</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Daftar Tugas</h5>
              <div className="table-responsive text-nowrap">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Tugas</th>
                      <th>Area</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    {data.activities.slice(0, 5).map((activity, index) => (
                      <tr key={index}>
                        <td>{activity.detail}</td>
                        <td>{activity.partner.area}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {data.activities.length > 5 && (
                  <p className="mt-2">...dan {data.activities.length - 5} tugas lainnya</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Karyawan Siap Tugas</h5>
              <ul className="list-group mt-3">
                {data.employees.slice(0, 5).map((employee, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{employee.nickname}</strong> - {employee.phone}
                  </li>
                ))}
              </ul>
              {data.employees.length > 5 && (
                <p className="mt-2">...dan {data.employees.length - 5} karyawan lainnya</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};