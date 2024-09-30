import type { SyntheticEvent } from 'react';
import styles from './Modal.module.scss';

interface Props {
  visible: boolean;
  onConfirm: (e: SyntheticEvent) => void;
  onCancel: () => void;
}

export function Modal({ visible, onConfirm, onCancel }: Props) {
  if (!visible) return;

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
        <h2>삭제하기</h2>
        <p>지우시려면 확인을 클릭하세요</p>

        <div className="button-group">
          <button
            className="btn btn-outline-danger btn-horiz2"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="btn btn-outline-primary btn-horiz2"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
