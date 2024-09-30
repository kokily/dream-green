export function FirstTop() {
  return (
    <div
      className="col-lg-3 col-md-6 mb-4 mb-lg-0 animation"
      data-animation="fadeInUp"
      data-animation-delay="0.2s"
    >
      <div className="footer_logo">
        <a href="/">
          <img alt="logo" src="/img/logo01.png" />
        </a>
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
          <a href="mailto:dream_green7@naver.com">dream_green7@naver.com</a>
        </li>
        <li>
          <span className="ti-mobile"></span>
          <p>031) 831-8852</p>
        </li>
      </ul>
    </div>
  );
}
