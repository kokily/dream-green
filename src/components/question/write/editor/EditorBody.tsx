import { useMemo, useRef } from 'react';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import { client } from '@/helpers/client/client';
import styles from './EditorBody.module.scss';
import { DragDrop } from '@/components/common/DragDrop';
import 'react-quill/dist/quill.snow.css';

interface Props {
  body: string;
  onChangeBody: (text: string) => void;
}

export function EditorBody({ body, onChangeBody }: Props) {
  const quillRef = useRef(null);

  // Image Upload
  const imageUpload = async (formData: FormData) => {
    const response = await client.post<{ url: string }>('/upload', formData);

    if (!response.data) {
      toast.error('업로드 에러! 관리자에게 문의하세요');
      return;
    }

    const { url } = response.data;
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();

    editor.insertEmbed(range.index, 'image', url);
    editor.setSelection(range.index + 1);
  };

  // Image Handler
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
        toast.error(err.error);
      }
    });
  };

  // Image Drag & Drop
  const imageDragDop = async (file: File) => {
    const formData = new FormData();

    formData.append('file', file);

    try {
      await imageUpload(formData);
    } catch (err: any) {
      toast.error(err.error);
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
          placeholder="내용을 이곳에 입력하시고 사진은 드래그해서 넣어주세요"
          theme="snow"
          modules={modules}
        />
      </div>

      <DragDrop onDragDropUpload={imageDragDop} />
    </>
  );
}
