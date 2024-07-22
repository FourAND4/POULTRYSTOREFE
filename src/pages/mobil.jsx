import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {car} from "../apis/expressServer.js";

export default function Mobil() {
  const [carsList, setCarsList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setCarsList([]);
    setIsLoading(true);
    const cars = await car().getAll();
    if (!cars.error) {
      setCarsList(cars.data);
    } else {
      setErrorMessage(cars.message);
    }
    setIsLoading(false);
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
              {!isLoading && !errorMessage && carsList.map((car, index) => (
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
          {isLoading && (
              <p>Loading...</p>
          )}
          {errorMessage && (
              <p>{errorMessage}</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
