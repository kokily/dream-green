import Link from 'next/link';

export function FooterTop() {
  return (
    <div className="top_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="medium_divider"></div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 mb-4 mb-lg-0 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
          >
            <div className="footer_logo">
              <Link href="/">
                <img alt="logo" src="/img/logo01.png" />
              </Link>
            </div>
            <p>
              책임감 강하고 성실한 30대 인원으로 구성되어 신속한 폐기물 처리가
              가능하며 합리적인 수거 및 처리비용을 약속드립니다
            </p>
            <ul className="contact_info contact_info_light list_none">
              <li>
                <span className="ti-location-pin"></span>
                <address>경기 화성시 팔탄면 동막길 79-25</address>
              </li>
              <li>
                <span className="ti-email"></span>
                <a href="mailto:dream_green7@naver.com">
                  dream_green7@naver.com
                </a>
              </li>
              <li>
                <span className="ti-mobile"></span>
                <p>031) 831-8852</p>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-2 col-md-6 mb-4 mb-lg-0 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.3s"
          >
            <h6 className="widget_title">메뉴 바로가기</h6>
            <ul className="list_none widget_links">
              <li>
                <a href="/location">찾아오시는 길</a>
              </li>
              <li>
                <a href="/area">수거지역</a>
              </li>
              <li>
                <a href="/money">비용안내</a>
              </li>
              <li>
                <a href="/faq">자주하는 질문</a>
              </li>
              <li>
                <a href="/question">온라인 문의</a>
              </li>
              <li>
                <a href="/blog">처리 블로그</a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-6 mb-4 mb-lg-0 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.4s"
          >
            <h6 className="widget_title">최근 블로그 글</h6>
            <ul className="recent_post border_bottom_dash list_none">
              <li>
                <div className="post_footer">
                  <div className="post_img">
                    <a href="#">
                      <img
                        src="/img/2024-07-17-08-41-13-1.jpeg"
                        alt="letest_post1"
                      />
                    </a>
                  </div>
                  <div className="post_content">
                    <h6>
                      <a href="#">남산트윈타워 폐기물 수거</a>
                    </h6>
                    <p className="small m-0">2024년 7월 17일</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="post_footer">
                  <div className="post_img">
                    <a href="#">
                      <img
                        src="/img/2024-07-17-08-51-42-6.jpeg"
                        alt="letest_post2"
                      />
                    </a>
                  </div>
                  <div className="post_content">
                    <h6>
                      <a href="#">국립의료원 방역 소독</a>
                    </h6>
                    <p className="small m-0">2024년 7월 16일</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="post_footer">
                  <div className="post_img">
                    <a href="#">
                      <img
                        src="/img/2024-07-17-08-51-42-17.jpeg"
                        alt="letest_post3"
                      />
                    </a>
                  </div>
                  <div className="post_content">
                    <h6>
                      <a href="#">페럼타워 방역 소독</a>
                    </h6>
                    <p className="small m-0">2024년 7월 15일</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-6 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.5s"
          >
            <h6 className="widget_title">꿈에그린 사진</h6>
            <ul className="list_none instafeed">
              <li>
                <a href="#">
                  <img src="/img/photo.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>10</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img2.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>42</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img3.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>55</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img4.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>20</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img5.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>18</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img6.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>15</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img7.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>03</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img8.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>07</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/images/insta_img9.jpg" />
                  <span className="insta_counter">
                    <i className="ti-heart"></i>
                    <span>05</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
