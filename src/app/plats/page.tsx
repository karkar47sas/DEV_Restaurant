import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const plats = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='background-color-[#121f87] width-300 height-450 border-radius:20px border-[#edc58f]'>
          <div className="">
            <img src="" alt="Plat" className='width:100px align-center' />
            <h2 className='align-center'><span>Plat</span>1</h2>
            <p>Mon 1er plat</p>
            <div className="">
              <button>Réserver</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default plats
