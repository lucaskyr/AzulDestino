import React from 'react'
import Item from '../components/Item'

const Home = () => {
  return (
    <section>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6 max-w-7xl mx-auto p-8'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </section>
  )
}

export default Home