import '../../public/assets/vendor/css/pages/page-auth.css';

export default function Login() {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-body fw-bolder">Sneat</span>
                </a>
              </div>

              <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="username"
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="password">Password</label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                
                <div className="mb-3 mt-5">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
