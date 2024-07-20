import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Mobil() {
  const [carsList, setCarsList] = useState([{}])

  useEffect(() => {
    fetchCars()
  }, []);

  const fetchCars = async () => {
    // TODO: fetch data from BE
    setCarsList([{id:1, plat: 123, merk: 'honda', status: 'free'}])
  }

  return (
    <DashboardLayout title="Mobil" tabActive="mobil">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Daftar Mobil</h5>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/mobil/tambah" className="btn btn-primary">Tambah</Link>
            </div>
          </div>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table table-striped" id="table-data">
            <thead>
              <tr>
                <th>Nomor Plat</th>
                <th>Merk</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {carsList.map((car, index) => (
                  <tr key={index}>
                    <td>{car.plat}</td>
                    <td>{car.merk}</td>
                    <td>{car.status}</td>
                    <td>
                      <Link to={`/mobil/${car.id}`} className="btn btn-sm btn-secondary">edit</Link>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
