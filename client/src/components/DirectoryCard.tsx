import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Listing } from '@/types/listing';

// @ts-ignore
export default function DirectoryCard({ data }: { data: Listing }) {
  const { description, name } = data;
  return (
    <div className="flex flex-col p-[18px] gap-8 w-[380px] border-grey hover:border-main-blue border-2 card">
      <div className="flex gap-4 items-center">
        {/* <Image 
            src={img} 
            alt={`${name} image`} 
            height={90} 
            width={90}
        /> */}
        {/* <Link
          href={url}
          target="_blank"
          className="text-[22px] text-main-blue card_link"
        >
          {name}
        </Link> */}
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p>{description}</p>
        </div>
        <div>
          <h4 className="font-bold leading-5">Industry category:</h4>
          {/* <p className="leading-6">{category}</p> */}
        </div>
        <div>
          <h4 className="font-bold leading-5">Products & Services:</h4>
          {/* <p className="leading-6">{services}</p> */}
        </div>
        <div>
          <h4 className="font-bold leading-5">Impact area:</h4>
          {/* <p className="leading-6">{impact_area}</p> */}
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold leading-5">Service areas:</h4>
        {/* <p className="leading-6">{service_area}</p> */}
      </div>
    </div>
  );
}
