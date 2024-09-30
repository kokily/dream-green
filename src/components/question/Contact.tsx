import type { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  email: string;
  body: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSendMail: (e: SyntheticEvent) => void;
}

export function Contact({ email, body, onChange, onSendMail }: Props) {
  return (
    <section className="small_pb overflow_hide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="box_shadow4">
              <div className="row no-gutters">
                <div className="col-lg-4 col-md-5">
                  <div
                    className="bg-dark small_padding h-100 animation animated fadeInLeft"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.2s"
                    style={{
                      animationDelay: '0.2s',
                      opacity: '1',
                    }}
                  >
                    <div className="heading_s2 heading_light">
                      <h4>(주)꿈에그린환경</h4>
                    </div>
                    <p className="text-white">
                      전화, 이메일, 견적 문의 등 모든 문의 환영합니다.
                    </p>
                    <ul className="contact_info contact_info_style1 contact_info_light list_none">
                      <li>
                        <span className="ti-location-pin"></span>
                        <address>경기도 화성시 팔탄면 동막길 79-25</address>
                      </li>
                      <li>
                        <span className="ti-email"></span>
                        <a href="mailto:info@sitename.com">
                          dream_green7@naver.com
                        </a>
                      </li>
                      <li>
                        <span className="ti-mobile"></span>
                        <p>031) 831-8852</p>
                      </li>
                      <li>
                        <span className="ti-time"></span>
                        <p>
                          월-금: 09:00~17:00
                          <br />
                          주말 및 공휴일: 이메일 문의
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div
                    className="small_padding animation animated fadeInRight"
                    data-animation="fadeInRight"
                    data-animation-delay="0.3s"
                    style={{
                      animationDelay: '0.3s',
                      opacity: '1',
                    }}
                  >
                    <div className="heading_s2">
                      <h4>견적 문의</h4>
                    </div>
                    <div className="field_form">
                      <form method="post" name="enq">
                        <div className="row">
                          <div className="form-group col-lg-6">
                            <input
                              required
                              placeholder="이메일 주소 *"
                              id="email"
                              className="form-control"
                              name="email"
                              type="email"
                              value={email}
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-group col-lg-12">
                            <textarea
                              required
                              placeholder="보내실 내용 *"
                              id="description"
                              className="form-control"
                              name="body"
                              rows={4}
                              value={body}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-lg-12">
                            <button
                              title="Submit Your Message!"
                              className="btn btn-default font-weight-bold"
                              id="submitButton"
                              name="submit"
                              value="Submit"
                              onClick={onSendMail}
                            >
                              견적 문의
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
