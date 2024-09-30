import { PrivacyFirst } from './privacy/PrivacyFirst';
import { PrivacySecond } from './privacy/PrivacySecond';
import { PrivacyThird } from './privacy/PrivacyThird';
import { PrivacyForth } from './privacy/PrivacyForth';
import { PrivacyFifth } from './privacy/PrivacyFifth';
import { PrivacySixth } from './privacy/PrivacySixth';
import { PrivacySeventh } from './privacy/PrivacySeventh';
import { PrivacyEighth } from './privacy/PrivacyEighth';
import { PrivacyNinth } from './privacy/PrivacyNinth';
import { PrivacyTenth } from './privacy/PrivacyTenth';

export function PrivacyBody() {
  return (
    <>
      <h6 className="text-dark">
        <b className="text-primary">(주)꿈에그린환경</b>은{' '}
        <b className="text-success">개인정보보호법 제30조</b>에 따라 정보주체의
        개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
        있도록 다음과 같이 개인정보 처리방침을 수립 및 공개합니다.
      </h6>

      <PrivacyFirst />
      <PrivacySecond />
      <PrivacyThird />
      <PrivacyForth />
      <PrivacyFifth />
      <PrivacySixth />
      <PrivacySeventh />
      <PrivacyEighth />
      <PrivacyNinth />
      <PrivacyTenth />
    </>
  );
}
