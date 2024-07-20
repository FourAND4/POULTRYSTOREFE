import DashboardLayout from "../layout/dashboardLayout";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function TambahMitra() {
  const id = useParams().id;
  const currentMode = id ? 'Edit' : 'Tambah';

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  const [partnershipType, setPartnershipType] = useState('');

  useEffect(() => {
    if (id) {
      fetchSingleData(id);
    }
  }, [id]);

  const fetchSingleData = id => {
    // TODO: fetch single data by id
    console.log(id);
  }
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: when form is submit
  }
  const handleDelete = () => {
    // TODO: handle delete
  }

  return (
    <DashboardLayout title="Mitra" tabActive="mitra">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">{currentMode} Mitra</h5>
          {id && (
            <button className="btn btn-sm btn-outline-danger" id="btn-delete" onClick={handleDelete}>Hapus Data Ini</button>
          )}
        </div>
        <div className="card-body">
          <form id="form-data" onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                  value={address}
                  onChange={e => setAddress(e.target.value)}
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
                  value={area}
                  onChange={e => setArea(e.target.value)}
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
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
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
                  value={partnershipType}
                  onChange={e => setPartnershipType(e.target.value)}
                />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary me-2" id="btn-submit">{currentMode}</button>
                <Link to="/mitra" type="button" className="btn btn-outline-secondary">kembali</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
