import React from 'react';
import {Category} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  categories: Category[];
  onClick: (id: string) => void;
}

const NavLinks: React.FC<Props> = ({categories, onClick}) => {
  return (
    <div className="list-group list-group-numbered">
      <Link to={'/quotes/'} className="list-group-item" onClick={() => onClick('')}>
        All
      </Link>
      {categories.map(category => (
        <Link onClick={() => onClick(category.id)} key={category.id} to={'/quotes/' + category.id}
              className="list-group-item">
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;