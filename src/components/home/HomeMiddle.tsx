export function HomeMiddle() {
  return (
    <section
      className="scene"
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 col-sm-12 animation animated fadeInUp"
            data-animation="fadeInUp"
            data-animation-delay="0.1s"
            style={{
              animationDelay: '0.1s',
              opacity: '1',
            }}
          >
            <div className="heading_s3">
              <h2>(주)꿈에그린환경은</h2>
            </div>
            <p>
              책임감 강하고 성실한 30대 인원으로 구성되어 신속한 폐기물 처리가
              가능하며 합리적인 수거 및 처리비용을 약속드립니다
            </p>
            <p>사업장 폐기물 처리, 생활 폐기물 처리, 건축 폐기물 처리 등</p>
            <a
              href="/money"
              className="btn btn-default rounded-0 mt-md-3 font-weight-bold"
            >
              비용 안내
            </a>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 animation animated fadeInUp"
            data-animation="fadeInUp"
            data-animation-delay="0.2s"
            style={{
              animationDelay: '0.2s',
              opacity: '1',
            }}
          >
            <div className="fancy_style3 mt-4 mt-lg-0">
              <img
                src="/img/home_icon_title.png"
                alt="about_img"
                className="border border-top-0 border-left-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shape_wrap">
        <div
          className="shape1 layer"
          data-depth="0.3"
          style={{
            transform: 'translate3d(-18.9045px, 6.2612px, 0px)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            display: 'block',
          }}
        >
          <div
            className="animation animated slideInUp"
            data-animation="slideInUp"
            data-animation-delay="0.2s"
            style={{
              animationDelay: '0.2s',
              opacity: '1',
            }}
          >
            <img
              data-parallax='{"x": 50, "smoothness": 20}'
              src="/img/home_icon1.png"
              alt="shape1"
              style={{
                transform:
                  'translate3d(25.019px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                WebkitTransform:
                  'translate3d(25.019px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
              }}
            />
          </div>
        </div>
        <div
          className="shape2 layer"
          data-depth="0.4"
          style={{
            transform: 'translate3d(-25.206px, 8.34827px, 0px)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            display: 'block',
          }}
        >
          <div
            className="animation animated slideInLeft"
            data-animation="slideInLeft"
            data-animation-delay="0.2s"
            style={{
              animationDelay: '0.2s',
              opacity: '1',
            }}
          >
            <img
              data-parallax='{"x": 50, "smoothness": 20}'
              src="/img/home_icon2.png"
              alt="shape2"
              style={{
                transform:
                  'translate3d(21.008px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                WebkitTransform:
                  'translate3d(21.008px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
              }}
            />
          </div>
        </div>
        <div
          className="shape3 layer"
          data-depth="-0.2"
          style={{
            transform: 'translate3d(12.603px, -4.17413px, 0px)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            display: 'block',
          }}
        >
          <div
            className="animation animated slideInLeft"
            data-animation="slideInLeft"
            data-animation-delay="0.2s"
            style={{
              animationDelay: '0.2s',
              opacity: '1',
            }}
          >
            <img
              data-parallax='{"x": 50, "smoothness": 20}'
              src="/img/home_icon3.png"
              alt="shape3"
              style={{
                transform:
                  'translate3d(40.479px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                WebkitTransform:
                  'translate3d(40.479px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
              }}
            />
          </div>
        </div>
        <div
          className="shape4 layer"
          data-depth="-0.2"
          style={{
            transform: 'translate3d(12.603px, -4.17413px, 0px)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            display: 'block',
          }}
        >
          <div
            className="animation animated slideInUp"
            data-animation="slideInUp"
            data-animation-delay="0.2s"
            style={{
              animationDelay: '0.2s',
              opacity: '1',
            }}
          >
            <img
              data-parallax='{"x": 50, "smoothness": 20}'
              src="/img/home_icon4.png"
              alt="shape4"
              style={{
                transform:
                  'translate3d(40.479px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                WebkitTransform:
                  'translate3d(40.479px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
