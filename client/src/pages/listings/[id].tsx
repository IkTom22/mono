import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';

function ListingPage(props: any) {
  console.log('Is this the props we need ...? ', props);
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>{props.listing.name}</h1>
      <Dialog>
        <DialogTrigger>Add to favourite</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
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
