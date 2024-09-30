import dynamic from 'next/dynamic';
import styles from './EditorWrapper.module.scss';
import { useAddQuestion } from '@/helpers/hooks/useAddQuestion';
import { EditorBody } from './EditorBody';
import { EditorFooter } from './EditorFooter';
import { EditorInfo } from './EditorInfo';

const EditorTitle = dynamic(
  () => import('./EditorTitle').then((module) => module.EditorTitle),
  {
    ssr: false,
  },
);

export function EditorWrapper() {
  const {
    username,
    password,
    title,
    body,
    onBack,
    onChangeUsername,
    onChangePassword,
    onChangeTitle,
    onChangeBody,
    onAddQuestion,
  } = useAddQuestion();

  return (
    <div className={styles.container}>
      <EditorTitle
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={onChangeTitle}
      />

      <EditorInfo
        username={username}
        password={password}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
      />

      <EditorBody body={body} onChangeBody={onChangeBody} />

      <EditorFooter onBack={onBack} onSubmit={onAddQuestion} />
    </div>
  );
}
