import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";

export default function TambahAktifitas() {
  return (
    <DashboardLayout title="Aktifitas" tabActive="aktifitas">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0"></h5>
          <button className="btn btn-sm btn-outline-danger" id="btn-delete">Hapus Data Ini</button>
        </div>
        <div className="card-body">
          <form id="form-data">
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="detail">Rincian Kegiatan</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="detail"
                  placeholder="Apa yang mau dilakukan"
                  name="detail"
                  value="detail"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="date">Tanggal</label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value="date"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="partner">Mitra</label>
              <div className="col-sm-10">
                <select
                  id="partner"
                  className="form-select"
                  name="partner"
                  value="partner"
                >
                  <option>Default select</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="status">Status</label>
              <div className="col-sm-10">
                <select
                  id="status"
                  className="form-select"
                  name="status"
                  value="status"
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="delivered">Delivered</option>
                  <option value="canceled">Canceled</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary" id="btn-submit"></button>
                <Link to="/aktifitas" type="button" className="btn btn-outline-secondary">kembali</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
