import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
      <div className='px-18 py-8 flex gap-10 justify-between h-[90vh]'>
        <LeftContent />
      <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content