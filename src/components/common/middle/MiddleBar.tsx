export function MiddleBar() {
  return (
    <section
      className="cta_section_small background_bg position-relative fixed_bg"
      style={{
        backgroundColor: '#e3e3e2',
      }}
    >
      <div className="container">
        <div
          className="row align-items-center animation animated fadeInUp"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
          style={{ animationDelay: '0.2s', opacity: '1' }}
        >
          <div className="col-md-8 text-default">
            <h2 className="">고객 니즈에 맞춘 서비스</h2>
            <p className="mb-md-0">고객이 만족하고 신뢰할 수 있는 기업</p>
          </div>
          <div className="col-md-4 text-md-right">
            <img src="/img/logo01.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
