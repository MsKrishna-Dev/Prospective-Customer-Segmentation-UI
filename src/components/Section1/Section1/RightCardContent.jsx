import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
          <h2 className='bg-white rounded-full text-2xl font-bold h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
          <div>
              <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quos! Odio tempora laboriosam dolor quasi?</p>
              <div className='flex justify-between'>
                  <button className='bg-gray-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                  <button className='bg-gray-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
              </div>
          </div>
      </div>
  )
}

export default RightCardContent