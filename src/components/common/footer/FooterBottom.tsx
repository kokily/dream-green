'use client';

import { Privacy } from './etc/Privacy';
import { Term } from './etc/Term';

export function FooterBottom() {
  return (
    <div className="bottom_footer bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="copyright m-md-0 text-center text-md-left">
              &copy; 2024 All Rights Reserved by 꿈에그린환경
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list_none footer_link text-center text-md-right">
              <li>
                <a
                  className="link-dark"
                  style={{ cursor: 'pointer' }}
                  data-toggle="modal"
                  data-target="#privacy"
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a
                  className="link-dark"
                  style={{ cursor: 'pointer' }}
                  data-toggle="modal"
                  data-target="#term"
                >
                  이용약관
                </a>
              </li>
            </ul>
          </div>

          <Privacy />
          <Term />
        </div>
      </div>
    </div>
  );
}
