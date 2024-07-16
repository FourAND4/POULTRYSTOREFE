import DashboardLayout from "../layout/dashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout title="Profile">
    <div>
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Identitas</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="nama-ktp">Nama sesuai KTP</label>
              <div className="col-sm-10">
                <p>: Imam Subekti</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="nik">NIK</label>
              <div className="col-sm-10">
                <p>: 3401010202010002</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="nama-panggilan">Nama Panggilan</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="nama-panggilan" placeholder="bagaimana orang-orang memanggil anda" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="alamat">Alamat</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="alamat" placeholder="alamat lengkap" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="nomor-telpon">Nomor Telpon</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="nomor-telpon" placeholder="ex: 08123..." />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Edit</button>
                <a href="/employee" type="button" className="btn btn-outline-secondary">kembali</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Aplikasi</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="nama-pengguna">Nama Pengguna</label>
              <div className="col-sm-10">
                <p>: imams</p>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="password">Sandi Baru</label>
              <div className="col-sm-8 form-password-toggle">
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                  />
                  <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                </div>
              </div>
              <div className="col-sm-2 text-end">
                <button className="btn btn-primary w-100">Perbarui Sandi</button>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="jabatan">Jabatan</label>
              <div className="col-sm-10">
                <p>: Junior Worker</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5>Gaji</h5>
          <div className="d-flex gap-3 align-items-center">
            <div className="input-group">
              <span className="input-group-text">bulan:</span>
              <input type="month" className="form-control" />
            </div>
          </div>
        </div>
        <div className="mx-4">
          <p>Total Pendapatan: <b>2.000.000</b></p>
          <p>Status: <b>Delayed</b></p>
          <hr />
          <p><b>Rincian: </b></p>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th width="30%">Pekerjaan</th>
                <th width="10%">Upah</th>
                <th width="10%">Tanggal</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>Gaji Bulanan</td>
                <td>1.000.000</td>
                <td>27/04/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}