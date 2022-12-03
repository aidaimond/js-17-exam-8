import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  description: string;
  author: string;
}

const QuoteCard: React.FC<Props> = (props) => {
  return (
    <div className="m-2 border border-2 rounded p-4">
      <p className="card-text text-opacity-25">{props.description}</p>
      <h5 className="card-title my-4">{props.author}</h5>
      {props.children}
    </div>
  );
};

export default QuoteCard;