import { useParams } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout";

export default function Test() {
  const { id } = useParams();
  return (
    <DashboardLayout title="Testing" tabActive="dashboard">
      <p>test {id || ""}</p>
    </DashboardLayout>
  );
}
