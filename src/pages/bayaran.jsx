import DashboardLayout from "../layout/dashboardLayout";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {salary} from "../apis/expressServer.js";

export default function Bayaran(props) {
  const monthFormatter = date => date.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit' });
  const timeFormatter = date => {
    const dates = date.toLocaleDateString('fr-CA');
    const time = date.toLocaleTimeString('id-ID');
    return `${dates} ${time}`;
  };

  const { using } = props;
  const { id } = useParams();

  const [month , setMonth ] = useState(monthFormatter(new Date()));
  const [salaries, setSalaries] = useState({});
  const [wageList, setWageList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchWage();
  }, [month, id]);

  const fetchWage = async () => {
    setWageList([]);
    setIsLoading(true);
    const result = using === 'month'
        ? await salary().getByMonthNEmployee(month, id)
        : await salary().getById(id);
    if (!result.error) {
      console.log(result.data);
      setSalaries(result.data.salary);
      setWageList(result.data.wages);
    } else {
      setErrorMessage(result.message);
    }
    setIsLoading(false);
  }

  return (
    <DashboardLayout title="Gaji" tabActive={using === 'month' ? 'karyawan' : 'gaji'}>
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Daftar Gaji</h5>
            <div className="d-flex gap-3 align-items-center">
              <div className="input-group">
                <span className="input-group-text">bulan:</span>
                <input
                  type="month"
                  id="filter"
                  name="month"
                  className="form-control"
                  value={month}
                  onChange={e => setMonth(e.target.value)}
                />
              </div>
              <Link to={`/karyawan/${salaries.employee_id}/gaji/tambah`} className="btn btn-primary">Tambah</Link>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <p>Total Pendapatan: <b id="this-month-salary">Rp.{salaries.salary_total}</b></p>
          <p>Status: <b id="salary-status">{salaries.status}</b></p>
          <hr/>
          <p><b>Rincian: </b></p>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table table-striped" id="table-data">
            <thead>
            <tr>
              <th>Keterangan</th>
              <th>Upah</th>
              <th>Tanggal</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody className="table-border-bottom-0">
            {!isLoading && !errorMessage && wageList.map((wage, index) => (
                <tr key={index}>
                  <td>{wage.reason}</td>
                  <td>{wage.amount}</td>
                  <td>{timeFormatter(new Date(wage.date))}</td>
                  <td>
                    <Link to={`/gaji/${salaries.employee_id}/edit/${wage.id}`} className="btn btn-sm btn-secondary">edit</Link>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
          {isLoading && (
              <p>Loading...</p>
          )}
          {errorMessage && (
              <p>{errorMessage}</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
