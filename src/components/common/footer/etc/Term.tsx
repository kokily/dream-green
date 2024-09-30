import { TermBody } from './TermBody';

export function Term() {
  return (
    <div
      className="modal fade"
      id="term"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="termTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark" id="termTitle">
              (주)꿈에그린환경 이용약관
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
            <TermBody />
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
