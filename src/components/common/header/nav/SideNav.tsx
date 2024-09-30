import { useSendMail } from '@/helpers/hooks/useSendMail';

export function SideNav() {
  const { email, body, onChange, onSendMail } = useSendMail();

  return (
    <ul className="navbar-nav attr-nav align-items-center">
      <li className="dropdown">
        <a className="nav-link" href="#" data-toggle="dropdown">
          <i className="ion-chatbubbles"></i>
        </a>
        <div className="cart_box dropdown-menu dropdown-menu-right">
          <div className="field_form form_style4">
            <div className="row p-4">
              <div className="cart_total mb-2">
                <strong>전달하고 싶은 내용을 보내주세요</strong>
              </div>
              <div className="form-group input-group-lg pr-4">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <label>이메일</label>
              </div>
              <div className="form-group input-group-lg pr-4">
                <textarea
                  required
                  className="form-control"
                  style={{ resize: 'none' }}
                  rows={4}
                  name="body"
                  value={body}
                  onChange={onChange}
                />
                <label>전송할 내용</label>
              </div>
            </div>
          </div>

          <div className="cart_footer">
            <p className="cart_buttons">
              <button className="btn checkout" onClick={onSendMail}>
                메일전송
              </button>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
