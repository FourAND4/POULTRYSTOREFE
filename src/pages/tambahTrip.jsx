import DashboardLayout from "../layout/dashboardLayout.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { activity, car, employee, trip } from "../apis/expressServer.js";

export default function TambahTrip() {
  const dateFormatter = (date) => date.toLocaleDateString('fr-CA');

  const { id } = useParams();
  const currentMode = id ? 'Edit' : 'Tambah';
  const navigate = useNavigate();

  const [employeeList, setEmployeeList] = useState([]);
  const [carList, setCarList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [activityDate, setActivityDate] = useState(dateFormatter(new Date()));
  const [formData, setFormData] = useState({
    date: dateFormatter(new Date()),
    area: '',
    estimasi: '',
    wage: '',
    employee1_id: 'DEFAULT',
    employee2_id: 'DEFAULT',
    car_id: 'DEFAULT',
    status: 'scheduled',
    activity: [],
  });

  useEffect(() => {
    if (id) {
      fetchSingleData(id);
    }
  }, [id]);

  useEffect(() => {
    fetchActivity()
  }, [activityDate]);

  useEffect(() => {
    fetchEmployees();
    fetchFreeCars();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = id
        ? await trip().update(id, formData)
        : await trip().store(formData);
    if (!response.error) {
      navigate('/trip');
    } else {
      console.log(response);
      alert(response.message);
    }
  };

  const handleDelete = async () => {
    const response = await trip().delete(id);
    if (!response.error) {
      navigate('/trip');
    } else {
      alert(response.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleActivityChange = (activityId) => {
    setFormData((prevState) => {
      const activity = prevState.activity.includes(activityId)
          ? prevState.activity.filter((id) => id !== activityId)
          : [...prevState.activity, activityId];
      return { ...prevState, activity };
    });
  };

  const fetchSingleData = async (id) => {
    const result = await trip().getById(id);
    if (!result.error) {
      setFormData(result.data);
    } else {
      alert(result.message);
    }
  };

  const fetchFreeCars = async () => {
    const result = await car().getFree();
    if (!result.error) {
      setCarList(result.data);
    } else {
      alert(result.message);
    }
  };

  const fetchEmployees = async () => {
    const result = await employee().getAll('free');
    if (!result.error) {
      setEmployeeList(result.data);
    } else {
      alert(result.message);
    }
  };

  const fetchActivity = async () => {
    const result = await activity().getAllWithNoTrip(activityDate, 'free');
    if (!result.error) {
      setActivityList(result.data);
    } else {
      alert(result.message);
    }
  };

  return (
      <DashboardLayout title="Trip" tabActive="trip">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="card mb-4">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0">{currentMode} Trip</h5>
                {id && (
                    <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
                      Hapus Data Ini
                    </button>
                )}
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="tanggal">
                      Tanggal
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="tanggal"
                        value={formData.date}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="area">
                      Area
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="area"
                        placeholder="kecamatan, kabupaten"
                        value={formData.area}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="estimasi">
                      Estimasi (jam)
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="estimasi"
                        placeholder="perkiraan lama pekerjaan dalam jam"
                        value={formData.estimasi}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="wage">
                      Bayaran
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="wage"
                        placeholder="upah untuk trip ini"
                        value={formData.wage}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="petugas-1">
                      Petugas 1
                    </label>
                    <select
                        id="employee1_id"
                        className="form-select"
                        value={formData.employee1_id}
                        onChange={handleChange}
                    >
                      <option disabled={true} value={'DEFAULT'}>
                        Default select
                      </option>
                      {employeeList &&
                          employeeList.map((employee, index) => (
                              <option key={index} value={employee.id}>
                                {employee.nickname}
                              </option>
                          ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="petugas-2">
                      Petugas 2
                    </label>
                    <select
                        id="employee2_id"
                        className="form-select"
                        value={formData.employee2_id}
                        onChange={handleChange}
                    >
                      <option disabled={true} value={'DEFAULT'}>
                        Default select
                      </option>
                      {employeeList &&
                          employeeList.map((employee, index) => (
                              <option key={index} value={employee.id}>
                                {employee.nickname}
                              </option>
                          ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="mobil">
                      Mobil
                    </label>
                    <select
                        id="car_id"
                        className="form-select"
                        value={formData.car_id}
                        onChange={handleChange}
                    >
                      <option disabled={true} value={'DEFAULT'}>
                        Default select
                      </option>
                      {carList &&
                          carList.map((car, index) => (
                              <option key={index} value={car.id}>
                                {car.plat}
                              </option>
                          ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="status">
                      Status
                    </label>
                    <select
                        id="status"
                        className="form-select"
                        disabled={currentMode === 'Tambah'}
                        value={formData.status}
                        onChange={handleChange}
                    >
                      <option value="scheduled">scheduled</option>
                      <option value="delivered">delivered</option>
                      <option value="canceled">canceled</option>
                      <option value="done">done</option>
                    </select>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary me-2">
                      {currentMode}
                    </button>
                    <Link to="/trip" type="button" className="btn btn-outline-secondary">
                      kembali
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Pilih Aktifitas</h5>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="input-group">
                      <span className="input-group-text">tanggal:</span>
                      <input
                          type="date"
                          className="form-control"
                          value={activityDate}
                          onChange={e => setActivityDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive text-nowrap">
                <table className="table table-striped">
                  <thead>
                  <tr>
                    <th width="50%">Rincian Pekerjaan</th>
                    <th width="35%">Tujuan</th>
                    <th width="15%">Pilih</th>
                  </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                  {activityList &&
                    activityList.map((activity, index) => (
                      <tr key={index}>
                        <td>
                          <small>
                            <b>{activity.detail}</b>
                          </small>
                          <br />
                          <small>{dateFormatter(new Date(activity.date))}</small>
                          <br />
                        </td>
                        <td>
                          <small>
                            <b>{activity.partner.name}</b>
                          </small>
                          <br />
                          <small>{activity.partner.area}</small>
                          <br />
                        </td>
                        <td>
                          <input
                              className="form-check-input"
                              type="checkbox"
                              checked={formData.activity.includes(activity.id)}
                              onChange={() => handleActivityChange(activity.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
  );
}
