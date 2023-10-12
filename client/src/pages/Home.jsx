import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { list } from 'firebase/storage';

export default function Home() {
  const [offerListings,setOfferListings]=useState([]);
  const [saleListings,setSaleListings]=useState([]);
  const [rentListings,setRentListings]=useState([]);
  SwiperCore.use([Navigation]);
  // console.log(offerListings);
  // console.log(saleListings);
  // console.log(rentListings);


  useEffect(()=>{
    const fetchOfferListings =async()=>{
      try{
        const res =await fetch('/api/listing/get?offer=true&limit=3');
        const data=await res.json();
        setOfferListings(data);
        fetchRentListings();
      }catch(error){
        console.log(error);

      }
    }
    const fetchRentListings=async()=>{
      try{
        const res =await fetch('/api/listing/get?type=rent&limit=3');
        const data=await res.json();
        setRentListings(data);
        fetchSaleListings();
      }catch(error){
        console.log(error)
      }
    }
    const fetchSaleListings=async()=>{
      try{
        const res =await fetch('/api/listing/get?type=sale&limit=3');
        const data=await res.json();
        setSaleListings(data);
      }catch(error){
        console.log(error)
      }
    }
    fetchOfferListings();

  },[])
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl ' >Find your next 
        <span className='text-slate-500'> perfect</span> 
        <br/>place with ease</h1>
        <div className='text-gray-400 text-xs sm:test-sm'>
          JGS Estate will help you find your next perfect home, fast, easy and comfortable.
          <br/>
          We have a wide range of properties for you to choose from.
        </div>
        <Link to={"/search"} className='text-xs sm:text-sm text-blue-700 font-bold hover:underline'>
          Let's get started...
        </Link>
      </div>
      {/* swiper */}
      <Swiper navigation>
        
          {offerListings && offerListings.length >0 && offerListings.map((listing)=>(
            <SwiperSlide key={listing._id} style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize:"cover"}} className='h-[500px]'>
              <div     ></div>
            </SwiperSlide>))

          }
      
      </Swiper>
      
      {/* listing result for offer, sale and rent  */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length >0 && (
            <div className='' >
              <div className='my-3'>
                <h2 className='text-2xl font-semibold'>Recent offers</h2>
                
              </div>
              <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing)=>(
                  <ListingItem key={listing._id} listing={listing}/>
                ))}
              </div>
              <Link className='text-sm text-blue-800 hover:underline ' to={'/search?offer=true'}>Show more offers...</Link>
            </div>
            )}

        {offerListings && offerListings.length >0 && (
            <div className='' >
              <div className='my-3'>
                <h2 className='text-2xl font-semibold'>Recent places for rent</h2>
                
              </div>
              <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing)=>(
                  <ListingItem key={listing._id} listing={listing}/>
                ))}
              </div>
              <Link className='text-sm text-blue-800 hover:underline ' to={'/search?type=rent'}>Show more places for rent...</Link>
            </div>
            )}

        {offerListings && offerListings.length >0 && (
            <div className='' >
              <div className='my-3'>
                <h2 className='text-2xl font-semibold'>Recent places for sale</h2>
                
              </div>
              <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing)=>(
                  <ListingItem key={listing._id} listing={listing}/>
                ))}
              </div>
              <Link className='text-sm text-blue-800 hover:underline ' to={'/search?type=sale'}>Show more places for sale...</Link>
            </div>
            )}


        
      </div>
    </div>
  )
}
