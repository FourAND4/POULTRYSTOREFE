import DashboardLayout from "../layout/dashboardLayout";

export default function TambahTrip() {
  return (
    <DashboardLayout title="Trip" tabActive="trip">
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="card mb-4">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="mb-0"></h5>
              <button className="btn btn-sm btn-outline-danger">Hapus Data Ini</button>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="tanggal">Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    id="tanggal"
                    value="tanggal"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="area">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    id="area"
                    placeholder="kecamatan, kabupaten"
                    value="area"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="estimasi">Estimasi (jam)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="estimasi"
                    placeholder="perkiraan lama pekerjaan dalam jam"
                    value="estimasi"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="petugas-1">Petugas 1</label>
                  <select
                    id="petugas-1"
                    className="form-select"
                    value="petugas1"
                  >
                    <option>Default select</option>
                    <option value="1">Free</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="petugas-2">Petugas 2</label>
                  <select
                    id="petugas-2"
                    className="form-select"
                    value="petugas2"
                  >
                    <option>Default select</option>
                    <option value="1">Free</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="mobil">Mobil</label>
                  <select
                    id="mobil"
                    className="form-select"
                    value="mobil"
                  >
                    <option>Default select</option>
                    <option value="1">Free</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="status">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value="status"
                  >
                    <option>Default select</option>
                    <option value="1">Dijadwalkan</option>
                    <option value="1">Dikerjakan</option>
                    <option value="1">Selesai</option>
                    <option value="1">Dibatalkan</option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary"></button>
                  <a href="/trip" type="button" className="btn btn-outline-secondary">kembali</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <h5>Pilih Aktifitas</h5>
                <div className="d-flex gap-3 align-items-center">
                  <div className="input-group">
                    <span className="input-group-text">tanggal:</span>
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th width="50%">Rincian Pekerjaan</th>
                    <th width="35%">Tujuan</th>
                    <th width="15%">Pilih</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td>
                      <small><b>Mengantar Pakan 10 sak</b></small><br />
                      <small>27/04/24</small><br />
                    </td>
                    <td>
                      <small><b>Pak Hendri</b></small><br />
                      <small>Lendah, Kulon Progo</small><br />
                    </td>
                    <td>
                      <input className="form-check-input" type="checkbox" id="defaultCheck3" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
