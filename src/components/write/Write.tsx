import { EditorWrapper } from './editor/EditorWrapper';
import { WriteTitle } from './WriteTitle';

interface Props {
  id?: string;
}

export function Write({ id }: Props) {
  return (
    <>
      <WriteTitle />
      <EditorWrapper id={id} />
    </>
  );
}
