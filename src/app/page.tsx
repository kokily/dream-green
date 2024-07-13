import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.main}>
      <div>
        <Image
          src="/under-construction.jpg"
          width={500}
          height={450}
          alt="홈페이지 공사 중"
        />
      </div>
      <h3>곧 오픈할 예정입니다</h3>
      <h2>(주)꿈에그린환경</h2>
    </div>
  );
}
