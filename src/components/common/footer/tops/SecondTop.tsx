export function SecondTop() {
  return (
    <div
      className="col-lg-2 col-md-6 mb-4 mb-lg-0 animation"
      data-animation="fadeInUp"
      data-animation-delay="0.3s"
    >
      <h6 className="widget_title">메뉴 바로가기</h6>
      <ul className="list_none widget_links">
        <li>
          <a href="/about">소개글</a>
        </li>
        <li>
          <a href="/works">업무소개</a>
        </li>
        <li>
          <a href="/money">비용안내</a>
        </li>
        <li>
          <a href="/question">견적문의</a>
        </li>
        <li>
          <a href="/blog">블로그</a>
        </li>
      </ul>
    </div>
  );
}
