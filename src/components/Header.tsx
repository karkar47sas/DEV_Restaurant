import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4">
      <nav className="container mx-auto flex items-center justify-center">
        {/* Ajoutez justify-center ici pour centrer les éléments à l'intérieur du conteneur nav */}
        <div className="flex gap-1">
          <Link href="/accueil" className="px-3 py-2 rounded-md hover:bg-red-500 transition-colors duration-200">
            Accueil
          </Link>
          <Link href="/apropos" className="px-3 py-2 rounded-md hover:bg-red-500 transition-colors duration-200">
            À propos
          </Link>
          <Link href="/plats" className="px-3 py-2 rounded-md hover:bg-red-500 transition-colors duration-200">
            Plats
          </Link>
          <Link href="/contacts" className="px-3 py-2 rounded-md hover:bg-red-500 transition-colors duration-200">
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
