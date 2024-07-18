export function TermBody() {
  const First = (
    <>
      <p className="lead text-dark mt-4 mb-1">
        <strong>제1장 총칙</strong>
      </p>
      <p className="text-dark mb-1">✅ 제1조 [목적]</p>
      <p className="text-dark">
        &nbsp;&nbsp;본 약관은 (주)꿈에그린환경(이하 '회사')가 이용고객(이하
        '회원') 간에 회사가 제공하는 서비스의 조건 및 이용관련 권리·의무 및
        책임사항 등을 규정함을 목적으로 합니다.
      </p>
      <p className="text-dark mb-1">✅ 제2조 [정의]</p>
      <p className="text-dark">
        &nbsp;&nbsp;① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
        <br />
        &nbsp;&nbsp;&nbsp;1. "이용자"라 함은 "회사"의 웹사이트에 접속하여 본
        약관에 따라 "회사"가 제공하는 "서비스"를 이용하는 "회원"을 말한다.
        <br />
        작성 중...
      </p>
    </>
  );

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
      {First}
    </>
  );
}
