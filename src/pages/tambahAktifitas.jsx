import DashboardLayout from "../layout/dashboardLayout";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {activity, partner} from "../apis/expressServer.js";

export default function TambahAktifitas() {
  const dateFormatter = date => date.toLocaleDateString('fr-CA');

  const id = useParams().id;
  const currentMode = id ? 'Edit' : 'Tambah';
  const navigate = useNavigate();

  const [detail, setDetail] = useState('');
  const [date, setDate] = useState( dateFormatter(new Date()) );
  const [partnerId, setPartnerId] = useState('DEFAULT');
  const [status, setStatus] = useState('scheduled');
  const [partnerList, setPartnerList] = useState([]);

  useEffect(() => {
    fetchPartnerList();
  }, []);
  useEffect(() => {
    if (id) {
      fetchSingleData(id);
    }
  }, [id]);

  const fetchSingleData = async id => {
    const result = await activity().getById(id);
    if (!result.error) {
      const formatedDate = new Date(result.data.date).toISOString().split('T')[0];
      setDetail(result.data.detail);
      setDate(formatedDate);
      setPartnerId(result.data.partner_id);
      setStatus(result.data.status);
    } else {
      alert(result.message);
    }
  }
  const fetchPartnerList = async () => {
    const result = await partner().getAll();
    if (!result.error){
      setPartnerList(result.data);
    } else {
      alert(result.message);
    }
  }
  const handleSubmit = async event => {
    event.preventDefault();
    const response = id
        ? await activity().update(id, { detail, date, partnerId, status })
        : await activity().store({ detail, date, partnerId, status });
    if (!response.error){
      navigate('/aktifitas');
    } else {
      alert(response.message);
    }
  }
  const handleDelete = async () => {
    const response = await activity().delete(id);
    if (!response.error){
      navigate('/aktifitas');
    } else {
      alert(response.message);
    }
  }

  return (
    <DashboardLayout title="Aktifitas" tabActive="aktifitas">
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">{currentMode} Aktivitas</h5>
          {id && (
            <button className="btn btn-sm btn-outline-danger" id="btn-delete" onClick={handleDelete}>Hapus Data Ini</button>
          )}
        </div>
        <div className="card-body">
          <form id="form-data" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="detail">Rincian Kegiatan</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="detail"
                  placeholder="Apa yang mau dilakukan"
                  value={detail}
                  onChange={e => setDetail(e.target.value)}
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
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="partner">Mitra</label>
              <div className="col-sm-10">
                <select
                  id="partner"
                  className="form-select"
                  value={partnerId}
                  onChange={e => setPartnerId(e.target.value)}
                >
                  <option disabled={true} value={'DEFAULT'}>Default select</option>
                  {partnerList.map((partner, index) => (
                      <option key={index} value={partner.id}>{partner.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" htmlFor="status">Status</label>
              <div className="col-sm-10">
                <select
                  id="status"
                  className="form-select"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
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
                <button type="submit" className="btn btn-primary me-2" id="btn-submit">{currentMode}</button>
                <Link to="/aktifitas" type="button" className="btn btn-outline-secondary">kembali</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
