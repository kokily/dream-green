export function WorkBody() {
  return (
    <section className="small_pb">
      <div className="container">
        <div
          className="row justify-content-center animation animated fadeInUp"
          data-animation="fadeInUp"
          data-animation-delay="0.2s"
          style={{ animationDelay: '0.2s', opacity: '1' }}
        >
          <div className="col-md-4 col-sm-6 mb-lg-5 mb-4 text-center">
            <div
              className="icon_box icon_box_style_5"
              style={{ height: '401px' }}
            >
              <div className="box_icon mb-3">
                <img src="/img/workplace-waste.webp" alt="service_img1" />
              </div>
              <div className="icon_box_content">
                <h5>사업장 폐기물 처리</h5>
                <p className="text-left" style={{ wordBreak: 'keep-all' }}>
                  학교, 빌딩, 대형마트, 장례식장, 사무실, 상가, 공장 등에서
                  발생되는 각종 폐기물 처리
                </p>
                <a href="#!" className="btn btn-sm btn-outline-black">
                  ♻︎ 주기적 발생 폐기물 지속관리
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-lg-5 mb-4 text-center">
            <div
              className="icon_box icon_box_style_5"
              style={{ height: '401px' }}
            >
              <div className="box_icon mb-3">
                <img src="/img/moving-waste.webp" alt="service_img2" />
              </div>
              <div className="icon_box_content">
                <h5>생활 폐기물 처리</h5>
                <p className="text-left" style={{ wordBreak: 'keep-all' }}>
                  이사 또는 유품 정리에 따른 폐기 물품(폐가구, 폐가전 등) 처리
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-lg-5 mb-4 text-center">
            <div
              className="icon_box icon_box_style_5"
              style={{ height: '401px' }}
            >
              <div className="box_icon mb-3">
                <img src="/img/construction-waste.webp" alt="service_img3" />
              </div>
              <div className="icon_box_content">
                <h5>건축 폐기물 처리</h5>
                <p className="text-left" style={{ wordBreak: 'keep-all' }}>
                  공사현장 및 인테리어 등에 발생되는 폐기물 처리
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
