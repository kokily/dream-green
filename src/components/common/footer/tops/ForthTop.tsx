'use client';

import { useRecentImages } from '@/helpers/hooks/useRecentImages';

export function ForthTop() {
  const { data } = useRecentImages();

  const Frame = ({ id, title, image }: Picture) => (
    <li>
      <a href={`/blog/read/${id}`} style={{ position: 'relative' }}>
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="p-1 shadow"
          style={{
            border: '1px solid white',
            borderRadius: '4px',
          }}
        />
        <span className="insta_counter">
          <span>{title}</span>
        </span>
      </a>
    </li>
  );

  return (
    <div
      className="col-lg-3 col-md-6 animation"
      data-animation="fadeInUp"
      data-animation-delay="0.5s"
    >
      <h6 className="widget_title">최근 블로그 이미지</h6>
      <ul className="list_none instafeed">
        {data &&
          data.length > 0 &&
          data.map((picture) => (
            <Frame
              key={picture.id}
              id={picture.id}
              title={picture.title}
              image={picture.image}
            />
          ))}
      </ul>
    </div>
  );
}
