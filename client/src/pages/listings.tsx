import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavbarListing from '../components/NavbarListing';

export default function Listings() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listings, setListings] = useState([]);
  const router = useRouter();
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
    async function getListings() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
        credentials: 'include',
      });
      const fetchedListings = await res.json();
      setListings(fetchedListings);
    }
    if (isLoggedIn) {
      getListings();
    }
  }, [isLoggedIn]);
  console.log(listings);
  return (
    <>
      <NavbarListing />
      <main className="w-full flex justify-center">
        <div className="w-[1200px]">
          {/* Location /Service Category and matched result section */}
          <div className="w-full flex gap-2 items-center text-xl">
            <button className="rounded-full px-4 py-2.5 border-solid border-2 border-[#BBBDBF] text-[#BBBDBF]">
              Location
            </button>
            <button className="rounded-full px-4 py-2.5 border-solid border-2 border-[#BBBDBF] text-[#BBBDBF]">
              Service Category
            </button>
            <span>159 matched from 159 services</span>
          </div>

          <div className="w-full p-16 flex ">
            <div className="w-1/2">
              <h2>Title</h2>
              <p>description</p>
              <div>location</div>
            </div>
            <div className="w-1/2">
              <h4> company's name</h4>
              <div>desscription</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// export async function getServerSideProps(){
//   if(isLoggedIn){

//     return {
//       props:{}
//     }
//   } else {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

// }
