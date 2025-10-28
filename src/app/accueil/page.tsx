import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const accueil = () => {
  return (
    <div>
      <Header />
       <div>
        <img
          src="/Images/tablesRestov2.jpg"
          alt="Tables dans un restaurant"
          className='w-full'
        />
      </div>
      <div className='text-center text-5xl mt-10 mb-5'>Le festin est ephemere. Votre faim, elle, est eternelle</div> <br />
      <div className='text-5xl text-center mt-5 mb-10'>Ne laissez pas les autres dévorer votre part</div> <br />
      {/* <img src="./Images/tablesResto.jpg" alt="Tables dans un restaurant" /> */}
      <Footer />
    </div>
  )
}

export default accueil;
