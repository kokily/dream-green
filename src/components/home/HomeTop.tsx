export function HomeTop() {
  return (
    <section
      className="banner_section background_bg full_screen fixed_bg overlay_bg"
      data-img-src="/img/home.jpg"
      style={{
        background: 'url("/img/home.jpg") center center / cover',
      }}
    >
      <div className="banner_slide_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12 col-sm-12 text-center">
              <div className="banner_content text_white">
                <h2
                  className="animation text-uppercase animated fadeInUp"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                  style={{ animationDelay: '0.2s', opacity: '1' }}
                >
                  폐기물 처리 No.1
                </h2>
                <h3
                  className="animation my-4 animated fadeInUp heading_s2"
                  data-animation="fadeInUp"
                  data-animation-delay="0.7s"
                  style={{ animationDelay: '0.7s', opacity: '1' }}
                >
                  (주)꿈에그린환경
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
