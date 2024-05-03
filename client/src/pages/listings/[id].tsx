import React, { useEffect, useState } from 'react';
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
  const [favouriteLists, setFavouriteLists] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('Is this the props we need ...? ', props);
  const router = useRouter();
  console.log(router.query);
  useEffect(() => {
    async function checkUser() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check_user`, {
        credentials: 'include',
      });
      const userCheck = await res.json();
      if (userCheck.logged_in) {
        setIsLoggedIn(true);
      } else {
        console.log(userCheck);
        router.push('/');
      }
    }
    checkUser();
  }, []);
  useEffect(() => {
    async function getFavouriteLists() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/favourite_lists`,
        {
          credentials: 'include',
        },
      );
      const fetchedFavouriteLists = await res.json();
      console.log('give me the listing', fetchedFavouriteLists);
      setFavouriteLists(fetchedFavouriteLists);
    }
    if (isLoggedIn) {
      getFavouriteLists();
    }
  }, [isLoggedIn]);

  // console.log(favouriteLists);
  return (
    <div>
      <h1>{props.listing.name}</h1>
      <Dialog>
        <DialogTrigger>Add to favourite</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to favourite</DialogTitle>
            <DialogDescription>
              Choose a list to save this listing to
            </DialogDescription>
          </DialogHeader>
          <div>
            {favouriteLists.map((list) => {
              return <button onClick={() => {}}>{list.name}</button>;
            })}
          </div>
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
