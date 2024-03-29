import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ price, name, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `URL(${imageUrl})` }} />
    <div className="collection-footer">
      <span className={name}>{name}</span>
      <span className={price}>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
