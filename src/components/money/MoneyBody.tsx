export function MoneyBody() {
  return (
    <section className="small_pb overflow_hide">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 mt-3 mt-md-0 animation animated fadeInRight"
            data-animation="fadeInRight"
            data-animation-delay="0.4s"
            style={{
              animationDelay: '0.4s',
              opacity: '1',
            }}
          >
            <div className="heading_s3">
              <h4>비용 안내</h4>
            </div>
            <div className="skill_content pr_style1">
              <div className="progrees_bar_text">
                <b>1톤 트럭</b>
              </div>
              <div className="progress">
                <div className="count_pr">
                  <span className="counter">15</span>만원~
                </div>
                <div
                  className="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '15%' }}
                />
              </div>
            </div>
            <div className="skill_content pr_style1">
              <div className="progrees_bar_text">
                <b>2.5톤 트럭</b>
              </div>
              <div className="progress">
                <div className="count_pr">
                  <span className="counter">35</span>만원~
                </div>
                <div
                  className="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow={35}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '35%' }}
                />
              </div>
            </div>
            <div className="skill_content pr_style1">
              <div className="progrees_bar_text">
                <b>5톤 집게차</b>
              </div>
              <div className="progress">
                <div className="count_pr">
                  <span className="counter">60</span>만원~
                </div>
                <div
                  className="progress-bar d-block"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '60%' }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animation animated fadeInLeft"
            data-animation="fadeInLeft"
            data-animation-delay="0.2s"
            style={{ animationDelay: '0.2s', opacity: '1' }}
          >
            <div className="heading_s3">
              <h4>특기사항</h4>
            </div>
            <p style={{ wordBreak: 'keep-all' }}>
              이 금액은 폐기물 성상에 따라 금액이 결정됩니다.
              <br />
              (단일 품목시 가격↓, 혼합 품목시 가격↑)
              <br />→ 상차 인력 및 장비 필요시 / 작업현장(층수, 엘리베이터 유무,
              차량진입조건)에 따라 비용이 산출되므로 방문 견적 후 정확한 비용
              안내가 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
