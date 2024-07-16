import DashboardLayout from "../layout/dashboardLayout";

export default function Trip() {
  return (
    <DashboardLayout title="Trip" tabActive="trip">
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
              />
            </div>
            <button className="btn btn-primary">Tambah</button>
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
            <tr>
              <td>
                <b>270424.01</b><br />
                <small>Lendah, Kulon Progo</small><br />
                <small>Estimasi: 3 Jam</small><br />
              </td>
              <td>
                <small>Pak bee | Handayani</small><br />
                <small>AB 2312 LL</small><br />
              </td>
              <td>
                <ul className="my-0">
                  <li>Mengantar pakan | Pak Kahir</li>
                  <li>Mengantar pakan | Pak Kahir</li>
                  <li>Mengantar pakan | Pak Kahir</li>
                  <li>Mengantar pakan | Pak Kahir</li>
                  <li>Mengantar pakan | Pak Kahir</li>
                </ul>
              </td>
              <td><span className="badge bg-label-primary me-1">On Road</span></td>
              <td>
                <a href="#" className="text-black badge">
                  <i className="bx bx-edit-alt me-1"></i>
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
  );
};


