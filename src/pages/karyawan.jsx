import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {employee} from "../apis/expressServer.js";

export default function Karyawan() {
  const [employeeList, setEmployeeList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [filter, setFilter] = useState('semua')

  useEffect(() => {
    fetchEmployees();
  }, [filter]);

  const fetchEmployees = async () => {
    setEmployeeList([]);
    setIsLoading(true);
    const employees = await employee().getAll(filter);
    if (!employees.error) {
      setEmployeeList(employees.data);
    } else {
      setErrorMessage(employees.message);
    }
    setIsLoading(false);
  }

  return (
    <DashboardLayout title="Karyawan" tabActive="karyawan">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Daftar Karyawan</h5>
          <div className="d-flex gap-3 align-items-center">
            <div className="input-group">
              <span className="input-group-text">filter:</span>
              <select
                  id="filter"
                  className="form-select"
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
              >
                <option value="all">Semua</option>
                <option value="free">Nganggur</option>
                <option value="off">Tidak di Kantor</option>
                <option value="busy">Sibuk/Trip</option>
              </select>
            </div>
            <Link to="/karyawan/tambah" className="btn btn-primary">Tambah</Link>
          </div>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped" id="table-data">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Status</th>
              <th>Telp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
          {!isLoading && !errorMessage && employeeList.map((employee, index) => (
              <tr key={index}>
                <td>{employee.nickname}</td>
                <td>{employee.status}</td>
                <td>{employee.phone}</td>
                <td>
                  <Link to={`/karyawan/${employee.id}`} className="btn btn-sm btn-secondary me-2">edit</Link>
                  <Link to={`/karyawan/${employee.id}/gaji`} className="btn btn-sm btn-success">gaji</Link>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
  );
}
