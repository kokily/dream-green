import Image from 'next/image';

export default function HomePage() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <Image
            src="/under-construction.jpg"
            width={500}
            height={450}
            alt="홈페이지 공사 중"
          />
        </div>
        <div className="text-center mt-4">
          <h3>곧 오픈할 예정입니다</h3>
          <h2>(주)꿈에그린환경</h2>
        </div>
      </div>
    </section>
  );
}
