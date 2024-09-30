import type { SyntheticEvent } from 'react';
import styles from './EditorFooter.module.scss';

interface Props {
  edit: boolean;
  onBack: () => void;
  onSubmit: (e: SyntheticEvent) => void;
}

export function EditorFooter({ edit, onBack, onSubmit }: Props) {
  return (
    <div className={styles.editor_footer_container}>
      <button className="btn btn-outline-danger btn-horiz2" onClick={onBack}>
        뒤로가기
      </button>
      <button className="btn btn-outline-primary btn-horiz2" onClick={onSubmit}>
        {edit ? '저장하기' : '등록하기'}
      </button>
    </div>
  );
}
