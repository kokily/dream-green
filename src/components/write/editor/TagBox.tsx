import type { ChangeEvent } from 'react';
import styles from './TagBox.module.scss';
import { TagsList } from './EditorTags';

interface Props {
  input: string;
  localTags: Array<string>;
  onRemoveTag: (tag: string) => void;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  onSetTags: (e: ChangeEvent<HTMLFormElement>) => void;
}

export function TagBox(props: Props) {
  return (
    <div className={styles.tag_box_container}>
      <p>태그 👉</p>

      <form onSubmit={props.onSetTags} className={styles.tag_box_form}>
        <input
          placeholder="엔터로 입력"
          value={props.input}
          onChange={props.onChangeText}
        />
        <button type="submit" className={styles.tag_box_button}>
          추가
        </button>
      </form>

      <TagsList tags={props.localTags} onRemove={props.onRemoveTag} />
    </div>
  );
}
