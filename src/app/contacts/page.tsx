import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const contacts = () => {
  return (
    <div>
      <Header />
      <main className="mb-20 mt-20">
        <div className="flex flex-col items-center justify-center gap-10 px-6 md:flex-row">

          <div>
            <img
              src="/Images/contacts.png"
              alt="Contacts"
              height={150}
              width={250}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          <div className="max-w-xl text-center">
            <h2 className="mb-5 text-5xl font-bold">Plus d'informations ?</h2>
            <div className="text-2xl font-bold">
              <span className="text-2xl p-5">Contactez nous</span> <br />
              <span className="text-red-500 p-5">05 10 15 20 25</span> <br />
              <span className="text-red-500">salledesdelices@gmail.com</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contacts;
