import React from 'react';
import { Listing } from '@/types/listing';

interface ListCardProps {
  list: Listing;
}
function ListCard({ list }: ListCardProps) {
  console.log(list);
  return (
    <div>
      <div className="w-1/2">
        <h2>{list.name}</h2>
        <p>{list.bio}</p>
        <div>location</div>
      </div>
      <div className="w-1/2">
        <h4> {list.name}</h4>
        <div>{list.description}</div>
      </div>
    </div>
  );
}

export default ListCard;
