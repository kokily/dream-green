'use client';

import { useTilt } from '@/helpers/hooks/useTilt';
import { useEffect } from 'react';

export function Banner() {
  useTilt('.banner_content');

  useEffect(() => {
    const img = new Image();
    img.src = '/img/banner.jpg';
  }, []);

  return (
    <section
      className="banner_section background_bg"
      data-img-src="/img/banner.jpg"
      style={{
        background: 'url(/img/banner.jpg) center center / cover',
        height: '400px',
      }}
    >
      <div className="banner_slide_content bc_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-9 col-10 text-center">
              <div
                className="banner_content border_shape text_white"
              >
                <h2
                  className="animation animated fadeInDown"
                  data-animation="fadeInDown"
                  data-animation-delay="0.5s"
                  style={{
                    animationDelay: '0.5s',
                    opacity: '1',
                  }}
                >
                  꿈에그린환경
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
