interface Props {
  title: string;
  thumbnail: string;
  tags: Array<string>;
}

export function PostTitle({ title, thumbnail, tags }: Props) {
  return (
    <section
      className="page-title-light breadcrumb_section background_bg"
      data-img-src={thumbnail}
      style={{
        background: `url("${thumbnail}") center center / cover`,
        backdropFilter: 'blur(15px)',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="page-title">
              <h1>{title}</h1>
            </div>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="breadcrumb-item"
                    style={{ color: 'blue' }}
                  >
                    # {tag}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
