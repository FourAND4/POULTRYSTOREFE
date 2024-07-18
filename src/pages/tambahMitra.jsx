import DashboardLayout from "../layout/dashboardLayout";

export default function TambahMitra() {
  return (
    <DashboardLayout title="Mitra" tabActive="mitra">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0"></h5>
          <button className="btn btn-sm btn-outline-danger" id="btn-delete">Hapus Data Ini</button>
        </div>
        <div className="card-body">
          <form id="form-data">
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="name">
                Nama Mitra
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="ex: pak ard..."
                  name="name"
                  value="name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="address">
                Alamat Lengkap
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="alamat lengkap"
                  name="address"
                  value="address"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="area">
                Area
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="area"
                  placeholder="kecamatan, kabupaten"
                  name="area"
                  value="area"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="phone">
                Nomor Telpon
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="ex: 08123..."
                  name="phone"
                  value="phone"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="partnership_type">
                Jenis Kemitraan
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="partnership_type"
                  placeholder="ex: pembesaran puyuh, petelur puyuh..."
                  name="partnership_type"
                  value="partnership_type"
                />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary" id="btn-submit"></button>
                <a href="/partner" type="button" className="btn btn-outline-secondary">kembali</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
