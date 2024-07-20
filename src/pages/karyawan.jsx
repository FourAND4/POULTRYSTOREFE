import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";

export default function Karyawan() {
  return (
    <DashboardLayout title="Karyawan" tabActive="karyawan">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Daftar</h5>
          <div className="d-flex gap-3 align-items-center">
            <div className="input-group">
              <span className="input-group-text">filter:</span>
              <select id="filter" className="form-select" name="filter">
                <option value="all">Semua</option>
                <option value="free">Nganggur</option>
                <option value="off">Tidak di Kantor</option>
                <option value="busy">Sibuk/Trip</option>
              </select>
            </div>
            <Link to="/karyawan/tambah" className="btn btn-primary">Tambah</Link>
          </div>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped" id="table-data">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Status</th>
              <th>Telp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0"></tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
  );
}
