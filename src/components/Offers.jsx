import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const Offers = () => {
  return (
    <div>
      <div>
      <Title align ='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offer and special packages to enhance your stay and create unforgettable memories'/>      
      <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>View All Offers
      <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all' />
      </button>
      </div>

      <div>
      {exclusiveOffers.map((item)=>(
        <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroungImage:`url(${item.image})`
        }}>
        <p className='px-3 py-1 absolute top-4 left-4 text-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}%OFF</p>
        <div>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p> Expire{item.expiryDate}</p>
        </div>
        <button>
        View Offers
        <img src={assets.arrowIcon} alt="arrow-icon" />
        </button>
      </div>
      ))}
      </div>
      </div>
  )
}

export default Offers
