import DashboardLayout from "../layout/dashboardLayout";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {employee} from "../apis/expressServer.js";

export default function TambahKaryawan() {
  const id = useParams().id;
  const currentMode = id ? 'Edit' : 'Tambah';
  const navigate = useNavigate();

  const [surename, setSurename] = useState('');
  const [nik, setNik] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('Junior Worker');
  const [baseSalary, setBaseSalary] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (id) {
      fetchSingleData(id);
    }
  }, [id]);

  const fetchSingleData = async id => {
    const result = await employee().getById(id);
    if (!result.error){
      setSurename(result.data.surename);
      setNik(result.data.nik);
      setAddress(result.data.address);
      setPhone(result.data.phone);
      setPosition(result.data.position);
      setBaseSalary(result.data.base_salary);
      setNickname(result.data.nickname);
      setUsername(result.data.username);
    } else {
      alert(result.message);
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const response = id
        ? await employee().update(id, { surename, nik, address, phone, position, baseSalary, nickname, username })
        : await employee().store({ surename, nik, address, phone, position, baseSalary, nickname, username, password });
    if (!response.error){
      navigate('/karyawan');
    } else {
      alert(response.message);
    }
  }

  const handleDelete = async () => {
    const response = await employee().delete(id);
    if (!response.error){
      navigate('/karyawan');
    } else {
      alert(response.message);
    }
  }
  return (
      <DashboardLayout title="Karyawan" tabActive="karyawan">
        <div className="card mb-4">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="mb-0">{currentMode} Karyawan</h5>
            {id && (
                <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>Hapus Data Ini</button>
            )}
          </div>
          <div className="card-body">
            <form id="form-data" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="surename">Nama sesuai KTP</label>
                <div className="col-sm-10">
                  <input
                      type="text"
                      className="form-control"
                      id="surename"
                      placeholder="nama sesuai KTP"
                      value={surename}
                      onChange={e => setSurename(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="nik">NIK</label>
                <div className="col-sm-10">
                  <input
                      type="number"
                      className="form-control"
                      id="nik"
                      placeholder="16 digit nomor KTP"
                      value={nik}
                      onChange={e => setNik(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="address">Alamat</label>
                <div className="col-sm-10">
                  <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="alamat lengkap"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="phone">Nomor Telpon</label>
                <div className="col-sm-10">
                  <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="nomor telpon atau wa"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="jabatan">Jabatan</label>
                <div className="col-sm-10">
                  <select
                      id="jabatan"
                      className="form-select"
                      value={position}
                      onChange={e => setPosition(e.target.value)}
                  >
                    <option value="Junior Worker">Junior Worker</option>
                    <option value="Senior Worker">Senior Worker</option>
                    <option value="Officer">Officer</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="base_salary">Gaji Pokok</label>
                <div className="col-sm-10">
                  <input
                      type="number"
                      className="form-control"
                      id="base_salary"
                      placeholder="gaji pokok / bulan dalam rupiah"
                      value={baseSalary}
                      onChange={e => setBaseSalary(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="nickname">Nama Panggilan</label>
                <div className="col-sm-10">
                  <input
                      type="text"
                      className="form-control"
                      id="nickname"
                      placeholder="bagaimana orang-orang memanggil anda"
                      value={nickname}
                      onChange={e => setNickname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="username">Nama Pengguna</label>
                <div className="col-sm-10">
                  <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="username untuk masuk ke aplikasi"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>
              {!id && (
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="password">Sandi (untuk login)</label>
                  <div className="col-sm-10 form-password-toggle">
                    <div className="input-group input-group-merge">
                      <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="······"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                      />
                      <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                    </div>
                  </div>
                </div>
              )}
              <div className="row justify-content-end">
                <div className="col-sm-10">
                  <button
                      type="submit"
                      className="btn btn-primary me-2"
                      id="btn-submit"
                  >{currentMode}</button>
                  <Link to="/karyawan" className="btn btn-outline-secondary">Kembali</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </DashboardLayout>
  );
}
