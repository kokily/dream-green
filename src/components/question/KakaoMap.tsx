import type { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { StaticMap } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/helpers/hooks/useKakaoLoader';

export function KakaoMap() {
  const router = useRouter();

  useKakaoLoader();

  const lat = 37.158855;
  const lng = 126.87391;

  return (
    <section className="small_pt">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12">
            <div
              className="animation animated fadeInUp"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
              style={{
                animationDelay: '0.2s',
                opacity: '1',
              }}
            >
              <StaticMap
                id="map"
                center={{ lat, lng }}
                style={{
                  width: '100%',
                  height: '350px',
                }}
                level={4}
                marker={[
                  {
                    position: {
                      lat,
                      lng,
                    },
                    text: '(주)꿈에그린환경',
                  },
                ]}
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                  router.push(
                    `https://map.kakao.com/link/to/꿈에그린환경,${lat},${lng}`,
                  );
                }}
              ></StaticMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
