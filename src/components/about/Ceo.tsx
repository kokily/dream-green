import Image from 'next/image';

export function Ceo() {
  return (
    <section className="overflow_hide">
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
                미국 제35대 대통령 존 F.케네디는 이런 명언을 남겼습니다.
              </p>
              <blockquote style={{ wordBreak: 'keep-all' }}>
                국가가 나를 위해서 무엇을 해줄 것을 바라기에 앞서 내가 국가를
                위해 무엇을 할 것인가를 생각해야 한다.
              </blockquote>
              <p style={{ wordBreak: 'keep-all' }}>
                (주)꿈에그린환경은 고객의 고민을 파악하고 고객 니즈에 맞춘
                서비스를 제공하여 고객이 만족하고 신뢰할 수 있는 기업으로
                거듭나겠습니다.
              </p>
              <p style={{ wordBreak: 'keep-all' }}>감사합니다.</p>
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
                src="/img/CEO.png"
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
