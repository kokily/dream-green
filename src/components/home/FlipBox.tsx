interface Props {
  title: string;
  body: string;
}

function Flip({ title, body }: Props) {
  return (
    <div className="col-md-4 mb-md-0 mb-3 ">
      <div className="flip_box text_white">
        <div
          className="front background_bg overlay_bg3"
          data-img-src="/img/300x200.png"
        >
          <div className="inner">
            <h5>{title}</h5>
            <p>{body}</p>
          </div>
        </div>
        <div className="back bg_blue">
          <div className="inner">
            <h5>{title}</h5>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlipBox() {
  return (
    <section className="small_pb pt-0">
      <div className="container">
        <div className="row mb-4">
          <Flip title="1번" body="폐기물 수거 의뢰" />
          <Flip title="2번" body="차량 배차" />
          <Flip title="3번" body="폐기물 수거" />
        </div>
        <div className="row">
          <Flip title="4번" body="폐기물 계근" />
          <Flip title="5번" body="폐기물 하차" />
          <Flip title="6번" body="올바로 시스템 입력" />
        </div>
      </div>
    </section>
  );
}
