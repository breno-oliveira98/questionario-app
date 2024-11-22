import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center">Questionário Online</h1>
        <nav className="mt-3 text-center">
          <a href="#inicio" className="text-white hover:underline mx-4">Início</a>
          <a href="#sobre" className="text-white hover:underline mx-4">Sobre</a>
          <a href="#contato" className="text-white hover:underline mx-4">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
