import Image from 'next/image';

export function Ceo() {
  return (
    <section className="overflow_hide light_gray_bg2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <div
              className="small_padding bg-dark text_white animation animated fadeInLeft"
              data-animation="fadeInLeft"
              data-animation-delay="0.1s"
              style={{ animationDelay: '0.1s', opacity: '1' }}
            >
              <div className="heading_s3 mb-3">
                <h3>(주)꿈에그린환경 대표이사 장무현</h3>
              </div>
              <p>(주)꿈에그린환경 홈페이지를 찾아주신 여러분 환영합니다.</p>
              <p style={{ wordBreak: 'keep-all' }}>
                21세기를 살아가는 지금, 우리는 보이지 않는 전쟁을 겪고 있습니다.
                <br />이 폐기물의 전쟁을 막을 수 있는 방법은 우리 모두 알고 있고
                누구나 할 수 있습니다.
              </p>
              <p style={{ wordBreak: 'keep-all' }}>
                폐기물은 그냥 버려지는 쓰레기가 아닌 또 다른 자원이라는 인식을
                가지고 재활용/처리함으로써 새로운 자원으로 재탄생될 수 있습니다.
                <br />
                (주)꿈에그린환경은 이 전쟁이 우리 후손에게 이어지지 않도록
                억제하고 올바로 잡아 재탄생 시키고 싶은 꿈이 있습니다.
              </p>
              <p style={{ wordBreak: 'keep-all' }}>
                저 또한 두 아이의 아빠로 우리 아이들이 좀 더 깨끗한 환경에서
                살아갈 수 있게 앞장 서겠습니다.
              </p>
              <p style={{ wordBreak: 'keep-all' }}>
                (주)꿈에그린환경은 책임감 강하고 성실한 30대 인원으로 구성되어
                있으며 합리적인 처리 비용과 신속한 폐기물 처리를 약속드립니다.
              </p>
            </div>
          </div>
          <div className="col-lg-6" style={{ zIndex: '55' }}>
            <div
              className="fancy_style2 animation animated fadeInRight relative"
              data-animation="fadeInRight"
              data-animation-delay="0.2s"
              style={{ animationDelay: '0.2s', opacity: '1' }}
            >
              <Image
                src="/img/ceo.png"
                alt="대표이사"
                priority
                width={700}
                height={600}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
