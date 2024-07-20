import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
export default function Aktifitas() {
  const dateFormatter = date => date.toLocaleDateString('fr-CA');

  const [date , setDate ] = useState(dateFormatter(new Date()));
  const [activities, setActivities] = useState([{}])

  useEffect(() => {
    fetchData();
  }, [date]);

  const fetchData = async () => {
    // TODO: fetch data from BE
    setActivities([
      {id: 1, detail: 'lorem ipsum', date: '2024-07-05', partner: 'williant', area: 'London', status: 'delivered'},
    ])
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
          {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.detail}</td>
                <td>{activity.date}</td>
                <td>{activity.partner}</td>
                <td>{activity.area}</td>
                <td>{activity.status}</td>
                <td>
                  <Link to={`/aktifitas/${activity.id}`} className="btn btn-sm btn-secondary">edit</Link>
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
