import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
export default function Aktifitas() {
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
                value="{date}"
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
                  <button className="btn btn-sm btn-primary">
                    Edit
                  </button>
          </tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
  );
}
