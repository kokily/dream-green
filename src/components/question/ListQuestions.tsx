import { formatDate } from '@/helpers/client/utils';
import type { Question } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  questions: Array<Question>;
  search: string;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: SyntheticEvent) => void;
  onReadQuestion: (id: string) => void;
  setTarget: TargetType;
}

export function ListQuestions({
  questions,
  search,
  onChangeSearch,
  onSearch,
  onReadQuestion,
  setTarget,
}: Props) {
  return (
    <section>
      <div className="container">
        <div className="row mb-md-5 mb-3">
          <div className="col-md-12">
            <div className="heading_s3">
              <h5 className="mb-4">문의글을 남겨주세요</h5>
              <a
                className="btn-sm btn-outline-default btn-horiz2 text-bold"
                href="/question/write"
              >
                견적 문의
              </a>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">날짜</th>
                  <th scope="col">제목</th>
                  <th scope="col">작성자</th>
                  <th scope="col">답글여부</th>
                </tr>
              </thead>
              <tbody>
                {questions && questions.length > 0
                  ? questions.map((question) => (
                      <tr
                        key={question.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => onReadQuestion(question.id)}
                      >
                        <td>{formatDate(question.createdAt.toString())}</td>
                        <td>{question.title}</td>
                        <td>{question.username}</td>
                        <td>{question.reply === '' ? 'X' : 'O'}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
