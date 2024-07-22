import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {activity} from "../apis/expressServer.js";
export default function Aktifitas() {
  const dateFormatter = date => date.toLocaleDateString('fr-CA');

  const [date , setDate ] = useState(dateFormatter(new Date()));
  const [activities, setActivities] = useState([{}])
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchData();
  }, [date]);

  const fetchData = async () => {
    setActivities([]);
    setIsLoading(true);
    const result = await activity().getAll(date);
    if (!result.error) {
      setActivities(result.data);
    } else {
      setErrorMessage(result.message);
    }
    setIsLoading(false);
  }

  return (
    <DashboardLayout title="Aktifitas" tabActive="aktifitas">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Daftar</h5>
          <div className="d-flex gap-3 align-items-center">
            <div className="input-group">
              <span className="input-group-text">tanggal:</span>
              <input
                type="date"
                id="filter"
                name="date"
                className="form-control"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <Link to="/aktifitas/tambah" className="btn btn-primary">
              Tambah
            </Link>
          </div>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped" id="table-data">
          <thead>
            <tr>
              <th width="30%">Rincian Pekerjaan</th>
              <th width="10%">Tanggal</th>
              <th width="15%">Tujuan</th>
              <th width="20%">Area</th>
              <th width="15%">Status</th>
              <th width="10%">Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
          {!isLoading && !errorMessage && activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.detail}</td>
                <td>{new Date(activity.date).toLocaleDateString('ID')}</td>
                <td>{activity.partner.name}</td>
                <td>{activity.partner.area}</td>
                <td>{activity.status}</td>
                <td>
                  <Link to={`/aktifitas/${activity.id}`} className="btn btn-sm btn-secondary">edit</Link>
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
