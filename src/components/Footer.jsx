import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Questionário Online. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="#privacidade" className="text-white hover:underline mx-4">Política de Privacidade</a>
          <a href="#termos" className="text-white hover:underline mx-4">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
