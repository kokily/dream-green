import type { ChangeEvent } from 'react';

interface Props {
  username: string;
  password: string;
  onChangeUsername: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function EditorInfo({
  username,
  password,
  onChangeUsername,
  onChangePassword,
}: Props) {
  return (
    <div className="row mt-4 mb-4">
      <div className="col-md-8">
        <div className="form-group col-lg-6 p-0">
          <input
            className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
            placeholder="성 명"
          />
        </div>
        <div className="form-group col-lg-6 p-0">
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호 (답글확인시 필요)"
          />
        </div>
      </div>
    </div>
  );
}
