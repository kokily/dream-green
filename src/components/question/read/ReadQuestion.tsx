import { useReadQuestion } from '@/helpers/hooks/useReadQuestion';
import { ReadQuestionTitle } from './ReadQuestionTitle';
import { formatDate } from '@/helpers/client/utils';
import { Markdown } from '@/components/common/Markdown';

interface Props {
  id: string;
}

export function ReadQuestion({ id }: Props) {
  const { question, body, onChange, onAddReply, isAdmin } = useReadQuestion({
    id,
  });

  return (
    <>
      {question ? (
        <>
          <ReadQuestionTitle username={question.username} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="single_post">
                  <div className="blog_content bg-white">
                    <div className="blog_text">
                      <h2>{question.title}</h2>
                      <ul className="list_none blog_meta">
                        <li>
                          <i className="ion-calendar"></i>{' '}
                          {formatDate(question.createdAt.toString())} 작성
                        </li>
                        <li
                          className={
                            question.reply === ''
                              ? 'text-danger'
                              : 'text-primary'
                          }
                        >
                          <i className="ion-chatboxes"></i>{' '}
                          {question.reply === '' ? '미답변' : '답변완료'}
                        </li>
                      </ul>

                      <Markdown markdown={question.body} />
                    </div>
                  </div>
                </div>

                {/* 댓글 있을 경우 */}
                {question.reply === '' ? (
                  isAdmin ? (
                    <div className="comment-area border-top">
                      <div className="comment-title mb-2 mb-sm-4">
                        <h5>답변 글을 작성하세요</h5>
                      </div>
                      <form className="field_form" name="enq" method="post">
                        <div className="row">
                          <div className="form-group col-md-12">
                            <textarea
                              rows={5}
                              name="body"
                              value={body}
                              onChange={onChange}
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <button
                              className="btn btn-outline-default btn-horiz2"
                              onClick={onAddReply}
                            >
                              답변달기
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  ) : null
                ) : (
                  <div className="card mt-3 mt-md-5">
                    <div className="card-body">
                      <div className="author_info">
                        <a className="mb-1 d-inline-block">관리자 답변</a>
                        <Markdown markdown={question.reply} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
