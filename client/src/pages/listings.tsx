import React from "react";
import { useEffect, useState} from "react";
import { useRouter } from "next/router";

export default function Listings() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  useEffect(() =>{
    async function checkUser(){
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check_user`, {credentials: 'include'})
      const userCheck = await res.json()
      if(userCheck.logged_in){
        setIsLoggedIn(true)
      } else{
        console.log(userCheck)
        router.push('/')
      }
    }
    checkUser()

  },[])
  
  return <div><h1>Listings</h1></div>;
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