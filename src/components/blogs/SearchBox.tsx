import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

interface Props {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: SyntheticEvent) => void;
}

export function SearchBox({ search, onChange, onSearch }: Props) {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return (
    <div className="newsletter_form ml-0 mt-md-4">
      <div className="radius_input input_border2">
        <input
          type="text"
          placeholder="제목 검색"
          style={{ width: '320px' }}
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <button
        className="btn-sm btn-outline-default btn-horiz2 text-bold"
        onClick={onSearch}
      >
        검 색
      </button>
    </div>
  );
}
