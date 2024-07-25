import DashboardLayout from "../layout/dashboardLayout";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {employee, wage} from "../apis/expressServer.js";

export default function TambahGaji() {
  const dateFormatter = (date) => date.toLocaleDateString('fr-CA');

  const { id, user } = useParams();
  const currentMode = id ? 'Edit' : 'Tambah';
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState(dateFormatter(new Date()));
  const [action, setAction] = useState('bonus');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (id) {
      fetchSingleData(id);
    }
    if (user) {
      fetchUserData(user);
    }
  }, [id, user]);

  const fetchSingleData = async id => {
    const result = await wage().getById(id);
    if (!result.error){
      setReason(result.data.reason);
      setDate(dateFormatter(new Date(result.data.date)));
      setAmount(result.data.amount);
    } else {
      alert(result.message);
    }
  }

  const fetchUserData = async userId => {
    const result = await employee().getById(userId);
    if (!result.error) {
      setName(result.data.nickname);
    } else {
      alert(result.message);
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const response = id
        ? await wage().update(id, { employee: user, reason, date, amount: action === 'bonus' ? amount * 1 : amount * -1 })
        : await wage().store({ employee: user, reason, date, amount: action === 'bonus' ? amount * 1 : amount * -1 });
    if (!response.error){
      navigate(`/karyawan/${user || id}/gaji`);
    } else {
      alert(response.message);
    }
  }

  return (
    <DashboardLayout title="Gaji" tabActive="_">
   <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="mb-0">{currentMode} Gaji</h5>
      </div>
      <div className="card-body">
        <form id="form-data" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="name">Nama</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                disabled={true}
                value={name}
                onChange={e => setName(e.target.value)}
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
                value={reason}
                onChange={e => setReason(e.target.value)}
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
            <label className="col-sm-2 col-form-label" htmlFor="action">Jenis Aksi</label>
            <div className="col-sm-10">
              <select
                id="action"
                className="form-select"
                value={action}
                onChange={e => setAction(e.target.value)}
              >
                <option value="bonus">Bonus</option>
                <option value="penalty">Penalty</option>
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
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-sm-10">
              <button
                  type="submit"
                  className="btn btn-primary me-2"
                  id="btn-submit"
              >{currentMode}</button>
              <Link to={`/karyawan/${user || id}/gaji`} className="btn btn-outline-secondary">Kembali</Link>
            </div>
          </div>
        </form>
      </div>
   </div>
    </DashboardLayout>
  );
}
