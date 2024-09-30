import type { ChangeEvent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './EditorTitle.module.scss';

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function EditorTitle({ placeholder, value, onChange }: Props) {
  return (
    <TextareaAutosize
      className={styles.title_container}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
