import styles from './EditorWrapper.module.scss';
import { useAddPost } from '@/helpers/hooks/useAddPost';
import { TagBox } from './TagBox';
import { useTags } from '@/helpers/hooks/useTags';
import { ThumbnailBox } from './ThumbnailBox';
import { EditorFooter } from './EditorFooter';
import { EditorBody } from './EditorBody';
import dynamic from 'next/dynamic';

const EditorTitle = dynamic(
  () => import('./EditorTitle').then((module) => module.EditorTitle),
  {
    ssr: false,
  },
);

interface Props {
  id?: string;
}

export function EditorWrapper({ id }: Props) {
  const {
    title,
    body,
    thumbnail,
    tags,
    onBack,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    onUploadThumbnail,
    onAddPost,
  } = useAddPost({ id });
  const { input, localTags, onRemoveTag, onChangeText, onSetTags } = useTags({
    tags,
    onChangeTags,
  });

  return (
    <div className={styles.container}>
      <EditorTitle
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <TagBox
        input={input}
        localTags={localTags}
        onRemoveTag={onRemoveTag}
        onChangeText={onChangeText}
        onSetTags={onSetTags}
      />
      <ThumbnailBox
        thumbnail={thumbnail}
        onUploadThumbnail={onUploadThumbnail}
      />

      <EditorBody body={body} onChangeBody={onChangeBody} />

      <EditorFooter edit={!!id} onBack={onBack} onSubmit={onAddPost} />
    </div>
  );
}
