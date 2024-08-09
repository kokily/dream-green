import { MouseEvent, MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  passwordRef: MutableRefObject<null>;
  onLogin: (e: MouseEvent) => void;
}

export function Login({ passwordRef, onLogin }: Props) {
  return (
    <section className="login_register_wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="text-center animation animated fadeInUp"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              style={{ animationDelay: '0.2s', opacity: 1 }}
            >
              <Link href="/">
                <Image
                  src="/img/logo01.png"
                  width={210}
                  height={60}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="lr_form text-center">
              <div
                className="heading_s3 heading_uppercase animation animated fadeInUp"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
                style={{ animationDelay: '0.4s', opacity: 1 }}
              >
                <h4>관리자로 로그인 하세요</h4>
              </div>

              <form
                className="login animation animated fadeInUp"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
                style={{ animationDelay: '0.8s', opacity: 1 }}
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    required
                    ref={passwordRef}
                    onChange={(e: any) => {
                      passwordRef.current = e.target.value;
                    }}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-default btn-block"
                    name="login"
                    onClick={onLogin}
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
