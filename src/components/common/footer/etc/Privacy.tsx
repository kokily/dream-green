import { PrivacyBody } from './PrivacyBody';

export function Privacy() {
  return (
    <div
      className="modal fade"
      id="privacy"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="privacyTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark" id="privacyTitle">
              (주)꿈에그린환경 개인정보처리방침
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <PrivacyBody />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-black"
              data-dismiss="modal"
            >
              닫 기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
