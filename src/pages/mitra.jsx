import DashboardLayout from "../layout/dashboardLayout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {partner} from "../apis/expressServer.js";

export default function Mitra() {
  const [partnersList, setPartnersList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    setPartnersList([]);
    setIsLoading(true);
    const result = await partner().getAll();
    if (!result.error) {
      setPartnersList(result.data);
    } else {
      setErrorMessage(result.message);
    }
    setIsLoading(false);
  }

  return (
    <DashboardLayout title="Mitra" tabActive="mitra">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Daftar</h5>
            <div className="d-flex gap-3 align-items-center">
              <Link to="/mitra/tambah" className="btn btn-primary">Tambah</Link>
            </div>
          </div>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table table-striped" id="table-data">
            <thead>
              <tr>
                <th width="15%">Nama</th>
                <th width="20%">Area</th>
                <th width="15%">Telp</th>
                <th width="40%">Jenis Kemitraan</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {!isLoading && !errorMessage && partnersList.map((partner, index) => (
                  <tr key={index}>
                    <td>{partner.name}</td>
                    <td>{partner.area}</td>
                    <td>
                      <a href={`https://wa.me/62${parseInt(partner.phone).toString()}`} target="_blank">{partner.phone}</a>
                    </td>
                    <td>{partner.partner_type}</td>
                    <td>
                      <Link to={`/mitra/${partner.id}`} className="btn btn-sm btn-secondary">Edit</Link>
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
  

