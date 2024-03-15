import React, { Fragment } from 'react';
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Select from 'react-select'
import DirectoryCard from '@/components/DirectoryCard';
import { 
  dummyData, 
  dummyLocationList, 
  dummyIndustryCategoryList,
  dummyImpactAreaList 
} from '../../data/dummy';
import HeroImage from '../../public/HeroImage.png'
import Navbar from '@/components/Navbar';
import { Listing } from '@/types/listing';

const listingNum = dummyData.length

export default function Home() {
  console.log(listingNum)
  console.log('hello')
  const reminder = listingNum % 3
  const displayNum = Math.floor(listingNum/3)
  let firstCol = reminder !==0  ? displayNum + 1 : displayNum
  let secondCol = reminder ===2 ? displayNum +1: displayNum 
  let thirdCol = displayNum
  const [listingData, setListingData] = useState<Listing[]>([])
  console.log(firstCol, secondCol, thirdCol)
  useEffect(() =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`)
    .then((response) =>{
      if(response.ok){
        return response.json()
      }else {
        throw new Error("Unathorized")
      }
    })
    .then((data:Listing[]) =>setListingData(data))
    .catch(err =>console.error(err))
  },[])
 
  return (
    <>
    <Navbar/>
    <main className='w-screen '>
      {/* HERO */}
      <section className='w-full py-6 flex items-center justify-center bg-pale-pink'>
        <div className='w-desktop h-[438px] flex items-center justify-between py-7'>
          <div className='w-1/2 flex flex-col gap-4  py-7 pr-9 text-main-blue'>
            <h1 className='h-12'>The Impact Directory</h1>
            <p className='text-xl font-light '>Ākina’s Impact Directory is where you can find all of our certified Impact Suppliers. These organisations deliver a range of positive social, environmental, and culturaloutcomes through selling their products and services.</p>
            <button className='max-w-[340px] bg-main-blue uppercase px-4 pb-2  pt-3 font-light leading-6 text-white' >
              Learn more about our certification
            </button>
          </div>
          <div className=' relative w-1/2 h-[437px]'>
            <Image 
              src={HeroImage}
              alt="Akina hero image"
              style={{
                objectFit: "cover",
              }}
              fill
            />
          </div>
        </div>

      </section>
      {/* SEARCH SECTION */}
      <section className='w-screen bg-main-blue flex items-center justify-center py-6'>
        <div className='flex flex-col gap-4 w-desktop'>
          <input type="text" className='w-[100%] h-16 px-4 py-5'/>
          <div className='flex justify-between h-10'>
            <Select 
              options={dummyLocationList} 
              isMulti
              placeholder="Location..."
              className='w-[330px] rounded-none'
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
              })} />
              <Select 
                options={dummyImpactAreaList}
                isMulti 
                placeholder="Impact Area..."
                className='w-[330px] rounded-none'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })} />
              <Select 
                options={dummyIndustryCategoryList}
                isMulti 
                placeholder="Industry Category..."
                className='w-[330px] rounded-none'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })} />

            <div className='uppercase text-white border-2 border-white py-2 px-4'>
              Clear all filters
            </div>
          </div>
        </div>
      </section>
       {/* DIRECTORIES SECTION */} 
      <section className='w-screen flex justify-center pt-[88px]'>
        <div className='flex justify-between w-desktop'>
          <div className='flex flex-col gap-8'>
            {listingData.filter((d, index) => index < firstCol ).map(d => {
              return(
              <Fragment key={d.id}>
                <DirectoryCard 
                  data={d}
                />  
              </Fragment>
            )})}  

          </div>
          <div className='flex flex-col gap-8'>
            {listingData.filter((d, index)=> index >= firstCol   && index < firstCol + secondCol ).map(d => {
              return(
              <Fragment key={d.name}>
                <DirectoryCard 
                  data={d}
                />  
              </Fragment>
            )})}  
          </div>
          <div className='flex flex-col gap-8'>
            {listingData.filter((d, index)=> index >= firstCol + secondCol  ).map(d => {
              return(
              <Fragment key={d.name}>
                <DirectoryCard 
                  data={d}
                />  
              </Fragment>
            )})}  
          </div>  
        </div>
      </section>
      
      
    </main>
    </>
    
  )
}


// users/sign_in?email=test3@test.com&password=test123