import DashboardLayout from "../layout/dashboardLayout";

export default function Gaji() {
  return (
    <DashboardLayout title="Gaji" tabActive="gaji">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Daftar</h5>
          <div className="d-flex gap-3 align-items-center">
          <div className="input-group">
              <span className="input-group-text">bulan:</span>
              <input
                type="month"
                id="filter"
                name="month"
                className="form-control"
                value={month}
                onChange={e => setMonth(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped" id="table-data">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Bulan</th>
              <th>Upah</th>
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
};
