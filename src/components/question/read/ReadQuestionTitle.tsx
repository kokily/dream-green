interface Props {
  username: string;
}

export function ReadQuestionTitle({ username }: Props) {
  return (
    <section
      className="background_bg breadcrumb_section overlay_bg2 page-title-light"
      data-img-src="/img/estimate.webp"
      style={{
        background: 'url("/img/estimate.webp") center center / cover',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="page-title">
              <h1>{username} 님의 문의 글</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
