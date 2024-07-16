import { Link } from "react-router-dom";

export default function SideBar(props) {
  const { tabActive } = props;

  // prettier-ignore
  const listMenu = [
    { id: "dashboard", isItem: true, title: "Dashboard", icon: "bx-home-circle", link: "/dashboard"},
    { id: "penjadwalan", isItem: false, title: "Penjadwalan", icon: "", link: "" },
    { id: "trip", isItem: true, title: "Trip", icon: "bx-trip", link: "/trip" },
    { id: "aktifitas", isItem: true, title: "Aktifitas", icon: "bx-list-check", link: "/aktifitas"},
    { id: "sda", isItem: false, title: "Sumber Daya", icon: "", link: "" },
    { id: "karyawan", isItem: true, title: "Karyawan", icon: "bx-user", link: "/karyawan"},
    { id: "mobil", isItem: true, title: "Mobil", icon: "bx-car", link: "/mobil" },
    { id: "lain", isItem: false, title: "Lain-lain", icon: "", link: "" },
    { id: "mitra", isItem: true, title: "Mitra", icon: "bx-buildings", link: "/mitra" },
    { id: "gaji", isItem: true, title: "Gaji", icon: "bx-wallet", link: "/gaji" },
  ];
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Link to="#" className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            PoulStore
          </span>
        </Link>

        <a className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {listMenu.map((item) =>
          item.isItem ? (
            <li
              key={item.id}
              className={`menu-item ${tabActive === item.id && "active"}`}
            >
              <Link to={item.link} className="menu-link">
                <i
                  className={`menu-icon tf-icons bx ${
                    item.icon || "bx-home-circle"
                  }`}
                />
                <div>{item.title}</div>
              </Link>
            </li>
          ) : (
            <li key={item.id} className="menu-header small text-uppercase">
              <span className="menu-header-text">{item.title}</span>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}
