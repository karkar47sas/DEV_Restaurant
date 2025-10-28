import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const apropos = () => {
  return (
    <div>
      <Header />
       <main className="mb-20 mt-20">
                {/* <div className="flex items-center gap-5 justify-center"> */}
                {/* <div className="flex flex-col lg:flex-row items-center gap-10 px-4"> */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6">

                    {/* <div> */}
                    <div className="max-w-xl text-center lg:text-left">


                        <h2 className="text-center font-bold text-5xl mb-5">Qui sommes nous ?</h2>
                        <p className="text-center font-bold text-2xl">
                            <span className="text-red-500">La salle des délices</span> est un restaurant de qualité <br />
                            <span>Découvrez une cuisine variée, où chaque plat est préparé avec passion. Notre restaurant vous propose un large éventail de saveurs pour satisfaire toutes vos envies.</span> <br />
                            <span> Voyagez à travers les saveurs du monde grâce à notre menu éclectique, conçu pour vous faire vivre une nouvelle expérience à chaque visite.</span> <br />
                            <span> Pour toutes vos envies gourmandes, notre restaurant vous ouvre ses portes. Dans une ambiance conviviale, venez déguster une cuisine variée et généreuse qui saura ravir toute la famille.</span> <br />
                            <span>Des plats variés, une seule adresse. Venez explorer notre carte riche en saveurs, allant des classiques intemporels aux créations les plus originales.</span> <br />
                            <span className="text-red-500 text-3xl">Soyez les bienvenus</span>
                        </p>
                    </div>

                    <div className="mt-10 lg:mt-0">

                        <img
                            src="/Images/tablesResto.jpg"
                            alt="Tables dans un restaurant"
                            height={150}
                            width={450}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
                    </div>
                </div>
            </main>
            <Footer />
    </div>
  )
}

export default apropos
