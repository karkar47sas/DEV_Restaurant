import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="font-bold text-lg">La salle des délices</p>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-red-500">Email</a>
          <a href="#" className="text-gray-400 hover:text-red-500">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-red-500">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-red-500">Twitter</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()}  Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
