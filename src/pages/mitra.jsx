import DashboardLayout from "../layout/dashboardLayout";

export default function Mitra() {
      return (
        <DashboardLayout title="Mitra" tabActive="mitra">
        <div className="card">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <h5>Daftar</h5>
              <div className="d-flex gap-3 align-items-center">
                <button className="btn btn-primary">Tambah</button>
              </div>
            </div>
          </div>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped" id="table-data">
              <thead>
                <tr>
                  <th width="15%">Nama</th>
                  <th width="20%">Area</th>
                  <th width="15%">Telp</th>
                  <th width="40%">Jenis Kemitraan</th>
                  <th width="10%">Actions</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0"></tbody>
            </table>
          </div>
        </div>
        </DashboardLayout>
      );
    }
  

