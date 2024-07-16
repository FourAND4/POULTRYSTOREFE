import SideBar from "../components/sideBar";
import NavBar from "../components/navBar";

export default function DashboardLayout(props) {
  const { children, title, tabActive } = props;
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SideBar tabActive={tabActive} />
        <div className="layout-page">
          <NavBar title={title} />
          <main className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
