export function Banner() {
  return (
    <section
      className="banner_section background_bg"
      data-img-src="/img/banner.jpg"
      style={{
        background: 'url(/img/banner.jpg) center center / cover',
        height: '400px',
      }}
    >
      <div className="banner_slide_content bc_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-9 col-10 text-center">
              <div
                className="banner_content border_shape text_white"
                data-tilt=""
                data-tilt-speed="400"
                data-tilt-perspective="500"
                style={{
                  willChange: 'transform',
                  transform:
                    'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                }}
              >
                <h2
                  className="animation animated fadeInDown"
                  data-animation="fadeInDown"
                  data-animation-delay="1s"
                  style={{
                    animationDelay: '1s',
                    opacity: '1',
                  }}
                >
                  꿈에그린환경
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
