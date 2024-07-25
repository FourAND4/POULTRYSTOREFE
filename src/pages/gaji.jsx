import DashboardLayout from "../layout/dashboardLayout";
import {useEffect, useState} from "react";
import {salary} from "../apis/expressServer.js";
import {Link} from "react-router-dom";

export default function Gaji() {
  const dateFormatter = date => date.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit' });

  const [month, setMonth] = useState(dateFormatter(new Date()));
  const [salaries, setSalaries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchData();
  }, [month]);

  const fetchData = async () => {
    setSalaries([]);
    setIsLoading(true);
    const result = await salary().getAll(month);
    if (!result.error) {
      setSalaries(result.data);
    } else {
      setErrorMessage(result.message);
    }
    setIsLoading(false);
  }

  const markAsLunas = async (id) => {
    const result = await salary().update(id, { status: 'paid' });
    if (!result.error) {
      fetchData();
    } else {
      setErrorMessage(result.message);
    }
  }

  return (
    <DashboardLayout title="Gaji" tabActive="gaji">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Daftar</h5>
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
          </div>
        </div>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped" id="table-data">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Bulan</th>
              <th>Gaji</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
          {!isLoading && !errorMessage && salaries.map((salary, index) => (
              salary.salary && salary.salary.length > 0 && (
                  <tr key={index}>
                    <td>{salary.nickname}</td>
                    <td>{dateFormatter(new Date(salary.salary[0].month))}</td>
                    <td>{salary.salary[0].salary_total}</td>
                    <td>{salary.salary[0].status}</td>
                    <td>
                      <Link to={`/gaji/${salary.salary[0].id}`} className="btn btn-sm btn-secondary me-2">lihat</Link>
                      {salary.salary[0].status === 'delayed' && (
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => markAsLunas(salary.salary[0].id)}
                        >
                          Tandai Lunas
                        </button>
                      )}
                    </td>
                  </tr>
              )
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
