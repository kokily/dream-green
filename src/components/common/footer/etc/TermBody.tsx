import { TermFirst } from './term/TermFirst';
import { TermSecond } from './term/TermSecond';
import { TermThird } from './term/TermThird';
import { TermEtc } from './term/TermEtc';

export function TermBody() {
  return (
    <>
      <h6 className="text-dark">
        안녕하세요. 폐기물 수거 및 관리 정식등록 업체{' '}
        <b className="text-primary">(주)꿈에그린환경 입니다.</b>
      </h6>
      <b className="text-success">(주)꿈에그린환경 이용약관(이하 이 약관)</b>
      은 (주)꿈에그린환경 서비스 이용과 관련한 회사와 고객 간의 권리와 의무에
      대한 내용을 담고 있습니다. 다만 회사는 다양한 서비스를 제공하는 과정에서
      이 약관 이외 개별 야관 또는 정책 등을 적용할 수 있습니다. 회사는 고객의
      권리를 보호하기 위하여 위와 같은 내용을 쉽게 알 수 있도록 작성하여 명확히
      표시하고 있습니다.
      <br />
      (주)꿈에그린환경 서비스 이용 전 꼭 확인해 주시기 바랍니다.
      <TermFirst />
      <TermSecond />
      <TermThird />
      <TermEtc />
      <hr />
      <p className="text-dark mb-1">
        (주)꿈에그린환경 서비스와 관련하여 궁금하신 사항이 있으시면
        회사(031-831-8852)로 문의 주시기 바랍니다.
      </p>
    </>
  );
}
