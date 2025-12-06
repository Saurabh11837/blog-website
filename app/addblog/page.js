import React from 'react'
import AddBlog from '../addblog/component/AddNewBlog'
// import Blog from '../addblog/component/Blog '
import NewBlog from './component/Blog'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <AddBlog/>
      {/* <Blog/> */}
      
      <NewBlog/>
    </div>
  )
}

export default page
