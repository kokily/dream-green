import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { DragDrop } from '../../common/DragDrop';
import styles from './EditorBody.module.scss';
import 'react-quill/dist/quill.snow.css';
import { client } from '@/helpers/client/client';
import { toast } from 'react-toastify';

interface Props {
  body: string;
  onChangeBody: (text: string) => void;
}

export function EditorBody({ body, onChangeBody }: Props) {
  const quillRef = useRef(null);

  // Image Upload Function
  const imageUpload = async (formData: FormData) => {
    const response = await client.post<{ url: string }>('/image', formData);

    if (!response.data) {
      toast.error('Upload Failed');
      return;
    }

    const { url } = response.data;
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();

    editor.insertEmbed(
      range.index,
      'image',
      `https://dream-green.co.kr/${url}`,
    );
    editor.setSelection(range.index + 1);
  };

  // Quill Editor Image Handler
  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('file', file);

      try {
        await imageUpload(formData);
      } catch (err: any) {
        toast.error(err);
      }
    });
  };

  // Image Drag & Drop
  const imageDragDrop = async (file: File) => {
    const formData = new FormData();

    formData.append('file', file);

    try {
      await imageUpload(formData);
    } catch (err: any) {
      toast.error(err);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ['link', 'image', 'video', 'formula'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
        ImageDrop: true,
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

  return (
    <>
      <div className={styles.editor_container}>
        <ReactQuill
          ref={quillRef}
          value={body}
          onChange={onChangeBody}
          placeholder="본문을 작성하세요"
          theme="snow"
          modules={modules}
        />
      </div>

      <DragDrop onDragDropUpload={imageDragDrop} />
    </>
  );
}
