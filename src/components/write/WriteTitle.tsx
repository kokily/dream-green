export function WriteTitle() {
  return (
    <section
      className="page-title-light breadcrumb_section background_bg blue_overlay_bg"
      data-img-src="/img/write.webp"
      style={{
        background:
          'url("/img/write.webp") center center / cover',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="page-title">
              <h1>블로그 에디터</h1>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#!">관리자만 사용 가능합니다</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
