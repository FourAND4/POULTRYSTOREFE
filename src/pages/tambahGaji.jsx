import DashboardLayout from "../layout/dashboardLayout";
import {useParams} from "react-router-dom";

export default function TambahGaji() {
  const { id } = useParams();

  return (
    <DashboardLayout title="Gaji" tabActive="_">
   <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="mb-0"></h5>
          <button className="btn btn-sm btn-outline-danger" id="btn-delete">Hapus Data Ini</button>
      </div>
      <div className="card-body">
        <form id="form-data">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="name">Nama</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="nama"
                value="name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="reason">Alasan</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="reason"
                placeholder="kenapa bonus/penalty diberikan"
                value="reason"
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
                value="date"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="action">Jenis Aksi</label>
            <div className="col-sm-10">
              <select
                id="action"
                className="form-select"
                value="action"
              >
                <option value="1">Bonus</option>
                <option value="2">Penalty</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="amount">Jumlah</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="dalam rupiah"
                value="amount"
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary" id="btn-submit"></button>
              <button type="button" className="btn btn-outline-secondary">kembali</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </DashboardLayout>
  );
}
