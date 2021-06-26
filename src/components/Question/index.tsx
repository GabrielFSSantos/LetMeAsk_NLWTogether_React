import { ReactNode } from 'react';
import cx from 'classnames';

import './styles.scss'

type QuestionProps = {
  key: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
}

export function Question({content, author, children, isAnswered = false, isHighlighted = false }: QuestionProps) {
  return (
    <div className={cx('question', {answered: isAnswered}, {highlighted: isHighlighted && !isAnswered})}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}