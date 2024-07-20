import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";

export default function Mobil() {
  return (
    <DashboardLayout title="Mobil" tabActive="mobil">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Daftar</h5>
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
          <tbody className="table-border-bottom-0"></tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
  );
}
