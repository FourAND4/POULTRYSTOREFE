import DashboardLayout from "../layout/dashboardLayout";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {car} from "../apis/expressServer.js";

export default function TambahMobil() {
  const id = useParams().id;
  const currentMode = id ? 'Edit' : 'Tambah';
  const navigate = useNavigate();

  const [plat, setPlat] = useState('');
  const [merk, setMerk] = useState('');
  const [status, setStatus] = useState('free');

  useEffect(() => {
    if (id) {
      fetchSingleData(id);
    }
  }, [id]);

  const fetchSingleData = async id => {
    const result = await car().getById(id);
    if (!result.error){
      setPlat(result.data.plat);
      setMerk(result.data.merk);
      setStatus(result.data.status);
    } else {
      alert(result.message);
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const response = id
        ? await car().update(id, { plat, merk, status })
        : await car().store({ plat, merk, status });
    if (!response.error){
      navigate('/mobil');
    } else {
      alert(response.message);
    }
  }

  const handleDelete = async () => {
    const response = await car().delete(id);
    console.log(response);
    if (!response.error){
      navigate('/mobil');
    } else {
      alert(response.message);
    }
  }

  return (
    <DashboardLayout title="Mobil" tabActive="mobil">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">{currentMode} Mobil</h5>
            {id && (
              <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>Hapus Data Ini</button>
            )}
        </div>
        <div className="card-body">
          <form id="form-data" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="plat">Nomor Plat</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="plat"
                  placeholder="ex: AB 1234 LL"
                  value={plat}
                  onChange={e => setPlat(e.target.value)}
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
                  value={merk}
                  onChange={e => setMerk(e.target.value)}
                />
              </div>
            </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="kondisi">Kondisi</label>
                <div className="col-sm-10">
                  <select
                    id="kondisi"
                    className="form-select"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
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
                  className="btn btn-primary me-2"
                  id="btn-submit"
                >{currentMode}</button>
                <Link to="/mobil" className="btn btn-outline-secondary">Kembali</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
