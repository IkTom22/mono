import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';

function ListingPage(props: any) {
  console.log(props);
  const router = useRouter();
  console.log(router.query);
  return <div>[id]</div>;
}

export default ListingPage;

export const getStaticPaths = (async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`);
  if (res.ok) {
    const listings = await res.json();
    return {
      paths: listings.map((list: any) => {
        return {
          params: {
            id: list.id.toString(),
          },
        };
      }),
      fallback: false, // false or "blocking"
    };
  } else {
    return {
      paths: [],
      fallback: false, // false or "blocking"
    };
  }
}) satisfies GetStaticPaths;

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`);
  if (res.ok) {
    const listing = await res.json();
    return {
      props: {
        listing,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
