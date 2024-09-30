import styles from './ThumbnailBox.module.scss';

interface Props {
  thumbnail: string;
  onUploadThumbnail: () => void;
}

export function ThumbnailBox({ thumbnail, onUploadThumbnail }: Props) {
  return (
    <div className={styles.thumbnail_container}>
      {thumbnail ? (
        <img className={styles.thumbnail_image} src={thumbnail} alt="썸네일" />
      ) : (
        <button className={styles.thumbnail_button} onClick={onUploadThumbnail}>
          썸네일 업로드
        </button>
      )}
    </div>
  );
}
