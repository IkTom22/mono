import React from 'react';
import Image from 'next/image';
import { Listing } from '@/types/listing';

interface ListCardProps {
  list: Listing;
}
function ListCard({ list }: ListCardProps) {
  console.log(list);
  const { service_areas, description, bio, name, img } = list;
  const header = service_areas
    .map((area) => area.name)
    .toString()
    .replace(',', ', ');
  return (
    <div className="bg-gray-300 flex p-16">
      <div className="w-1/2 mr-8">
        <h2>{header}</h2>
        <p>{bio}</p>
        <div>location</div>
      </div>
      <div className="w-1/2 ml-8 p-8 bg-white">
        <Image
          src={img}
          width={50}
          height={50}
          alt={`Logo of the author ${name}`}
        />
        <h4> {name}</h4>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default ListCard;
