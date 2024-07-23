import { useState, useEffect } from 'react';
import DashboardLayout from "../layout/dashboardLayout";
import { Link } from "react-router-dom";
import { trip } from "../apis/expressServer.js";

export default function Trip() {
  const dateFormatter = (date) => date.toLocaleDateString('fr-CA');

  const [filterDate, setFilterDate] = useState(dateFormatter(new Date()));
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchTrips();
  }, [filterDate]);

  const fetchTrips = async () => {
    setTrips([]);
    setIsLoading(true);
    const result = await trip().getAll(filterDate);
    if (!result.error) {
      setTrips(result.data);
    } else {
      setErrorMessage(result.message);
    }
    setIsLoading(false);
  };

  return (
    <DashboardLayout title="Trip" tabActive="trip">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Daftar Trip</h5>
            <div className="d-flex gap-3 align-items-center">
              <div className="input-group">
                <span className="input-group-text">tanggal:</span>
                <input
                    type="date"
                    id="filter"
                    name="date"
                    className="form-control"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
              <Link to="/trip/tambah" className="btn btn-primary">Tambah</Link>
            </div>
          </div>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table table-striped">
            <thead>
            <tr>
              <th width="20%">ID & Lokasi</th>
              <th width="20%">Penerima Tugas</th>
              <th width="40%">Rincian Tugas</th>
              <th width="10%">Status</th>
              <th width="10%">Action</th>
            </tr>
            </thead>
            <tbody className="table-border-bottom-0">
            {!isLoading && !errorMessage && trips.map((trip) => (
                <tr key={trip.id}>
                  <td>
                    <b>{trip.id}</b><br />
                    <small>{trip.area}</small><br />
                    <small>Estimasi: {trip.estimasi} Jam</small><br />
                  </td>
                  <td>
                    <small>{trip.employee1.nickname} | {trip.employee2.nickname}</small><br />
                    <small>{trip.car.plat}</small><br />
                  </td>
                  <td>
                    <ul className="my-0">
                      {trip.activity.map((activity, index) => (
                          <li key={index}>{activity.detail} ({activity.partner.name})</li>
                      ))}
                    </ul>
                  </td>
                  <td>{trip.status}</td>
                  <td>
                    <Link to={`/trip/${trip.id}`} className='btn btn-sm btn-secondary'>edit</Link>
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
