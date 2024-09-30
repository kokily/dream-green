import type { SyntheticEvent } from 'react';
import { Modal } from '../common/Modal';

interface Props {
  modal: boolean;
  onRemoveClick: () => void;
  onConfirm: (e: SyntheticEvent) => void;
  onCancel: () => void;
  onUpdate: () => void;
}

export function AdminButtons({
  modal,
  onRemoveClick,
  onConfirm,
  onCancel,
  onUpdate,
}: Props) {
  return (
    <div className="py-4 blog_post_footer">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8 mb-3 mb-md-0">
          <div className="tags">
            <button
              className="btn btn-outline-danger btn-horiz2"
              onClick={onRemoveClick}
            >
              삭 제
            </button>
            <button
              className="btn btn-outline-warning btn-horiz2"
              onClick={onUpdate}
            >
              수 정
            </button>

            <Modal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
          </div>
        </div>
      </div>
    </div>
  );
}
