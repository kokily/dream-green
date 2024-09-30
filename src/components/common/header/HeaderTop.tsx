'use client';

import { signOut, useSession } from 'next-auth/react';

export function HeaderTop() {
  const { status } = useSession();

  const onLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <div className="top-header bg-dark light_skin d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <ul className="contact_detail list_none text-center text-md-left">
              <li>
                <i className="ti-mobile"></i>
                {status === 'authenticated' ? (
                  <a href="/write" style={{ color: 'white' }}>
                    포스트 작성
                  </a>
                ) : (
                  '031) 831-8852'
                )}
              </li>
              <li>
                <i className="ti-location-pin"></i>
                {status === 'authenticated' ? (
                  <b className="link-danger" onClick={onLogout}>
                    로그아웃
                  </b>
                ) : (
                  '경기도 화성시 팔탄면 동막길 79-25'
                )}
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list_none social_icons text-center border_social rounded_social social_white  text-md-right mt-2 mt-md-0">
              <li>
                <a href="https://www.youtube.com/@%EA%BF%88%EC%97%90%EA%B7%B8%EB%A6%B0%ED%99%98%EA%B2%BD-v7e">
                  <i className="ion-social-youtube-outline"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="ion-social-instagram-outline"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
