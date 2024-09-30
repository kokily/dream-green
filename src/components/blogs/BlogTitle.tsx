export function BlogTitle() {
  return (
    <section
      className="page-title-light breadcrumb_section background_bg"
      data-img-src="/img/posts.webp"
      style={{
        background: 'url("/img/posts.webp") center center / cover',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="page-title">
              <h1>블로그 리스트</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
