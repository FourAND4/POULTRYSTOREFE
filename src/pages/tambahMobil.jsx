import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";

export default function TambahMobil() {
  return (
    <DashboardLayout title="Mobil" tabActive="mobil">
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="mb-0"></h5>
          <button className="btn btn-sm btn-outline-danger">Hapus Data Ini</button>
      </div>
      <div className="card-body">
        <form id="form-data">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="plat">Nomor Plat</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="plat"
                placeholder="ex: AB 1234 LL"
                name="plat"
                value="plat"        
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="merk">Merk dan Tipe</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="merk"
                placeholder="ex: Mitsubishi Colt L300"
                name="merk"
                value="merk"
              />
            </div>
          </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="kondisi">Kondisi</label>
              <div className="col-sm-10">
                <select
                  id="kondisi"
                  className="form-select"
                  name="status"
                  value="status"     
                >
                  <option value="free">Free</option>
                  <option value="busy">Busy</option>
                  <option value="broken">Broken</option>
                </select>
              </div>
            </div>
          <div className="row justify-content-end">
            <div className="col-sm-10">
              <button 
                type="submit" 
                className="btn btn-primary" 
                id="btn-submit"
              ></button>
              <Link to="/mobil" className="btn btn-outline-secondary">Kembali</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </DashboardLayout>
  );
}
