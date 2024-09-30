import { memo } from 'react';
import styles from './EditorTags.module.scss';

// Tag
const Tag = memo(
  ({ tag, onRemove }: { tag: string; onRemove: (id: string) => void }) => (
    <div className={styles.tag_container} onClick={() => onRemove(tag)}>
      #{tag}
    </div>
  ),
);

Tag.displayName = 'Tag';

// Tags
export const TagsList = memo(
  ({
    tags,
    onRemove,
  }: {
    tags: Array<string>;
    onRemove: (id: string) => void;
  }) => (
    <div className={styles.tags_list_container}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </div>
  ),
);

TagsList.displayName = 'TagsList';
