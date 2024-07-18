export function SideNav() {
  return (
    <ul className="navbar-nav attr-nav align-items-center">
      <li className="dropdown">
        <a className="nav-link" href="#" data-toggle="dropdown">
          <i className="ion-chatbubbles"></i>
        </a>
        <div className="cart_box dropdown-menu dropdown-menu-right">
          <div className="field_form form_style4">
            <div className="row p-4">
              <div className="form-group input-group-lg pr-4">
                <input className="form-control" type="text" required />
                <label>이메일</label>
              </div>
              <div className="form-group input-group-lg pr-4">
                <textarea
                  required
                  className="form-control"
                  style={{ resize: 'none' }}
                  rows={4}
                />
                <label>전송할 내용</label>
              </div>
            </div>
          </div>
          <div className="cart_footer">
            <p className="cart_buttons">
              <a href="#" className="btn checkout">
                메일전송
              </a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
